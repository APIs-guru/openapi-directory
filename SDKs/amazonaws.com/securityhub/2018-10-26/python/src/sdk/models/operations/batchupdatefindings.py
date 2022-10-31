from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
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
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Text' }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdatedBy' }})
    

@dataclass_json
@dataclass
class BatchUpdateFindingsRequestBodySeverity:
    label: Optional[shared.SeverityLabelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Label' }})
    normalized: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Normalized' }})
    product: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Product' }})
    
class BatchUpdateFindingsRequestBodyVerificationStateEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    TRUE_POSITIVE = "TRUE_POSITIVE"
    FALSE_POSITIVE = "FALSE_POSITIVE"
    BENIGN_POSITIVE = "BENIGN_POSITIVE"


@dataclass_json
@dataclass
class BatchUpdateFindingsRequestBodyWorkflow:
    status: Optional[shared.WorkflowStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    

@dataclass_json
@dataclass
class BatchUpdateFindingsRequestBody:
    confidence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Confidence' }})
    criticality: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Criticality' }})
    finding_identifiers: List[shared.AwsSecurityFindingIdentifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FindingIdentifiers' }})
    note: Optional[BatchUpdateFindingsRequestBodyNote] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Note' }})
    related_findings: Optional[List[shared.RelatedFinding]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RelatedFindings' }})
    severity: Optional[BatchUpdateFindingsRequestBodySeverity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Severity' }})
    types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Types' }})
    user_defined_fields: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserDefinedFields' }})
    verification_state: Optional[BatchUpdateFindingsRequestBodyVerificationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VerificationState' }})
    workflow: Optional[BatchUpdateFindingsRequestBodyWorkflow] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Workflow' }})
    

@dataclass
class BatchUpdateFindingsRequest:
    headers: BatchUpdateFindingsHeaders = field(default=None)
    request: BatchUpdateFindingsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BatchUpdateFindingsResponse:
    batch_update_findings_response: Optional[shared.BatchUpdateFindingsResponse] = field(default=None)
    content_type: str = field(default=None)
    internal_exception: Optional[Any] = field(default=None)
    invalid_access_exception: Optional[Any] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
