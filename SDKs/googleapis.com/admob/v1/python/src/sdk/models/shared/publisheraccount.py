from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PublisherAccount:
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    publisher_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publisherId' }})
    reporting_time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportingTimeZone' }})
    
