from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class CreateResourceDataSyncXAmzTargetEnum(str, Enum):
    AMAZON_SSM_CREATE_RESOURCE_DATA_SYNC = "AmazonSSM.CreateResourceDataSync"


@dataclass
class CreateResourceDataSyncHeaders:
    x_amz_target: CreateResourceDataSyncXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateResourceDataSyncRequest:
    headers: CreateResourceDataSyncHeaders = field()
    request: shared.CreateResourceDataSyncRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateResourceDataSyncResponse:
    content_type: str = field()
    status_code: int = field()
    create_resource_data_sync_result: Optional[dict[str, Any]] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    resource_data_sync_already_exists_exception: Optional[Any] = field(default=None)
    resource_data_sync_count_exceeded_exception: Optional[Any] = field(default=None)
    resource_data_sync_invalid_configuration_exception: Optional[Any] = field(default=None)
    
