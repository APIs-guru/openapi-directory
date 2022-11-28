from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetPushTemplateResponse:
    push_notification_template_response: PushNotificationTemplateResponse = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PushNotificationTemplateResponse') }})
    
