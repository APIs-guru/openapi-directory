from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import workloadenvironment_enum
from . import workloadimprovementstatus_enum


@dataclass_json
@dataclass
class Workload:
    account_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountIds' }})
    architectural_design: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ArchitecturalDesign' }})
    aws_regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsRegions' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    environment: Optional[workloadenvironment_enum.WorkloadEnvironmentEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Environment' }})
    improvement_status: Optional[workloadimprovementstatus_enum.WorkloadImprovementStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImprovementStatus' }})
    industry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Industry' }})
    industry_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndustryType' }})
    is_review_owner_update_acknowledged: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsReviewOwnerUpdateAcknowledged' }})
    lenses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Lenses' }})
    non_aws_regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NonAwsRegions' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Owner' }})
    pillar_priorities: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PillarPriorities' }})
    review_owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReviewOwner' }})
    review_restriction_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReviewRestrictionDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    risk_counts: Optional[dict[str, int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RiskCounts' }})
    share_invitation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShareInvitationId' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    workload_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkloadArn' }})
    workload_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkloadId' }})
    workload_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkloadName' }})
    
