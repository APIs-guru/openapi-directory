from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclass
class UpdatePipelineVariableForWorkspacePathParams:
    variable_uuid: str = field(metadata={'path_param': { 'field_name': 'variable_uuid', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePipelineVariableForWorkspaceRequest:
    path_params: UpdatePipelineVariableForWorkspacePathParams = field()
    request: dict[str, Any] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdatePipelineVariableForWorkspaceResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    pipeline_variable: Optional[dict[str, Any]] = field(default=None)
    
