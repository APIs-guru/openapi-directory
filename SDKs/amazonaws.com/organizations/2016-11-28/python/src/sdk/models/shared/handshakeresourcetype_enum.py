from dataclasses import dataclass, field
from enum import Enum

class HandshakeResourceTypeEnum(str, Enum):
    ACCOUNT = "ACCOUNT"
    ORGANIZATION = "ORGANIZATION"
    ORGANIZATION_FEATURE_SET = "ORGANIZATION_FEATURE_SET"
    EMAIL = "EMAIL"
    MASTER_EMAIL = "MASTER_EMAIL"
    MASTER_NAME = "MASTER_NAME"
    NOTES = "NOTES"
    PARENT_HANDSHAKE = "PARENT_HANDSHAKE"

