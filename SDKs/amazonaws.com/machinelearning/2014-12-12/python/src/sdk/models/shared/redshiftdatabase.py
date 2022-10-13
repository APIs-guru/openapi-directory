from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RedshiftDatabase:
    cluster_identifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterIdentifier' }})
    database_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatabaseName' }})
    
