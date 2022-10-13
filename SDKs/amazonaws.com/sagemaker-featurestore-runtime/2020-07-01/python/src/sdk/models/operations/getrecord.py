from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetRecordPathParams:
    feature_group_name: str = field(default=None, metadata={'path_param': { 'field_name': 'FeatureGroupName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRecordQueryParams:
    feature_name: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'FeatureName', 'style': 'form', 'explode': True }})
    record_identifier_value_as_string: str = field(default=None, metadata={'query_param': { 'field_name': 'RecordIdentifierValueAsString', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRecordHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetRecordRequest:
    path_params: GetRecordPathParams = field(default=None)
    query_params: GetRecordQueryParams = field(default=None)
    headers: GetRecordHeaders = field(default=None)
    

@dataclass
class GetRecordResponse:
    access_forbidden: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_record_response: Optional[shared.GetRecordResponse] = field(default=None)
    internal_failure: Optional[Any] = field(default=None)
    resource_not_found: Optional[Any] = field(default=None)
    service_unavailable: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_error: Optional[Any] = field(default=None)
    
