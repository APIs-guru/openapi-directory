from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import inventoryschemadeleteoption_enum


@dataclass_json
@dataclass
class DeleteInventoryRequest:
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientToken' }})
    dry_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DryRun' }})
    schema_delete_option: Optional[inventoryschemadeleteoption_enum.InventorySchemaDeleteOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaDeleteOption' }})
    type_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TypeName' }})
    
