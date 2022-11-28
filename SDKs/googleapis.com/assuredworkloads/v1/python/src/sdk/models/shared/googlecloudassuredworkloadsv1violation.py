from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudAssuredworkloadsV1ViolationStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    RESOLVED = "RESOLVED"
    UNRESOLVED = "UNRESOLVED"
    EXCEPTION = "EXCEPTION"


@dataclass_json
@dataclass
class GoogleCloudAssuredworkloadsV1Violation:
    r"""GoogleCloudAssuredworkloadsV1Violation
    Workload monitoring Violation.
    """
    
    acknowledged: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acknowledged') }})
    acknowledgement_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acknowledgementTime') }})
    audit_log_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auditLogLink') }})
    begin_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('beginTime') }})
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    exception_audit_log_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exceptionAuditLogLink') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    non_compliant_org_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonCompliantOrgPolicy') }})
    org_policy_constraint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgPolicyConstraint') }})
    remediation: Optional[GoogleCloudAssuredworkloadsV1ViolationRemediation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remediation') }})
    resolve_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolveTime') }})
    state: Optional[GoogleCloudAssuredworkloadsV1ViolationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
