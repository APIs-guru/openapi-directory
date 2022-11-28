from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BigOvenModelApi2GroceryList:
    items: Optional[List[BigOvenModelAPIGroceryItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Items') }})
    last_modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModified'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    recipes: Optional[List[BigOvenModelApi2RecipeInfox]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Recipes') }})
    version_guid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VersionGuid') }})
    
