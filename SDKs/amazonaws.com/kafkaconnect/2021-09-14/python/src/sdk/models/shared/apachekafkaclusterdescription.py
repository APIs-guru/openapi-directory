from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ApacheKafkaClusterDescription:
    r"""ApacheKafkaClusterDescription
    The description of the Apache Kafka cluster to which the connector is connected.
    """
    
    bootstrap_servers: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootstrapServers') }})
    vpc: Optional[VpcDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpc') }})
    
