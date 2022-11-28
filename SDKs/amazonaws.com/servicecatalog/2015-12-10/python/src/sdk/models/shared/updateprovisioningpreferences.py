from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateProvisioningPreferences:
    r"""UpdateProvisioningPreferences
    The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product types.
    """
    
    stack_set_accounts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackSetAccounts') }})
    stack_set_failure_tolerance_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackSetFailureToleranceCount') }})
    stack_set_failure_tolerance_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackSetFailureTolerancePercentage') }})
    stack_set_max_concurrency_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackSetMaxConcurrencyCount') }})
    stack_set_max_concurrency_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackSetMaxConcurrencyPercentage') }})
    stack_set_operation_type: Optional[StackSetOperationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackSetOperationType') }})
    stack_set_regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackSetRegions') }})
    
