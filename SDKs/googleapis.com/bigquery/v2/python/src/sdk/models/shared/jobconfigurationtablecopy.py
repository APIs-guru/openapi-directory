from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import encryptionconfiguration
from . import tablereference
from . import tablereference
from . import tablereference


@dataclass_json
@dataclass
class JobConfigurationTableCopy:
    create_disposition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createDisposition' }})
    destination_encryption_configuration: Optional[encryptionconfiguration.EncryptionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationEncryptionConfiguration' }})
    destination_expiration_time: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationExpirationTime' }})
    destination_table: Optional[tablereference.TableReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationTable' }})
    operation_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationType' }})
    source_table: Optional[tablereference.TableReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceTable' }})
    source_tables: Optional[List[tablereference.TableReference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceTables' }})
    write_disposition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'writeDisposition' }})
    
