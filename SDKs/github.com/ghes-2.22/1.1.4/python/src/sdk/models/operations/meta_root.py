from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MetaRoot200ApplicationJSON:
    authorizations_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizations_url' }})
    code_search_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code_search_url' }})
    commit_search_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commit_search_url' }})
    current_user_authorizations_html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_user_authorizations_html_url' }})
    current_user_repositories_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_user_repositories_url' }})
    current_user_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_user_url' }})
    emails_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emails_url' }})
    emojis_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emojis_url' }})
    events_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events_url' }})
    feeds_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feeds_url' }})
    followers_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'followers_url' }})
    following_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'following_url' }})
    gists_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gists_url' }})
    hub_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hub_url' }})
    issue_search_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issue_search_url' }})
    issues_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issues_url' }})
    keys_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keys_url' }})
    label_search_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label_search_url' }})
    notifications_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notifications_url' }})
    organization_repositories_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization_repositories_url' }})
    organization_teams_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization_teams_url' }})
    organization_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization_url' }})
    public_gists_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_gists_url' }})
    rate_limit_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rate_limit_url' }})
    repository_search_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository_search_url' }})
    repository_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository_url' }})
    starred_gists_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'starred_gists_url' }})
    starred_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'starred_url' }})
    topic_search_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic_search_url' }})
    user_organizations_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_organizations_url' }})
    user_repositories_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_repositories_url' }})
    user_search_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_search_url' }})
    user_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_url' }})
    

@dataclass
class MetaRootResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    meta_root_200_application_json_object: Optional[MetaRoot200ApplicationJSON] = field(default=None)
    
