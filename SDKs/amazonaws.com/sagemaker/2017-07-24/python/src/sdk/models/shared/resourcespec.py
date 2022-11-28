from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResourceSpec:
    r"""ResourceSpec
    Specifies the ARN's of a SageMaker image and SageMaker image version, and the instance type that the version runs on.
    """
    
    instance_type: Optional[AppInstanceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceType') }})
    lifecycle_config_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LifecycleConfigArn') }})
    sage_maker_image_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SageMakerImageArn') }})
    sage_maker_image_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SageMakerImageVersionArn') }})
    
