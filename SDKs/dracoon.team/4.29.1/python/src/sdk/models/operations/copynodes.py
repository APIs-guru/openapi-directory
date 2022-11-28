from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CopyNodesPathParams:
    node_id: int = field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CopyNodesHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    

@dataclass
class CopyNodesRequest:
    headers: CopyNodesHeaders = field()
    path_params: CopyNodesPathParams = field()
    request: shared.CopyNodesRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CopyNodesResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    node: Optional[shared.Node] = field(default=None)
    copy_nodes_204_application_json_string: Optional[str] = field(default=None)
    
