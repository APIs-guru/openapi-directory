from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsSsmPatch:
    r"""AwsSsmPatch
    Provides details about the compliance for a patch.
    """
    
    compliance_summary: Optional[AwsSsmComplianceSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceSummary') }})
    
