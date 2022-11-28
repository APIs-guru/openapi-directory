from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AttributeValueTarget:
    r"""AttributeValueTarget
    Describes an attribute value.
    """
    
    attribute_value: Optional[str] = field(default=None)
    
