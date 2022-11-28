from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclass
class DeleteSlotTypePathParams:
    bot_id: str = field(metadata={'path_param': { 'field_name': 'botId', 'style': 'simple', 'explode': False }})
    bot_version: str = field(metadata={'path_param': { 'field_name': 'botVersion', 'style': 'simple', 'explode': False }})
    locale_id: str = field(metadata={'path_param': { 'field_name': 'localeId', 'style': 'simple', 'explode': False }})
    slot_type_id: str = field(metadata={'path_param': { 'field_name': 'slotTypeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSlotTypeQueryParams:
    skip_resource_in_use_check: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'skipResourceInUseCheck', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteSlotTypeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSlotTypeRequest:
    headers: DeleteSlotTypeHeaders = field()
    path_params: DeleteSlotTypePathParams = field()
    query_params: DeleteSlotTypeQueryParams = field()
    

@dataclass
class DeleteSlotTypeResponse:
    content_type: str = field()
    status_code: int = field()
    conflict_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    precondition_failed_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
