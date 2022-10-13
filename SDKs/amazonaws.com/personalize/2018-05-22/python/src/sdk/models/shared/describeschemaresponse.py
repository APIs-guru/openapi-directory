from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import datasetschema


@dataclass_json
@dataclass
class DescribeSchemaResponse:
    schema: Optional[datasetschema.DatasetSchema] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema' }})
    
