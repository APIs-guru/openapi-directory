from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DetectProtectiveEquipmentXAmzTargetEnum(str, Enum):
    REKOGNITION_SERVICE_DETECT_PROTECTIVE_EQUIPMENT = "RekognitionService.DetectProtectiveEquipment"


@dataclass
class DetectProtectiveEquipmentHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: DetectProtectiveEquipmentXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class DetectProtectiveEquipmentRequest:
    headers: DetectProtectiveEquipmentHeaders = field(default=None)
    request: shared.DetectProtectiveEquipmentRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DetectProtectiveEquipmentResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    detect_protective_equipment_response: Optional[shared.DetectProtectiveEquipmentResponse] = field(default=None)
    image_too_large_exception: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_image_format_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    invalid_s3_object_exception: Optional[Any] = field(default=None)
    provisioned_throughput_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
