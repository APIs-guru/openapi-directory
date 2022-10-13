from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateModelPackageOutput:
    model_package_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelPackageArn' }})
    
