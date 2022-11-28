from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RequestDeletedNodePathParams:
    deleted_node_id: int = field(metadata={'path_param': { 'field_name': 'deleted_node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestDeletedNodeHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestDeletedNodeRequest:
    headers: RequestDeletedNodeHeaders = field()
    path_params: RequestDeletedNodePathParams = field()
    

@dataclass
class RequestDeletedNodeResponse:
    content_type: str = field()
    status_code: int = field()
    deleted_node: Optional[shared.DeletedNode] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
