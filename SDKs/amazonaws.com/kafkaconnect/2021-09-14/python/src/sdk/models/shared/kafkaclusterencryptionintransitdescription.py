from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import kafkaclusterencryptionintransittype_enum


@dataclass_json
@dataclass
class KafkaClusterEncryptionInTransitDescription:
    encryption_type: Optional[kafkaclusterencryptionintransittype_enum.KafkaClusterEncryptionInTransitTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionType' }})
    
