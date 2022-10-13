from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import vpc


@dataclass_json
@dataclass
class ApacheKafkaCluster:
    bootstrap_servers: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bootstrapServers' }})
    vpc: vpc.Vpc = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpc' }})
    
