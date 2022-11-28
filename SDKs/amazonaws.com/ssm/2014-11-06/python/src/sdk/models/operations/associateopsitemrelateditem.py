from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class AssociateOpsItemRelatedItemXAmzTargetEnum(str, Enum):
    AMAZON_SSM_ASSOCIATE_OPS_ITEM_RELATED_ITEM = "AmazonSSM.AssociateOpsItemRelatedItem"


@dataclass
class AssociateOpsItemRelatedItemHeaders:
    x_amz_target: AssociateOpsItemRelatedItemXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class AssociateOpsItemRelatedItemRequest:
    headers: AssociateOpsItemRelatedItemHeaders = field()
    request: shared.AssociateOpsItemRelatedItemRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AssociateOpsItemRelatedItemResponse:
    content_type: str = field()
    status_code: int = field()
    associate_ops_item_related_item_response: Optional[shared.AssociateOpsItemRelatedItemResponse] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    ops_item_invalid_parameter_exception: Optional[Any] = field(default=None)
    ops_item_limit_exceeded_exception: Optional[Any] = field(default=None)
    ops_item_not_found_exception: Optional[Any] = field(default=None)
    ops_item_related_item_already_exists_exception: Optional[Any] = field(default=None)
    
