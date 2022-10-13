from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import variantpropertytype_enum


@dataclass_json
@dataclass
class VariantProperty:
    variant_property_type: variantpropertytype_enum.VariantPropertyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VariantPropertyType' }})
    
