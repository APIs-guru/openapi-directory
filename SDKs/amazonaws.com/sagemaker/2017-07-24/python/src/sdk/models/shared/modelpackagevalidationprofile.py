from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ModelPackageValidationProfile:
    r"""ModelPackageValidationProfile
    <p>Contains data, such as the inputs and targeted instance types that are used in the process of validating the model package.</p> <p>The data provided in the validation profile is made available to your buyers on Amazon Web Services Marketplace.</p>
    """
    
    profile_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProfileName') }})
    transform_job_definition: TransformJobDefinition = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformJobDefinition') }})
    
