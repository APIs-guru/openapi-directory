from dataclasses import dataclass, field



@dataclass
class DeletePullRequestHostedPropertyValuePathParams:
    app_key: str = field(metadata={'path_param': { 'field_name': 'app_key', 'style': 'simple', 'explode': False }})
    property_name: str = field(metadata={'path_param': { 'field_name': 'property_name', 'style': 'simple', 'explode': False }})
    pullrequest_id: str = field(metadata={'path_param': { 'field_name': 'pullrequest_id', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePullRequestHostedPropertyValueRequest:
    path_params: DeletePullRequestHostedPropertyValuePathParams = field()
    

@dataclass
class DeletePullRequestHostedPropertyValueResponse:
    content_type: str = field()
    status_code: int = field()
    
