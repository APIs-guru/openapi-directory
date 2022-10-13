from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import bucketbundle


@dataclass_json
@dataclass
class GetBucketBundlesResult:
    bundles: Optional[List[bucketbundle.BucketBundle]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bundles' }})
    
