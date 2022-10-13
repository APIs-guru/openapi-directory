from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import domainavailability_enum


@dataclass_json
@dataclass
class CheckDomainAvailabilityResponse:
    availability: domainavailability_enum.DomainAvailabilityEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Availability' }})
    
