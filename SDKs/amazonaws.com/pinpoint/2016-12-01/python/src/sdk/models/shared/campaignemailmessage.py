from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CampaignEmailMessage:
    r"""CampaignEmailMessage
    Specifies the content and \"From\" address for an email message that's sent to recipients of a campaign.
    """
    
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Body') }})
    from_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FromAddress') }})
    html_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HtmlBody') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Title') }})
    
