from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import pushnotificationtemplateresponse


@dataclass_json
@dataclass
class GetPushTemplateResponse:
    push_notification_template_response: pushnotificationtemplateresponse.PushNotificationTemplateResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PushNotificationTemplateResponse' }})
    
