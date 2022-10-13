from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class OrgsUpdatePathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    
class OrgsUpdateRequestBodyDefaultRepositoryPermissionEnum(str, Enum):
    READ = "read"
    WRITE = "write"
    ADMIN = "admin"
    NONE = "none"

class OrgsUpdateRequestBodyMembersAllowedRepositoryCreationTypeEnum(str, Enum):
    ALL = "all"
    PRIVATE = "private"
    NONE = "none"


@dataclass_json
@dataclass
class OrgsUpdateRequestBody:
    billing_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billing_email' }})
    blog: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blog' }})
    company: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'company' }})
    default_repository_permission: Optional[OrgsUpdateRequestBodyDefaultRepositoryPermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default_repository_permission' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    has_organization_projects: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_organization_projects' }})
    has_repository_projects: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_repository_projects' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    members_allowed_repository_creation_type: Optional[OrgsUpdateRequestBodyMembersAllowedRepositoryCreationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members_allowed_repository_creation_type' }})
    members_can_create_internal_repositories: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members_can_create_internal_repositories' }})
    members_can_create_pages: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members_can_create_pages' }})
    members_can_create_private_repositories: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members_can_create_private_repositories' }})
    members_can_create_public_repositories: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members_can_create_public_repositories' }})
    members_can_create_repositories: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members_can_create_repositories' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    twitter_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'twitter_username' }})
    

@dataclass
class OrgsUpdateRequest:
    path_params: OrgsUpdatePathParams = field(default=None)
    request: Optional[OrgsUpdateRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class OrgsUpdate415ApplicationJSON:
    documentation_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class OrgsUpdateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    organization_full: Optional[shared.OrganizationFull] = field(default=None)
    orgs_update_415_application_json_object: Optional[OrgsUpdate415ApplicationJSON] = field(default=None)
    orgs_update_422_application_json_one_of: Optional[Any] = field(default=None)
    
