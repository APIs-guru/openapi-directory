from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetActionNotificationExportsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetActionNotificationExportsIDRequest:
    path_params: GetActionNotificationExportsIDPathParams = field(default=None)
    

@dataclass
class GetActionNotificationExportsIDResponse:
    action_notification_export_entity: Optional[shared.ActionNotificationExportEntity] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
