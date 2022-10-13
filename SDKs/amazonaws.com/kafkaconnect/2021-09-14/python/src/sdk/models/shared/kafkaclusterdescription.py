from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import apachekafkaclusterdescription


@dataclass_json
@dataclass
class KafkaClusterDescription:
    apache_kafka_cluster: Optional[apachekafkaclusterdescription.ApacheKafkaClusterDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apacheKafkaCluster' }})
    
