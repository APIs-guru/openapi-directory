from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ResetWebhookLifetimePathParams:
    webhook_id: int = field(metadata={'path_param': { 'field_name': 'webhook_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResetWebhookLifetimeHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResetWebhookLifetimeRequest:
    headers: ResetWebhookLifetimeHeaders = field()
    path_params: ResetWebhookLifetimePathParams = field()
    

@dataclass
class ResetWebhookLifetimeResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    webhook: Optional[shared.Webhook] = field(default=None)
    
