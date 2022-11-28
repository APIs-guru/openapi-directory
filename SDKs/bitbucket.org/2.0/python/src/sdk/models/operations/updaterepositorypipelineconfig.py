from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclass
class UpdateRepositoryPipelineConfigPathParams:
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateRepositoryPipelineConfigRequest:
    path_params: UpdateRepositoryPipelineConfigPathParams = field()
    request: dict[str, Any] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateRepositoryPipelineConfigResponse:
    content_type: str = field()
    status_code: int = field()
    pipelines_config: Optional[dict[str, Any]] = field(default=None)
    
