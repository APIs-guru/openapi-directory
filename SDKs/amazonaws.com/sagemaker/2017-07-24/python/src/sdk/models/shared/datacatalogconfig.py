from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DataCatalogConfig:
    catalog: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Catalog' }})
    database: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Database' }})
    table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    
