from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class CreateSubnetGroupXAmzTargetEnum(str, Enum):
    AMAZON_MEMORY_DB_CREATE_SUBNET_GROUP = "AmazonMemoryDB.CreateSubnetGroup"


@dataclass
class CreateSubnetGroupHeaders:
    x_amz_target: CreateSubnetGroupXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSubnetGroupRequest:
    headers: CreateSubnetGroupHeaders = field()
    request: shared.CreateSubnetGroupRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateSubnetGroupResponse:
    content_type: str = field()
    status_code: int = field()
    create_subnet_group_response: Optional[shared.CreateSubnetGroupResponse] = field(default=None)
    invalid_subnet: Optional[Any] = field(default=None)
    service_linked_role_not_found_fault: Optional[Any] = field(default=None)
    subnet_group_already_exists_fault: Optional[Any] = field(default=None)
    subnet_group_quota_exceeded_fault: Optional[Any] = field(default=None)
    subnet_not_allowed_fault: Optional[Any] = field(default=None)
    subnet_quota_exceeded_fault: Optional[Any] = field(default=None)
    tag_quota_per_resource_exceeded: Optional[Any] = field(default=None)
    
