from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import correctiverecommendations
from . import variationdetails
from . import namevaluelist


@dataclass_json
@dataclass
class ComplianceDetail:
    compliance_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'complianceState' }})
    corrective_recommendations: Optional[correctiverecommendations.CorrectiveRecommendations] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'correctiveRecommendations' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    reason_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reasonCode' }})
    variation: Optional[variationdetails.VariationDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variation' }})
    violation_data: Optional[List[namevaluelist.NameValueList]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'violationData' }})
    
