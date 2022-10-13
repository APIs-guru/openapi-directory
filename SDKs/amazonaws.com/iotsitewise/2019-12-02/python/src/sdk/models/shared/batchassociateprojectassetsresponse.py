from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import asseterrordetails


@dataclass_json
@dataclass
class BatchAssociateProjectAssetsResponse:
    errors: Optional[List[asseterrordetails.AssetErrorDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
