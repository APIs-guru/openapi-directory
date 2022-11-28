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
class ImageVersion:
    r"""ImageVersion
    A version of a SageMaker <code>Image</code>. A version represents an existing container image.
    """
    
    creation_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    image_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageArn') }})
    image_version_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageVersionArn') }})
    image_version_status: ImageVersionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageVersionStatus') }})
    last_modified_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    version: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureReason') }})
    
