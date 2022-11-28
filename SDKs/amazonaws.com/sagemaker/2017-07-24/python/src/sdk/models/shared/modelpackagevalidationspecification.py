from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ModelPackageValidationSpecification:
    r"""ModelPackageValidationSpecification
    Specifies batch transform jobs that Amazon SageMaker runs to validate your model package.
    """
    
    validation_profiles: List[ModelPackageValidationProfile] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationProfiles') }})
    validation_role: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationRole') }})
    
