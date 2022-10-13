from dataclasses import dataclass, field
from typing import Enum

class KafkaClusterEncryptionInTransitTypeEnum(str, Enum):
    PLAINTEXT = "PLAINTEXT"
    TLS = "TLS"

