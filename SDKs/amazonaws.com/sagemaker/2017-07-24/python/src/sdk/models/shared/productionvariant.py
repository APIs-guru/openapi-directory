from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProductionVariant:
    r"""ProductionVariant
    Identifies a model that you want to host and the resources chosen to deploy for hosting it. If you are deploying multiple models, tell Amazon SageMaker how to distribute traffic among the models by specifying variant weights. 
    """
    
    initial_instance_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InitialInstanceCount') }})
    instance_type: ProductionVariantInstanceTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceType') }})
    model_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelName') }})
    variant_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VariantName') }})
    accelerator_type: Optional[ProductionVariantAcceleratorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceleratorType') }})
    core_dump_config: Optional[ProductionVariantCoreDumpConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CoreDumpConfig') }})
    initial_variant_weight: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InitialVariantWeight') }})
    
