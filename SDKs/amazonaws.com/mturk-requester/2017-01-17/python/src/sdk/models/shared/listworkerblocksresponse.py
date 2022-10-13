from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import workerblock


@dataclass_json
@dataclass
class ListWorkerBlocksResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    num_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumResults' }})
    worker_blocks: Optional[List[workerblock.WorkerBlock]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkerBlocks' }})
    
