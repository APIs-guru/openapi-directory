from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DeleteAssociationXAmzTargetEnum(str, Enum):
    AMAZON_SSM_DELETE_ASSOCIATION = "AmazonSSM.DeleteAssociation"


@dataclass
class DeleteAssociationHeaders:
    x_amz_target: DeleteAssociationXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAssociationRequest:
    headers: DeleteAssociationHeaders = field()
    request: shared.DeleteAssociationRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteAssociationResponse:
    content_type: str = field()
    status_code: int = field()
    association_does_not_exist: Optional[Any] = field(default=None)
    delete_association_result: Optional[dict[str, Any]] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_document: Optional[Any] = field(default=None)
    invalid_instance_id: Optional[Any] = field(default=None)
    too_many_updates: Optional[Any] = field(default=None)
    
