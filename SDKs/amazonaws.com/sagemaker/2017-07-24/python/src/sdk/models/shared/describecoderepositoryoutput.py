from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeCodeRepositoryOutput:
    code_repository_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeRepositoryArn') }})
    code_repository_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeRepositoryName') }})
    creation_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    git_config: Optional[GitConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GitConfig') }})
    
