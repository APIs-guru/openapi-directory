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
class EnvironmentTemplateVersion:
    r"""EnvironmentTemplateVersion
    The environment template version data.
    """
    
    arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    major_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('majorVersion') }})
    minor_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('minorVersion') }})
    status: TemplateVersionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    template_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateName') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    recommended_minor_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendedMinorVersion') }})
    schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusMessage') }})
    
