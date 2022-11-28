from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ApacheKafkaCluster:
    r"""ApacheKafkaCluster
    The details of the Apache Kafka cluster to which the connector is connected.
    """
    
    bootstrap_servers: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootstrapServers') }})
    vpc: Vpc = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpc') }})
    
