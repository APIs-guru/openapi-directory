from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import inappmessagebodyconfig
from . import inappmessageheaderconfig
from . import inappmessagebutton
from . import inappmessagebutton


@dataclass_json
@dataclass
class InAppMessageContent:
    background_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackgroundColor' }})
    body_config: Optional[inappmessagebodyconfig.InAppMessageBodyConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BodyConfig' }})
    header_config: Optional[inappmessageheaderconfig.InAppMessageHeaderConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HeaderConfig' }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageUrl' }})
    primary_btn: Optional[inappmessagebutton.InAppMessageButton] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrimaryBtn' }})
    secondary_btn: Optional[inappmessagebutton.InAppMessageButton] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecondaryBtn' }})
    
