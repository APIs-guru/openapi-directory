from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import relatedfinding
from . import findingproviderseverity


@dataclass_json
@dataclass
class FindingProviderFields:
    confidence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Confidence' }})
    criticality: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Criticality' }})
    related_findings: Optional[List[relatedfinding.RelatedFinding]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RelatedFindings' }})
    severity: Optional[findingproviderseverity.FindingProviderSeverity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Severity' }})
    types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Types' }})
    
