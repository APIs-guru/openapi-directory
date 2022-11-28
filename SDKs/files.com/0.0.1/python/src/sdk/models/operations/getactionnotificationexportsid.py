from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetActionNotificationExportsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetActionNotificationExportsIDRequest:
    path_params: GetActionNotificationExportsIDPathParams = field()
    

@dataclass
class GetActionNotificationExportsIDResponse:
    content_type: str = field()
    status_code: int = field()
    action_notification_export_entity: Optional[shared.ActionNotificationExportEntity] = field(default=None)
    
