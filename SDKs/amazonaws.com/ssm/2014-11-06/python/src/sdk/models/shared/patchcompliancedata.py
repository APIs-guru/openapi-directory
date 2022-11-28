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
class PatchComplianceData:
    r"""PatchComplianceData
    Information about the state of a patch on a particular instance as it relates to the patch baseline used to patch the instance.
    """
    
    classification: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Classification') }})
    installed_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstalledTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    kb_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KBId') }})
    severity: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Severity') }})
    state: PatchComplianceDataStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Title') }})
    cve_ids: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CVEIds') }})
    
