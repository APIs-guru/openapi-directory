from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import vpcdescription


@dataclass_json
@dataclass
class ApacheKafkaClusterDescription:
    bootstrap_servers: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bootstrapServers' }})
    vpc: Optional[vpcdescription.VpcDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpc' }})
    
