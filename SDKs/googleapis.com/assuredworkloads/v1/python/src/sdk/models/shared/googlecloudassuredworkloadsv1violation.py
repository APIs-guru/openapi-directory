from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googlecloudassuredworkloadsv1violationremediation

class GoogleCloudAssuredworkloadsV1ViolationStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    RESOLVED = "RESOLVED"
    UNRESOLVED = "UNRESOLVED"
    EXCEPTION = "EXCEPTION"


@dataclass_json
@dataclass
class GoogleCloudAssuredworkloadsV1Violation:
    acknowledged: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acknowledged' }})
    acknowledgement_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acknowledgementTime' }})
    audit_log_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auditLogLink' }})
    begin_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'beginTime' }})
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    exception_audit_log_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exceptionAuditLogLink' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    non_compliant_org_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nonCompliantOrgPolicy' }})
    org_policy_constraint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orgPolicyConstraint' }})
    remediation: Optional[googlecloudassuredworkloadsv1violationremediation.GoogleCloudAssuredworkloadsV1ViolationRemediation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remediation' }})
    resolve_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolveTime' }})
    state: Optional[GoogleCloudAssuredworkloadsV1ViolationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
