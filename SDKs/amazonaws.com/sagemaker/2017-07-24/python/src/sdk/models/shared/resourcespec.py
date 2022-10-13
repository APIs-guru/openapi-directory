from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import appinstancetype_enum


@dataclass_json
@dataclass
class ResourceSpec:
    instance_type: Optional[appinstancetype_enum.AppInstanceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceType' }})
    lifecycle_config_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LifecycleConfigArn' }})
    sage_maker_image_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SageMakerImageArn' }})
    sage_maker_image_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SageMakerImageVersionArn' }})
    
