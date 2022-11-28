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
class ClassificationTypeUpdate:
    r"""ClassificationTypeUpdate
    The classification type that Amazon Macie Classic applies to the associated S3 resources. At least one of the classification types (oneTime or continuous) must be specified. 
    """
    
    continuous: Optional[S3ContinuousClassificationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('continuous') }})
    one_time: Optional[S3OneTimeClassificationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oneTime') }})
    
