from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import datalakesettings


@dataclass_json
@dataclass
class GetDataLakeSettingsResponse:
    data_lake_settings: Optional[datalakesettings.DataLakeSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataLakeSettings' }})
    
