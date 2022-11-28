from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FindingProviderFields:
    r"""FindingProviderFields
    In a <code>BatchImportFindings</code> request, finding providers use <code>FindingProviderFields</code> to provide and update values for confidence, criticality, related findings, severity, and types.
    """
    
    confidence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Confidence') }})
    criticality: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Criticality') }})
    related_findings: Optional[List[RelatedFinding]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RelatedFindings') }})
    severity: Optional[FindingProviderSeverity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Severity') }})
    types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Types') }})
    
