from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostContainersFloatingIpsRequestHeaders:
    x_auth_project_id: str = field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostContainersFloatingIpsRequestRequest:
    headers: PostContainersFloatingIpsRequestHeaders = field()
    

@dataclass
class PostContainersFloatingIpsRequestResponse:
    content_type: str = field()
    status_code: int = field()
    post_containers_floating_ips_request_200_application_json_string: Optional[str] = field(default=None)
    
