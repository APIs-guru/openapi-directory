from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import action
from . import compliance
from . import findingproviderfields
from . import malware
from . import network
from . import networkpathcomponent
from . import note
from . import patchsummary
from . import processdetails
from . import recordstate_enum
from . import relatedfinding
from . import remediation
from . import resource
from . import severity
from . import threatintelindicator
from . import verificationstate_enum
from . import vulnerability
from . import workflow
from . import workflowstate_enum


@dataclass_json
@dataclass
class AwsSecurityFinding:
    action: Optional[action.Action] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Action' }})
    aws_account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsAccountId' }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompanyName' }})
    compliance: Optional[compliance.Compliance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Compliance' }})
    confidence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Confidence' }})
    created_at: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAt' }})
    criticality: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Criticality' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    finding_provider_fields: Optional[findingproviderfields.FindingProviderFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FindingProviderFields' }})
    first_observed_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirstObservedAt' }})
    generator_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GeneratorId' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    last_observed_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastObservedAt' }})
    malware: Optional[List[malware.Malware]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Malware' }})
    network: Optional[network.Network] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Network' }})
    network_path: Optional[List[networkpathcomponent.NetworkPathComponent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetworkPath' }})
    note: Optional[note.Note] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Note' }})
    patch_summary: Optional[patchsummary.PatchSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PatchSummary' }})
    process: Optional[processdetails.ProcessDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Process' }})
    product_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductArn' }})
    product_fields: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductFields' }})
    product_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductName' }})
    record_state: Optional[recordstate_enum.RecordStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecordState' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Region' }})
    related_findings: Optional[List[relatedfinding.RelatedFinding]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RelatedFindings' }})
    remediation: Optional[remediation.Remediation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Remediation' }})
    resources: List[resource.Resource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Resources' }})
    schema_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaVersion' }})
    severity: Optional[severity.Severity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Severity' }})
    source_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceUrl' }})
    threat_intel_indicators: Optional[List[threatintelindicator.ThreatIntelIndicator]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThreatIntelIndicators' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Title' }})
    types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Types' }})
    updated_at: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdatedAt' }})
    user_defined_fields: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserDefinedFields' }})
    verification_state: Optional[verificationstate_enum.VerificationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VerificationState' }})
    vulnerabilities: Optional[List[vulnerability.Vulnerability]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Vulnerabilities' }})
    workflow: Optional[workflow.Workflow] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Workflow' }})
    workflow_state: Optional[workflowstate_enum.WorkflowStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkflowState' }})
    
