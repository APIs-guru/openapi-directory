from dataclasses import dataclass, field



@dataclass
class DeleteRepositoryHostedPropertyValuePathParams:
    app_key: str = field(metadata={'path_param': { 'field_name': 'app_key', 'style': 'simple', 'explode': False }})
    property_name: str = field(metadata={'path_param': { 'field_name': 'property_name', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRepositoryHostedPropertyValueRequest:
    path_params: DeleteRepositoryHostedPropertyValuePathParams = field()
    

@dataclass
class DeleteRepositoryHostedPropertyValueResponse:
    content_type: str = field()
    status_code: int = field()
    
