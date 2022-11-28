from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class Parameter:
    allowed_values: Optional[str] = field(default=None)
    apply_method: Optional[ApplyMethodEnum] = field(default=None)
    apply_type: Optional[str] = field(default=None)
    data_type: Optional[str] = field(default=None)
    description: Optional[str] = field(default=None)
    is_modifiable: Optional[bool] = field(default=None)
    minimum_engine_version: Optional[str] = field(default=None)
    parameter_name: Optional[str] = field(default=None)
    parameter_value: Optional[str] = field(default=None)
    source: Optional[str] = field(default=None)
    
