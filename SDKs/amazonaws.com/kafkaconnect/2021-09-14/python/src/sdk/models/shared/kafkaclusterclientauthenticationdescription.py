from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import kafkaclusterclientauthenticationtype_enum


@dataclass_json
@dataclass
class KafkaClusterClientAuthenticationDescription:
    authentication_type: Optional[kafkaclusterclientauthenticationtype_enum.KafkaClusterClientAuthenticationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authenticationType' }})
    
