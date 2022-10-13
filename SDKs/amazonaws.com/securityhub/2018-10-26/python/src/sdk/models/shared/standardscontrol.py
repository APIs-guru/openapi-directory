from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import controlstatus_enum
from . import severityrating_enum


@dataclass_json
@dataclass
class StandardsControl:
    control_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ControlId' }})
    control_status: Optional[controlstatus_enum.ControlStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ControlStatus' }})
    control_status_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ControlStatusUpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    disabled_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisabledReason' }})
    related_requirements: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RelatedRequirements' }})
    remediation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemediationUrl' }})
    severity_rating: Optional[severityrating_enum.SeverityRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SeverityRating' }})
    standards_control_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StandardsControlArn' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Title' }})
    
