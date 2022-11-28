from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class Parameter:
    r"""Parameter
    <p> This data type is used as a request parameter in the <code>ModifyDBParameterGroup</code> and <code>ResetDBParameterGroup</code> actions. </p> <p>This data type is used as a response element in the <code>DescribeEngineDefaultParameters</code> and <code>DescribeDBParameters</code> actions.</p>
    """
    
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
    supported_engine_modes: Optional[List[str]] = field(default=None)
    
