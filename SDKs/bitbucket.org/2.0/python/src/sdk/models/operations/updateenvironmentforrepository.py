from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclass
class UpdateEnvironmentForRepositoryPathParams:
    environment_uuid: str = field(metadata={'path_param': { 'field_name': 'environment_uuid', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateEnvironmentForRepositoryRequest:
    path_params: UpdateEnvironmentForRepositoryPathParams = field()
    

@dataclass
class UpdateEnvironmentForRepositoryResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    
