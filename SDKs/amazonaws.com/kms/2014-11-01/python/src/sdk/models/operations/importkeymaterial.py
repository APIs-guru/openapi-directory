from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class ImportKeyMaterialXAmzTargetEnum(str, Enum):
    TRENT_SERVICE_IMPORT_KEY_MATERIAL = "TrentService.ImportKeyMaterial"


@dataclass
class ImportKeyMaterialHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: ImportKeyMaterialXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class ImportKeyMaterialRequest:
    headers: ImportKeyMaterialHeaders = field(default=None)
    request: shared.ImportKeyMaterialRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ImportKeyMaterialResponse:
    content_type: str = field(default=None)
    dependency_timeout_exception: Optional[Any] = field(default=None)
    expired_import_token_exception: Optional[Any] = field(default=None)
    import_key_material_response: Optional[dict[str, Any]] = field(default=None)
    incorrect_key_material_exception: Optional[Any] = field(default=None)
    invalid_arn_exception: Optional[Any] = field(default=None)
    invalid_ciphertext_exception: Optional[Any] = field(default=None)
    invalid_import_token_exception: Optional[Any] = field(default=None)
    kms_internal_exception: Optional[Any] = field(default=None)
    kms_invalid_state_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unsupported_operation_exception: Optional[Any] = field(default=None)
    
