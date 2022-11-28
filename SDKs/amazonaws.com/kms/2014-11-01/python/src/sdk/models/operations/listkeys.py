from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ListKeysQueryParams:
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Limit', 'style': 'form', 'explode': True }})
    marker: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    
class ListKeysXAmzTargetEnum(str, Enum):
    TRENT_SERVICE_LIST_KEYS = "TrentService.ListKeys"


@dataclass
class ListKeysHeaders:
    x_amz_target: ListKeysXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListKeysRequest:
    headers: ListKeysHeaders = field()
    query_params: ListKeysQueryParams = field()
    request: shared.ListKeysRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListKeysResponse:
    content_type: str = field()
    status_code: int = field()
    dependency_timeout_exception: Optional[Any] = field(default=None)
    invalid_marker_exception: Optional[Any] = field(default=None)
    kms_internal_exception: Optional[Any] = field(default=None)
    list_keys_response: Optional[shared.ListKeysResponse] = field(default=None)
    
