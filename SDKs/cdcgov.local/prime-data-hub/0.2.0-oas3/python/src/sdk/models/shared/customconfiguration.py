from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import sftptransport
from . import as2transport
from . import blobstoretransport
from . import nulltransport

class CustomConfigurationFormatEnum(str, Enum):
    CSV = "CSV"
    HL7 = "HL7"


@dataclass_json
@dataclass
class CustomConfiguration:
    format: CustomConfigurationFormatEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    name_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nameFormat' }})
    receiving_organization: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'receivingOrganization' }})
    schema_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemaName' }})
    transport: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transport' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
