from dataclasses import dataclass, field
from typing import Enum

class InstanceInformationFilterKeyEnum(str, Enum):
    INSTANCE_IDS = "InstanceIds"
    AGENT_VERSION = "AgentVersion"
    PING_STATUS = "PingStatus"
    PLATFORM_TYPES = "PlatformTypes"
    ACTIVATION_IDS = "ActivationIds"
    IAM_ROLE = "IamRole"
    RESOURCE_TYPE = "ResourceType"
    ASSOCIATION_STATUS = "AssociationStatus"

