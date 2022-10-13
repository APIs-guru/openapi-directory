from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class ApisFilter:
    status: Optional[shared.APIStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status' }})
    
