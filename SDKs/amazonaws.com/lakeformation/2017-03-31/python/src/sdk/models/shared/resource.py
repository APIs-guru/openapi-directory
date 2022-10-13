from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import datalocationresource
from . import databaseresource
from . import lftagkeyresource
from . import lftagpolicyresource
from . import tableresource
from . import tablewithcolumnsresource


@dataclass_json
@dataclass
class Resource:
    catalog: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Catalog' }})
    data_location: Optional[datalocationresource.DataLocationResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataLocation' }})
    database: Optional[databaseresource.DatabaseResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Database' }})
    lf_tag: Optional[lftagkeyresource.LfTagKeyResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LFTag' }})
    lf_tag_policy: Optional[lftagpolicyresource.LfTagPolicyResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LFTagPolicy' }})
    table: Optional[tableresource.TableResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Table' }})
    table_with_columns: Optional[tablewithcolumnsresource.TableWithColumnsResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableWithColumns' }})
    
