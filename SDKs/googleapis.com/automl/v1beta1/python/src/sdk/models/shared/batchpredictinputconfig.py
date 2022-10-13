from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import bigquerysource
from . import gcssource


@dataclass_json
@dataclass
class BatchPredictInputConfig:
    bigquery_source: Optional[bigquerysource.BigQuerySource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigquerySource' }})
    gcs_source: Optional[gcssource.GcsSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsSource' }})
    
