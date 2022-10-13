from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import datalakesettings


@dataclass_json
@dataclass
class PutDataLakeSettingsRequest:
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CatalogId' }})
    data_lake_settings: datalakesettings.DataLakeSettings = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataLakeSettings' }})
    
