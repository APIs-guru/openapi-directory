from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Finding:
    r"""Finding
    Provides the details of a finding.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    archived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archived') }})
    category: Optional[FindingCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    classification_details: Optional[ClassificationDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classificationDetails') }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    partition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partition') }})
    policy_details: Optional[PolicyDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyDetails') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    resources_affected: Optional[ResourcesAffected] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourcesAffected') }})
    sample: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sample') }})
    schema_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaVersion') }})
    severity: Optional[Severity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[FindingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
