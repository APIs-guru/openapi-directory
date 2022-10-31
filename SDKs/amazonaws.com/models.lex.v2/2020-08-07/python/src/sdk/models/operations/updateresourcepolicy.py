from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateResourcePolicyPathParams:
    resource_arn: str = field(default=None, metadata={'path_param': { 'field_name': 'resourceArn', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateResourcePolicyQueryParams:
    expected_revision_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'expectedRevisionId', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdateResourcePolicyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateResourcePolicyRequestBody:
    policy: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy' }})
    

@dataclass
class UpdateResourcePolicyRequest:
    path_params: UpdateResourcePolicyPathParams = field(default=None)
    query_params: UpdateResourcePolicyQueryParams = field(default=None)
    headers: UpdateResourcePolicyHeaders = field(default=None)
    request: UpdateResourcePolicyRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateResourcePolicyResponse:
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    precondition_failed_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_resource_policy_response: Optional[shared.UpdateResourcePolicyResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
