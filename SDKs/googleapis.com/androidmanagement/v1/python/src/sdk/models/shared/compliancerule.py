from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import apilevelcondition
from . import noncompliancedetailcondition


@dataclass_json
@dataclass
class ComplianceRule:
    api_level_condition: Optional[apilevelcondition.APILevelCondition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiLevelCondition' }})
    disable_apps: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableApps' }})
    non_compliance_detail_condition: Optional[noncompliancedetailcondition.NonComplianceDetailCondition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nonComplianceDetailCondition' }})
    package_names_to_disable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageNamesToDisable' }})
    
