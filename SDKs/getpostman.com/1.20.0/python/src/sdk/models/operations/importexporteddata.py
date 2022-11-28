from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ImportExportedData200ApplicationJSONCollections:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    

@dataclass_json
@dataclass
class ImportExportedData200ApplicationJSON:
    collections: Optional[List[ImportExportedData200ApplicationJSONCollections]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collections') }})
    

@dataclass_json
@dataclass
class ImportExportedData400ApplicationJSONErrorDetails:
    param: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('param') }})
    

@dataclass_json
@dataclass
class ImportExportedData400ApplicationJSONError:
    details: Optional[ImportExportedData400ApplicationJSONErrorDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class ImportExportedData400ApplicationJSON:
    error: Optional[ImportExportedData400ApplicationJSONError] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    

@dataclass
class ImportExportedDataRequest:
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/octet-stream' }})
    

@dataclass
class ImportExportedDataResponse:
    content_type: str = field()
    status_code: int = field()
    import_exported_data_200_application_json_object: Optional[ImportExportedData200ApplicationJSON] = field(default=None)
    import_exported_data_400_application_json_object: Optional[ImportExportedData400ApplicationJSON] = field(default=None)
    
