from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteEmailIdentityPolicyPathParams:
    email_identity: str = field(default=None, metadata={'path_param': { 'field_name': 'EmailIdentity', 'style': 'simple', 'explode': False }})
    policy_name: str = field(default=None, metadata={'path_param': { 'field_name': 'PolicyName', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteEmailIdentityPolicyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class DeleteEmailIdentityPolicyRequest:
    path_params: DeleteEmailIdentityPolicyPathParams = field(default=None)
    headers: DeleteEmailIdentityPolicyHeaders = field(default=None)
    

@dataclass
class DeleteEmailIdentityPolicyResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    delete_email_identity_policy_response: Optional[dict[str, Any]] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
