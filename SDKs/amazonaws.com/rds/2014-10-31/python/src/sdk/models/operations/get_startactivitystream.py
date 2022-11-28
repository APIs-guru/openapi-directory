from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetStartActivityStreamActionEnum(str, Enum):
    START_ACTIVITY_STREAM = "StartActivityStream"

class GetStartActivityStreamModeEnum(str, Enum):
    SYNC = "sync"
    ASYNC = "async"

class GetStartActivityStreamVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclass
class GetStartActivityStreamQueryParams:
    action: GetStartActivityStreamActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    kms_key_id: str = field(metadata={'query_param': { 'field_name': 'KmsKeyId', 'style': 'form', 'explode': True }})
    mode: GetStartActivityStreamModeEnum = field(metadata={'query_param': { 'field_name': 'Mode', 'style': 'form', 'explode': True }})
    resource_arn: str = field(metadata={'query_param': { 'field_name': 'ResourceArn', 'style': 'form', 'explode': True }})
    version: GetStartActivityStreamVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    apply_immediately: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'ApplyImmediately', 'style': 'form', 'explode': True }})
    engine_native_audit_fields_included: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'EngineNativeAuditFieldsIncluded', 'style': 'form', 'explode': True }})
    

@dataclass
class GetStartActivityStreamHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStartActivityStreamRequest:
    headers: GetStartActivityStreamHeaders = field()
    query_params: GetStartActivityStreamQueryParams = field()
    

@dataclass
class GetStartActivityStreamResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
