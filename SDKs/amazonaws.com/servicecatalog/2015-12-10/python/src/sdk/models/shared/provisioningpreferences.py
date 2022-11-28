from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProvisioningPreferences:
    r"""ProvisioningPreferences
    <p>The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product type</p> <p>One or more AWS accounts that will have access to the provisioned product.</p> <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p> <p>The AWS accounts specified should be within the list of accounts in the <code>STACKSET</code> constraint. To get the list of accounts in the <code>STACKSET</code> constraint, use the <code>DescribeProvisioningParameters</code> operation.</p> <p>If no values are specified, the default value is all accounts from the <code>STACKSET</code> constraint.</p>
    """
    
    stack_set_accounts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackSetAccounts') }})
    stack_set_failure_tolerance_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackSetFailureToleranceCount') }})
    stack_set_failure_tolerance_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackSetFailureTolerancePercentage') }})
    stack_set_max_concurrency_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackSetMaxConcurrencyCount') }})
    stack_set_max_concurrency_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackSetMaxConcurrencyPercentage') }})
    stack_set_regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackSetRegions') }})
    
