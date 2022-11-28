from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CustomMessageActivity:
    r"""CustomMessageActivity
    The settings for a custom message activity. This type of activity calls an AWS Lambda function or web hook that sends messages to participants.
    """
    
    delivery_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryUri') }})
    endpoint_types: Optional[List[EndpointTypesElementEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointTypes') }})
    message_config: Optional[JourneyCustomMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageConfig') }})
    next_activity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextActivity') }})
    template_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateName') }})
    template_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateVersion') }})
    
