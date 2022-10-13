from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AppsGetInstallationPathParams:
    installation_id: int = field(default=None, metadata={'path_param': { 'field_name': 'installation_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppsGetInstallationRequest:
    path_params: AppsGetInstallationPathParams = field(default=None)
    

@dataclass_json
@dataclass
class AppsGetInstallation415ApplicationJSON:
    documentation_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class AppsGetInstallationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    apps_get_installation_415_application_json_object: Optional[AppsGetInstallation415ApplicationJSON] = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    installation: Optional[shared.Installation] = field(default=None)
    
