from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UpdateTenantWebhookPathParams:
    webhook_id: int = field(metadata={'path_param': { 'field_name': 'webhook_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTenantWebhookHeaders:
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    x_sds_service_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Service-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTenantWebhookRequest:
    headers: UpdateTenantWebhookHeaders = field()
    path_params: UpdateTenantWebhookPathParams = field()
    request: shared.UpdateWebhookRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateTenantWebhookResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    webhook: Optional[shared.Webhook] = field(default=None)
    
