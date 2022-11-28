from dataclasses import dataclass, field
from enum import Enum

class SourceTypeEnum(str, Enum):
    NODE = "node"
    PARAMETER_GROUP = "parameter-group"
    SUBNET_GROUP = "subnet-group"
    CLUSTER = "cluster"
    USER = "user"
    ACL = "acl"

