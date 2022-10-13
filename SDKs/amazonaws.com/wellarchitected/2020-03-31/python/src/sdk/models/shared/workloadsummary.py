from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import workloadimprovementstatus_enum


@dataclass_json
@dataclass
class WorkloadSummary:
    improvement_status: Optional[workloadimprovementstatus_enum.WorkloadImprovementStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImprovementStatus' }})
    lenses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Lenses' }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Owner' }})
    risk_counts: Optional[dict[str, int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RiskCounts' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    workload_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkloadArn' }})
    workload_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkloadId' }})
    workload_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkloadName' }})
    
