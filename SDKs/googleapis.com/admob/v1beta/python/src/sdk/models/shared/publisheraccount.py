from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PublisherAccount:
    r"""PublisherAccount
    A publisher account contains information relevant to the use of this API, such as the time zone used for the reports.
    """
    
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    publisher_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherId') }})
    reporting_time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportingTimeZone') }})
    
