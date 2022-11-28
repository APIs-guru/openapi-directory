from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class BatchUpdateFindingsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class BatchUpdateFindingsRequestBodyNote:
    r"""BatchUpdateFindingsRequestBodyNote
    The updated note.
    """
    
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Text') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedBy') }})
    

@dataclass_json
@dataclass
class BatchUpdateFindingsRequestBodySeverity:
    r"""BatchUpdateFindingsRequestBodySeverity
    Updates to the severity information for a finding.
    """
    
    label: Optional[shared.SeverityLabelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Label') }})
    normalized: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Normalized') }})
    product: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Product') }})
    
class BatchUpdateFindingsRequestBodyVerificationStateEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    TRUE_POSITIVE = "TRUE_POSITIVE"
    FALSE_POSITIVE = "FALSE_POSITIVE"
    BENIGN_POSITIVE = "BENIGN_POSITIVE"


@dataclass_json
@dataclass
class BatchUpdateFindingsRequestBodyWorkflow:
    r"""BatchUpdateFindingsRequestBodyWorkflow
    Used to update information about the investigation into the finding.
    """
    
    status: Optional[shared.WorkflowStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    

@dataclass_json
@dataclass
class BatchUpdateFindingsRequestBody:
    finding_identifiers: List[shared.AwsSecurityFindingIdentifier] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FindingIdentifiers') }})
    confidence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Confidence') }})
    criticality: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Criticality') }})
    note: Optional[BatchUpdateFindingsRequestBodyNote] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Note') }})
    related_findings: Optional[List[shared.RelatedFinding]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RelatedFindings') }})
    severity: Optional[BatchUpdateFindingsRequestBodySeverity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Severity') }})
    types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Types') }})
    user_defined_fields: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserDefinedFields') }})
    verification_state: Optional[BatchUpdateFindingsRequestBodyVerificationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VerificationState') }})
    workflow: Optional[BatchUpdateFindingsRequestBodyWorkflow] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Workflow') }})
    

@dataclass
class BatchUpdateFindingsRequest:
    headers: BatchUpdateFindingsHeaders = field()
    request: BatchUpdateFindingsRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BatchUpdateFindingsResponse:
    content_type: str = field()
    status_code: int = field()
    batch_update_findings_response: Optional[shared.BatchUpdateFindingsResponse] = field(default=None)
    internal_exception: Optional[Any] = field(default=None)
    invalid_access_exception: Optional[Any] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    
