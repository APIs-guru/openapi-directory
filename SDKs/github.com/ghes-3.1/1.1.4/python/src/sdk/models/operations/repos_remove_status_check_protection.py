from dataclasses import dataclass, field



@dataclass
class ReposRemoveStatusCheckProtectionPathParams:
    branch: str = field(default=None, metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposRemoveStatusCheckProtectionRequest:
    path_params: ReposRemoveStatusCheckProtectionPathParams = field(default=None)
    

@dataclass
class ReposRemoveStatusCheckProtectionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
