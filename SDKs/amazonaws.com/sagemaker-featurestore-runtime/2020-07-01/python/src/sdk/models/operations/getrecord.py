from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetRecordPathParams:
    feature_group_name: str = field(metadata={'path_param': { 'field_name': 'FeatureGroupName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRecordQueryParams:
    record_identifier_value_as_string: str = field(metadata={'query_param': { 'field_name': 'RecordIdentifierValueAsString', 'style': 'form', 'explode': True }})
    feature_name: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'FeatureName', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRecordHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRecordRequest:
    headers: GetRecordHeaders = field()
    path_params: GetRecordPathParams = field()
    query_params: GetRecordQueryParams = field()
    

@dataclass
class GetRecordResponse:
    content_type: str = field()
    status_code: int = field()
    access_forbidden: Optional[Any] = field(default=None)
    get_record_response: Optional[shared.GetRecordResponse] = field(default=None)
    internal_failure: Optional[Any] = field(default=None)
    resource_not_found: Optional[Any] = field(default=None)
    service_unavailable: Optional[Any] = field(default=None)
    validation_error: Optional[Any] = field(default=None)
    
