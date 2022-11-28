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
class AwsSecurityFinding:
    r"""AwsSecurityFinding
    <p>Provides consistent format for the contents of the Security Hub-aggregated findings. <code>AwsSecurityFinding</code> format enables you to share findings between Amazon Web Services security services and third-party solutions, and security standards checks.</p> <note> <p>A finding is a potential security issue generated either by Amazon Web Services services or by the integrated third-party solutions and standards checks.</p> </note>
    """
    
    aws_account_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsAccountId') }})
    created_at: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedAt') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    generator_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GeneratorId') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    product_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductArn') }})
    resources: List[Resource] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resources') }})
    schema_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaVersion') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Title') }})
    updated_at: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedAt') }})
    action: Optional[Action] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Action') }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompanyName') }})
    compliance: Optional[Compliance] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Compliance') }})
    confidence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Confidence') }})
    criticality: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Criticality') }})
    finding_provider_fields: Optional[FindingProviderFields] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FindingProviderFields') }})
    first_observed_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstObservedAt') }})
    last_observed_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastObservedAt') }})
    malware: Optional[List[Malware]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Malware') }})
    network: Optional[Network] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Network') }})
    network_path: Optional[List[NetworkPathComponent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkPath') }})
    note: Optional[Note] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Note') }})
    patch_summary: Optional[PatchSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PatchSummary') }})
    process: Optional[ProcessDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Process') }})
    product_fields: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductFields') }})
    product_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductName') }})
    record_state: Optional[RecordStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordState') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Region') }})
    related_findings: Optional[List[RelatedFinding]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RelatedFindings') }})
    remediation: Optional[Remediation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Remediation') }})
    severity: Optional[Severity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Severity') }})
    source_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceUrl') }})
    threat_intel_indicators: Optional[List[ThreatIntelIndicator]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThreatIntelIndicators') }})
    types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Types') }})
    user_defined_fields: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserDefinedFields') }})
    verification_state: Optional[VerificationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VerificationState') }})
    vulnerabilities: Optional[List[Vulnerability]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Vulnerabilities') }})
    workflow: Optional[Workflow] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Workflow') }})
    workflow_state: Optional[WorkflowStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkflowState') }})
    
