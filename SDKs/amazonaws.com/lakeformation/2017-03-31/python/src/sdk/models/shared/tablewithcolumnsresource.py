from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import columnwildcard


@dataclass_json
@dataclass
class TableWithColumnsResource:
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CatalogId' }})
    column_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ColumnNames' }})
    column_wildcard: Optional[columnwildcard.ColumnWildcard] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ColumnWildcard' }})
    database_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatabaseName' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
