from dataclasses import dataclass, field
from typing import Enum,Optional

class GetStartActivityStreamActionEnum(str, Enum):
    START_ACTIVITY_STREAM = "StartActivityStream"

class GetStartActivityStreamModeEnum(str, Enum):
    SYNC = "sync"
    ASYNC = "async"

class GetStartActivityStreamVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclass
class GetStartActivityStreamQueryParams:
    action: GetStartActivityStreamActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    apply_immediately: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'ApplyImmediately', 'style': 'form', 'explode': True }})
    engine_native_audit_fields_included: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'EngineNativeAuditFieldsIncluded', 'style': 'form', 'explode': True }})
    kms_key_id: str = field(default=None, metadata={'query_param': { 'field_name': 'KmsKeyId', 'style': 'form', 'explode': True }})
    mode: GetStartActivityStreamModeEnum = field(default=None, metadata={'query_param': { 'field_name': 'Mode', 'style': 'form', 'explode': True }})
    resource_arn: str = field(default=None, metadata={'query_param': { 'field_name': 'ResourceArn', 'style': 'form', 'explode': True }})
    version: GetStartActivityStreamVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetStartActivityStreamHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetStartActivityStreamRequest:
    query_params: GetStartActivityStreamQueryParams = field(default=None)
    headers: GetStartActivityStreamHeaders = field(default=None)
    

@dataclass
class GetStartActivityStreamResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
