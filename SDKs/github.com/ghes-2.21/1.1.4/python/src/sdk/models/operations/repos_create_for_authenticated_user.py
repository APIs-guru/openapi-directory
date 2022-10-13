from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class ReposCreateForAuthenticatedUserRequestBody:
    allow_merge_commit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_merge_commit' }})
    allow_rebase_merge: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_rebase_merge' }})
    allow_squash_merge: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_squash_merge' }})
    auto_init: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auto_init' }})
    delete_branch_on_merge: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delete_branch_on_merge' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    gitignore_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gitignore_template' }})
    has_downloads: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_downloads' }})
    has_issues: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_issues' }})
    has_projects: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_projects' }})
    has_wiki: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_wiki' }})
    homepage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'homepage' }})
    is_template: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_template' }})
    license_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'license_template' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    private: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private' }})
    team_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team_id' }})
    

@dataclass
class ReposCreateForAuthenticatedUserRequest:
    request: Optional[ReposCreateForAuthenticatedUserRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposCreateForAuthenticatedUserResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    repository: Optional[shared.Repository] = field(default=None)
    scim_error: Optional[shared.ScimError] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
