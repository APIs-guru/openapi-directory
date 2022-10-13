from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetWebAclxAmzTargetEnum(str, Enum):
    AWSWAF_20150824_GET_WEB_ACL = "AWSWAF_20150824.GetWebACL"


@dataclass
class GetWebACLHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetWebAclxAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetWebACLRequest:
    headers: GetWebACLHeaders = field(default=None)
    request: shared.GetWebACLRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetWebACLResponse:
    content_type: str = field(default=None)
    get_web_acl_response: Optional[shared.GetWebACLResponse] = field(default=None)
    status_code: int = field(default=None)
    waf_internal_error_exception: Optional[Any] = field(default=None)
    waf_invalid_account_exception: Optional[Any] = field(default=None)
    waf_nonexistent_item_exception: Optional[Any] = field(default=None)
    
