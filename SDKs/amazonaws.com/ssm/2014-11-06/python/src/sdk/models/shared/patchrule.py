from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PatchRule:
    r"""PatchRule
    Defines an approval rule for a patch baseline.
    """
    
    patch_filter_group: PatchFilterGroup = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PatchFilterGroup') }})
    approve_after_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApproveAfterDays') }})
    approve_until_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApproveUntilDate') }})
    compliance_level: Optional[PatchComplianceLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceLevel') }})
    enable_non_security: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableNonSecurity') }})
    
