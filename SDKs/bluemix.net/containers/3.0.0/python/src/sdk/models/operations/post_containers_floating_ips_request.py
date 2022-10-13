from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostContainersFloatingIpsRequestHeaders:
    x_auth_project_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Project-Id' }})
    x_auth_token: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Token' }})
    

@dataclass
class PostContainersFloatingIpsRequestRequest:
    headers: PostContainersFloatingIpsRequestHeaders = field(default=None)
    

@dataclass
class PostContainersFloatingIpsRequestResponse:
    content_type: str = field(default=None)
    post_containers_floating_ips_request_200_application_json_string: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
