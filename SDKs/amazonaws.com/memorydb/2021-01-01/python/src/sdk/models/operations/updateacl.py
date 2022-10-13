from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class UpdateAclxAmzTargetEnum(str, Enum):
    AMAZON_MEMORY_DB_UPDATE_ACL = "AmazonMemoryDB.UpdateACL"


@dataclass
class UpdateACLHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: UpdateAclxAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class UpdateACLRequest:
    headers: UpdateACLHeaders = field(default=None)
    request: shared.UpdateACLRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateACLResponse:
    acl_not_found_fault: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    default_user_required: Optional[Any] = field(default=None)
    duplicate_user_name_fault: Optional[Any] = field(default=None)
    invalid_acl_state_fault: Optional[Any] = field(default=None)
    invalid_parameter_combination_exception: Optional[Any] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_acl_response: Optional[shared.UpdateACLResponse] = field(default=None)
    user_not_found_fault: Optional[Any] = field(default=None)
    
