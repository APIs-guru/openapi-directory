from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import complianceviolation


@dataclass_json
@dataclass
class PagedComplianceViolationCollection:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    listing_violations: Optional[List[complianceviolation.ComplianceViolation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listingViolations' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    prev: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prev' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    
