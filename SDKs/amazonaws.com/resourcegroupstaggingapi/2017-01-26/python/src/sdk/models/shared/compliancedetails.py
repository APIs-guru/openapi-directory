from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ComplianceDetails:
    r"""ComplianceDetails
    Information that shows whether a resource is compliant with the effective tag policy, including details on any noncompliant tag keys.
    """
    
    compliance_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceStatus') }})
    keys_with_noncompliant_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeysWithNoncompliantValues') }})
    noncompliant_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NoncompliantKeys') }})
    
