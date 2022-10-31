from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class PutLoggingConfigurationXAmzTargetEnum(str, Enum):
    AWSWAF_20150824_PUT_LOGGING_CONFIGURATION = "AWSWAF_20150824.PutLoggingConfiguration"


@dataclass
class PutLoggingConfigurationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: PutLoggingConfigurationXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutLoggingConfigurationRequest:
    headers: PutLoggingConfigurationHeaders = field(default=None)
    request: shared.PutLoggingConfigurationRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutLoggingConfigurationResponse:
    content_type: str = field(default=None)
    put_logging_configuration_response: Optional[shared.PutLoggingConfigurationResponse] = field(default=None)
    status_code: int = field(default=None)
    waf_internal_error_exception: Optional[Any] = field(default=None)
    waf_nonexistent_item_exception: Optional[Any] = field(default=None)
    waf_service_linked_role_error_exception: Optional[Any] = field(default=None)
    waf_stale_data_exception: Optional[Any] = field(default=None)
    
