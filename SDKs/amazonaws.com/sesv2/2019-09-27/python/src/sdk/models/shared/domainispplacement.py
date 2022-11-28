from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DomainIspPlacement:
    r"""DomainIspPlacement
    An object that contains inbox placement data for email sent from one of your email domains to a specific email provider.
    """
    
    inbox_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InboxPercentage') }})
    inbox_raw_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InboxRawCount') }})
    isp_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IspName') }})
    spam_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SpamPercentage') }})
    spam_raw_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SpamRawCount') }})
    
