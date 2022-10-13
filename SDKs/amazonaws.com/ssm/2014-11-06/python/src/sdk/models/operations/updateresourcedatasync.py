from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class UpdateResourceDataSyncXAmzTargetEnum(str, Enum):
    AMAZON_SSM_UPDATE_RESOURCE_DATA_SYNC = "AmazonSSM.UpdateResourceDataSync"


@dataclass
class UpdateResourceDataSyncHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: UpdateResourceDataSyncXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class UpdateResourceDataSyncRequest:
    headers: UpdateResourceDataSyncHeaders = field(default=None)
    request: shared.UpdateResourceDataSyncRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateResourceDataSyncResponse:
    content_type: str = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    resource_data_sync_conflict_exception: Optional[Any] = field(default=None)
    resource_data_sync_invalid_configuration_exception: Optional[Any] = field(default=None)
    resource_data_sync_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_resource_data_sync_result: Optional[dict[str, Any]] = field(default=None)
    
