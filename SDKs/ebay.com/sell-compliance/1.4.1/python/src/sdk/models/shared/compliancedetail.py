from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ComplianceDetail:
    r"""ComplianceDetail
    This type is used by each listing violation that is returned under the violations container.
    """
    
    compliance_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('complianceState') }})
    corrective_recommendations: Optional[CorrectiveRecommendations] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('correctiveRecommendations') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    reason_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reasonCode') }})
    variation: Optional[VariationDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variation') }})
    violation_data: Optional[List[NameValueList]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('violationData') }})
    
