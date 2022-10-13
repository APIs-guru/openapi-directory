from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import bigoven_model_api_grocery_item
from . import bigoven_model_api2_recipeinfox


@dataclass_json
@dataclass
class BigOvenModelApi2GroceryList:
    items: Optional[List[bigoven_model_api_grocery_item.BigOvenModelAPIGroceryItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Items' }})
    last_modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModified', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    recipes: Optional[List[bigoven_model_api2_recipeinfox.BigOvenModelApi2RecipeInfox]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Recipes' }})
    version_guid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VersionGuid' }})
    
