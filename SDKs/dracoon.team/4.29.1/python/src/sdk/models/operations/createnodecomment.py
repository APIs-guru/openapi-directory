from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CreateNodeCommentPathParams:
    node_id: int = field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateNodeCommentHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateNodeCommentRequest:
    headers: CreateNodeCommentHeaders = field()
    path_params: CreateNodeCommentPathParams = field()
    request: shared.CreateNodeCommentRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNodeCommentResponse:
    content_type: str = field()
    status_code: int = field()
    comment: Optional[shared.Comment] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
