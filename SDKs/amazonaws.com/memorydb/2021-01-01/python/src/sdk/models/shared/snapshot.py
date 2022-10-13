from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import clusterconfiguration


@dataclass_json
@dataclass
class Snapshot:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ARN' }})
    cluster_configuration: Optional[clusterconfiguration.ClusterConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterConfiguration' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Source' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
