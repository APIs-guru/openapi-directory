from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import compliancedetail


@dataclass_json
@dataclass
class ComplianceViolation:
    compliance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'complianceType' }})
    listing_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listingId' }})
    offer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offerId' }})
    sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sku' }})
    violations: Optional[List[compliancedetail.ComplianceDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'violations' }})
    
