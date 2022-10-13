from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import bigquerydestination
from . import gcsdestination


@dataclass_json
@dataclass
class BatchPredictOutputConfig:
    bigquery_destination: Optional[bigquerydestination.BigQueryDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigqueryDestination' }})
    gcs_destination: Optional[gcsdestination.GcsDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsDestination' }})
    
