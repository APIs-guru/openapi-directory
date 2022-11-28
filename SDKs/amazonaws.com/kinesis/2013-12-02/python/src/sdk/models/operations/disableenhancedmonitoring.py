from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DisableEnhancedMonitoringXAmzTargetEnum(str, Enum):
    KINESIS_20131202_DISABLE_ENHANCED_MONITORING = "Kinesis_20131202.DisableEnhancedMonitoring"


@dataclass
class DisableEnhancedMonitoringHeaders:
    x_amz_target: DisableEnhancedMonitoringXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisableEnhancedMonitoringRequest:
    headers: DisableEnhancedMonitoringHeaders = field()
    request: shared.DisableEnhancedMonitoringInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DisableEnhancedMonitoringResponse:
    content_type: str = field()
    status_code: int = field()
    enhanced_monitoring_output: Optional[shared.EnhancedMonitoringOutput] = field(default=None)
    invalid_argument_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    
