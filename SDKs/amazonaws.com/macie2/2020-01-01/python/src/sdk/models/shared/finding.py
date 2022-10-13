from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import findingcategory_enum
from . import classificationdetails
from . import policydetails
from . import resourcesaffected
from . import severity
from . import findingtype_enum


@dataclass_json
@dataclass
class Finding:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    archived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'archived' }})
    category: Optional[findingcategory_enum.FindingCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    classification_details: Optional[classificationdetails.ClassificationDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classificationDetails' }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    partition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partition' }})
    policy_details: Optional[policydetails.PolicyDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyDetails' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    resources_affected: Optional[resourcesaffected.ResourcesAffected] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourcesAffected' }})
    sample: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sample' }})
    schema_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemaVersion' }})
    severity: Optional[severity.Severity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: Optional[findingtype_enum.FindingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
