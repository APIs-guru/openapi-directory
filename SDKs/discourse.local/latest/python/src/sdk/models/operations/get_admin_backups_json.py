from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetAdminBackupsJSON200ApplicationJSON:
    filename: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filename' }})
    last_modified: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_modified' }})
    size: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    

@dataclass
class GetAdminBackupsJSONResponse:
    content_type: str = field(default=None)
    get_admin_backups_json_200_application_json_objects: Optional[List[GetAdminBackupsJSON200ApplicationJSON]] = field(default=None)
    status_code: int = field(default=None)
    
