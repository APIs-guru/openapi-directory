from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class RegisterPatchBaselineForPatchGroupXAmzTargetEnum(str, Enum):
    AMAZON_SSM_REGISTER_PATCH_BASELINE_FOR_PATCH_GROUP = "AmazonSSM.RegisterPatchBaselineForPatchGroup"


@dataclass
class RegisterPatchBaselineForPatchGroupHeaders:
    x_amz_target: RegisterPatchBaselineForPatchGroupXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegisterPatchBaselineForPatchGroupRequest:
    headers: RegisterPatchBaselineForPatchGroupHeaders = field()
    request: shared.RegisterPatchBaselineForPatchGroupRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RegisterPatchBaselineForPatchGroupResponse:
    content_type: str = field()
    status_code: int = field()
    already_exists_exception: Optional[Any] = field(default=None)
    does_not_exist_exception: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_resource_id: Optional[Any] = field(default=None)
    register_patch_baseline_for_patch_group_result: Optional[shared.RegisterPatchBaselineForPatchGroupResult] = field(default=None)
    resource_limit_exceeded_exception: Optional[Any] = field(default=None)
    
