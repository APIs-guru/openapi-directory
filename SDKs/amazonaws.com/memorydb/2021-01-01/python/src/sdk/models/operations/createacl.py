from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateAclxAmzTargetEnum(str, Enum):
    AMAZON_MEMORY_DB_CREATE_ACL = "AmazonMemoryDB.CreateACL"


@dataclass
class CreateACLHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: CreateAclxAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class CreateACLRequest:
    headers: CreateACLHeaders = field(default=None)
    request: shared.CreateACLRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateACLResponse:
    acl_already_exists_fault: Optional[Any] = field(default=None)
    acl_quota_exceeded_fault: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_acl_response: Optional[shared.CreateACLResponse] = field(default=None)
    default_user_required: Optional[Any] = field(default=None)
    duplicate_user_name_fault: Optional[Any] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    tag_quota_per_resource_exceeded: Optional[Any] = field(default=None)
    user_not_found_fault: Optional[Any] = field(default=None)
    
