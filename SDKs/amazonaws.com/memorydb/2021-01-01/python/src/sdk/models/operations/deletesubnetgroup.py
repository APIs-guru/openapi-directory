from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DeleteSubnetGroupXAmzTargetEnum(str, Enum):
    AMAZON_MEMORY_DB_DELETE_SUBNET_GROUP = "AmazonMemoryDB.DeleteSubnetGroup"


@dataclass
class DeleteSubnetGroupHeaders:
    x_amz_target: DeleteSubnetGroupXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSubnetGroupRequest:
    headers: DeleteSubnetGroupHeaders = field()
    request: shared.DeleteSubnetGroupRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteSubnetGroupResponse:
    content_type: str = field()
    status_code: int = field()
    delete_subnet_group_response: Optional[shared.DeleteSubnetGroupResponse] = field(default=None)
    service_linked_role_not_found_fault: Optional[Any] = field(default=None)
    subnet_group_in_use_fault: Optional[Any] = field(default=None)
    subnet_group_not_found_fault: Optional[Any] = field(default=None)
    
