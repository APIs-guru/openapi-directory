from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import bigoven_model_api2_recipeinfox


@dataclass_json
@dataclass
class BigOvenModelRecipeInfoDateTuple2:
    date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    recipe_info: Optional[bigoven_model_api2_recipeinfox.BigOvenModelApi2RecipeInfox] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipeInfo' }})
    
