from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class SecretScanningListAlertsForRepoPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class SecretScanningListAlertsForRepoStateEnum(str, Enum):
    OPEN = "open"
    RESOLVED = "resolved"


@dataclass
class SecretScanningListAlertsForRepoQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    state: Optional[SecretScanningListAlertsForRepoStateEnum] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclass
class SecretScanningListAlertsForRepoRequest:
    path_params: SecretScanningListAlertsForRepoPathParams = field(default=None)
    query_params: SecretScanningListAlertsForRepoQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class SecretScanningListAlertsForRepo503ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class SecretScanningListAlertsForRepoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    secret_scanning_alerts: Optional[List[shared.SecretScanningAlert]] = field(default=None)
    secret_scanning_list_alerts_for_repo_503_application_json_object: Optional[SecretScanningListAlertsForRepo503ApplicationJSON] = field(default=None)
    
