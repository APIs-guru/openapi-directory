from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class KafkaClusterDescription:
    r"""KafkaClusterDescription
    Details of how to connect to the Apache Kafka cluster.
    """
    
    apache_kafka_cluster: Optional[ApacheKafkaClusterDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apacheKafkaCluster') }})
    
