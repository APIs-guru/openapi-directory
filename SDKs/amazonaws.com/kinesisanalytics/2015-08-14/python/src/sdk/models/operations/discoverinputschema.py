from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DiscoverInputSchemaXAmzTargetEnum(str, Enum):
    KINESIS_ANALYTICS_20150814_DISCOVER_INPUT_SCHEMA = "KinesisAnalytics_20150814.DiscoverInputSchema"


@dataclass
class DiscoverInputSchemaHeaders:
    x_amz_target: DiscoverInputSchemaXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DiscoverInputSchemaRequest:
    headers: DiscoverInputSchemaHeaders = field()
    request: shared.DiscoverInputSchemaRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DiscoverInputSchemaResponse:
    content_type: str = field()
    status_code: int = field()
    discover_input_schema_response: Optional[shared.DiscoverInputSchemaResponse] = field(default=None)
    invalid_argument_exception: Optional[Any] = field(default=None)
    resource_provisioned_throughput_exceeded_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    unable_to_detect_schema_exception: Optional[Any] = field(default=None)
    
