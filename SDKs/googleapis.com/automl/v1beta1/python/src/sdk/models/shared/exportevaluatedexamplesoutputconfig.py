from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import bigquerydestination


@dataclass_json
@dataclass
class ExportEvaluatedExamplesOutputConfig:
    bigquery_destination: Optional[bigquerydestination.BigQueryDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigqueryDestination' }})
    
