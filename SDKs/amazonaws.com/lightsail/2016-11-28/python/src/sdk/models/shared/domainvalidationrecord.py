from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import resourcerecord


@dataclass_json
@dataclass
class DomainValidationRecord:
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainName' }})
    resource_record: Optional[resourcerecord.ResourceRecord] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceRecord' }})
    
