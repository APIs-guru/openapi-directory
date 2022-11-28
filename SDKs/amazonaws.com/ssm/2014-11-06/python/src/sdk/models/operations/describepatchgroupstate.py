from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DescribePatchGroupStateXAmzTargetEnum(str, Enum):
    AMAZON_SSM_DESCRIBE_PATCH_GROUP_STATE = "AmazonSSM.DescribePatchGroupState"


@dataclass
class DescribePatchGroupStateHeaders:
    x_amz_target: DescribePatchGroupStateXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribePatchGroupStateRequest:
    headers: DescribePatchGroupStateHeaders = field()
    request: shared.DescribePatchGroupStateRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribePatchGroupStateResponse:
    content_type: str = field()
    status_code: int = field()
    describe_patch_group_state_result: Optional[shared.DescribePatchGroupStateResult] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_next_token: Optional[Any] = field(default=None)
    
