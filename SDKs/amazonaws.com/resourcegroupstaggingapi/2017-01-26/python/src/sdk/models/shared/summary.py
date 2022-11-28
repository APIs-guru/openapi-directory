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
class Summary:
    r"""Summary
    A count of noncompliant resources.
    """
    
    last_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdated') }})
    non_compliant_resources: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NonCompliantResources') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Region') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    target_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetId') }})
    target_id_type: Optional[TargetIDTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetIdType') }})
    
