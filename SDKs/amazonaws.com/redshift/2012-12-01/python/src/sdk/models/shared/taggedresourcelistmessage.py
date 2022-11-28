from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class TaggedResourceListMessage:
    r"""TaggedResourceListMessage
    <p/>
    """
    
    marker: Optional[str] = field(default=None)
    tagged_resources: Optional[List[TaggedResource]] = field(default=None)
    
