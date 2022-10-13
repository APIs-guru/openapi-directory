from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Dataset:
    creation_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dataset_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasetArn' }})
    dataset_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasetGroupArn' }})
    dataset_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasetType' }})
    last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    schema_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemaArn' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
