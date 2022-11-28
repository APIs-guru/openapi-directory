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
class Workload:
    r"""Workload
    A workload return object.
    """
    
    account_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountIds') }})
    architectural_design: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ArchitecturalDesign') }})
    aws_regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsRegions') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    environment: Optional[WorkloadEnvironmentEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Environment') }})
    improvement_status: Optional[WorkloadImprovementStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImprovementStatus') }})
    industry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Industry') }})
    industry_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndustryType') }})
    is_review_owner_update_acknowledged: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsReviewOwnerUpdateAcknowledged') }})
    lenses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Lenses') }})
    non_aws_regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NonAwsRegions') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Owner') }})
    pillar_priorities: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PillarPriorities') }})
    review_owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReviewOwner') }})
    review_restriction_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReviewRestrictionDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    risk_counts: Optional[dict[str, int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RiskCounts') }})
    share_invitation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShareInvitationId') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    workload_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkloadArn') }})
    workload_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkloadId') }})
    workload_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkloadName') }})
    
