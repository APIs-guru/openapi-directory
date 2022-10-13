from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CancelChangeSetQueryParams:
    catalog: str = field(default=None, metadata={'query_param': { 'field_name': 'catalog', 'style': 'form', 'explode': True }})
    change_set_id: str = field(default=None, metadata={'query_param': { 'field_name': 'changeSetId', 'style': 'form', 'explode': True }})
    

@dataclass
class CancelChangeSetHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class CancelChangeSetRequest:
    query_params: CancelChangeSetQueryParams = field(default=None)
    headers: CancelChangeSetHeaders = field(default=None)
    

@dataclass
class CancelChangeSetResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    cancel_change_set_response: Optional[shared.CancelChangeSetResponse] = field(default=None)
    content_type: str = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
