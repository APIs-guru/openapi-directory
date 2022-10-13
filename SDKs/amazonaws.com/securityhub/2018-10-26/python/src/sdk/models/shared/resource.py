from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import dataclassificationdetails
from . import resourcedetails
from . import partition_enum


@dataclass_json
@dataclass
class Resource:
    data_classification: Optional[dataclassificationdetails.DataClassificationDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataClassification' }})
    details: Optional[resourcedetails.ResourceDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Details' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    partition: Optional[partition_enum.PartitionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Partition' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Region' }})
    resource_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceRole' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
