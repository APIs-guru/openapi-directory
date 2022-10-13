from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Recipe:
    algorithm_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'algorithmArn' }})
    creation_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    feature_transformation_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'featureTransformationArn' }})
    last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    recipe_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipeArn' }})
    recipe_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipeType' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
