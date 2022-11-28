from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AppsGetInstallationPathParams:
    installation_id: int = field(metadata={'path_param': { 'field_name': 'installation_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AppsGetInstallation415ApplicationJSON:
    documentation_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class AppsGetInstallationRequest:
    path_params: AppsGetInstallationPathParams = field()
    

@dataclass
class AppsGetInstallationResponse:
    content_type: str = field()
    status_code: int = field()
    apps_get_installation_415_application_json_object: Optional[AppsGetInstallation415ApplicationJSON] = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    installation: Optional[shared.Installation] = field(default=None)
    
