from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ComplianceRule:
    r"""ComplianceRule
    A rule declaring which mitigating actions to take when a device is not compliant with its policy. For every rule, there is always an implicit mitigating action to set policy_compliant to false for the Device resource, and display a message on the device indicating that the device is not compliant with its policy. Other mitigating actions may optionally be taken as well, depending on the field values in the rule.
    """
    
    api_level_condition: Optional[APILevelCondition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiLevelCondition') }})
    disable_apps: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableApps') }})
    non_compliance_detail_condition: Optional[NonComplianceDetailCondition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonComplianceDetailCondition') }})
    package_names_to_disable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageNamesToDisable') }})
    
