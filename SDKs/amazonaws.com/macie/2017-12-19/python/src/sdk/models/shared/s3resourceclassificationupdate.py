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
class S3ResourceClassificationUpdate:
    r"""S3ResourceClassificationUpdate
    The S3 resources whose classification types you want to update. This data type is used as a request parameter in the UpdateS3Resources action. 
    """
    
    bucket_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketName') }})
    classification_type_update: ClassificationTypeUpdate = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('classificationTypeUpdate') }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefix') }})
    
