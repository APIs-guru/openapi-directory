from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class KafkaClusterEncryptionInTransitDescription:
    r"""KafkaClusterEncryptionInTransitDescription
    The description of the encryption in transit to the Apache Kafka cluster.
    """
    
    encryption_type: Optional[KafkaClusterEncryptionInTransitTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionType') }})
    
