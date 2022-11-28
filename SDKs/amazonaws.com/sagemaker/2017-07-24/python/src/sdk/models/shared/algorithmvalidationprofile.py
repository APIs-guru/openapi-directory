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
class AlgorithmValidationProfile:
    r"""AlgorithmValidationProfile
    <p>Defines a training job and a batch transform job that Amazon SageMaker runs to validate your algorithm.</p> <p>The data provided in the validation profile is made available to your buyers on Amazon Web Services Marketplace.</p>
    """
    
    profile_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProfileName') }})
    training_job_definition: TrainingJobDefinition = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingJobDefinition') }})
    transform_job_definition: Optional[TransformJobDefinition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformJobDefinition') }})
    
