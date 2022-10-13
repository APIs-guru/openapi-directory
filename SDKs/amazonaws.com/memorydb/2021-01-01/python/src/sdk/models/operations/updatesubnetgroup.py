from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class UpdateSubnetGroupXAmzTargetEnum(str, Enum):
    AMAZON_MEMORY_DB_UPDATE_SUBNET_GROUP = "AmazonMemoryDB.UpdateSubnetGroup"


@dataclass
class UpdateSubnetGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: UpdateSubnetGroupXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class UpdateSubnetGroupRequest:
    headers: UpdateSubnetGroupHeaders = field(default=None)
    request: shared.UpdateSubnetGroupRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateSubnetGroupResponse:
    content_type: str = field(default=None)
    invalid_subnet: Optional[Any] = field(default=None)
    service_linked_role_not_found_fault: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    subnet_group_not_found_fault: Optional[Any] = field(default=None)
    subnet_in_use: Optional[Any] = field(default=None)
    subnet_not_allowed_fault: Optional[Any] = field(default=None)
    subnet_quota_exceeded_fault: Optional[Any] = field(default=None)
    update_subnet_group_response: Optional[shared.UpdateSubnetGroupResponse] = field(default=None)
    
