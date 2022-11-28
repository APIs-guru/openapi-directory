from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class PutInventoryXAmzTargetEnum(str, Enum):
    AMAZON_SSM_PUT_INVENTORY = "AmazonSSM.PutInventory"


@dataclass
class PutInventoryHeaders:
    x_amz_target: PutInventoryXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutInventoryRequest:
    headers: PutInventoryHeaders = field()
    request: shared.PutInventoryRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutInventoryResponse:
    content_type: str = field()
    status_code: int = field()
    custom_schema_count_limit_exceeded_exception: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_instance_id: Optional[Any] = field(default=None)
    invalid_inventory_item_context_exception: Optional[Any] = field(default=None)
    invalid_item_content_exception: Optional[Any] = field(default=None)
    invalid_type_name_exception: Optional[Any] = field(default=None)
    item_content_mismatch_exception: Optional[Any] = field(default=None)
    item_size_limit_exceeded_exception: Optional[Any] = field(default=None)
    put_inventory_result: Optional[shared.PutInventoryResult] = field(default=None)
    sub_type_count_limit_exceeded_exception: Optional[Any] = field(default=None)
    total_size_limit_exceeded_exception: Optional[Any] = field(default=None)
    unsupported_inventory_item_context_exception: Optional[Any] = field(default=None)
    unsupported_inventory_schema_version_exception: Optional[Any] = field(default=None)
    
