from dataclasses import dataclass, field
from enum import Enum

class KafkaClusterEncryptionInTransitTypeEnum(str, Enum):
    PLAINTEXT = "PLAINTEXT"
    TLS = "TLS"

