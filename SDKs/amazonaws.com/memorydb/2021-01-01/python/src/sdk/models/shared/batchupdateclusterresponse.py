from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchUpdateClusterResponse:
    processed_clusters: Optional[List[Cluster]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessedClusters') }})
    unprocessed_clusters: Optional[List[UnprocessedCluster]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnprocessedClusters') }})
    
