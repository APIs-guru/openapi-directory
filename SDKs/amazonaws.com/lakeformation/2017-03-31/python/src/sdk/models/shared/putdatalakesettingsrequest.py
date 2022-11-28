from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutDataLakeSettingsRequest:
    data_lake_settings: DataLakeSettings = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataLakeSettings') }})
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogId') }})
    
