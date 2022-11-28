from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetAdminBackupsJSON200ApplicationJSON:
    filename: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filename') }})
    last_modified: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_modified') }})
    size: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    

@dataclass
class GetAdminBackupsJSONResponse:
    content_type: str = field()
    status_code: int = field()
    get_admin_backups_json_200_application_json_objects: Optional[List[GetAdminBackupsJSON200ApplicationJSON]] = field(default=None)
    
