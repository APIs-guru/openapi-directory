from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import productionvariantacceleratortype_enum
from . import productionvariantcoredumpconfig
from . import productionvariantinstancetype_enum


@dataclass_json
@dataclass
class ProductionVariant:
    accelerator_type: Optional[productionvariantacceleratortype_enum.ProductionVariantAcceleratorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceleratorType' }})
    core_dump_config: Optional[productionvariantcoredumpconfig.ProductionVariantCoreDumpConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CoreDumpConfig' }})
    initial_instance_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InitialInstanceCount' }})
    initial_variant_weight: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InitialVariantWeight' }})
    instance_type: productionvariantinstancetype_enum.ProductionVariantInstanceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceType' }})
    model_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelName' }})
    variant_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VariantName' }})
    
