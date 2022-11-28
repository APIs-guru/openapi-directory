from dataclasses import dataclass, field
from enum import Enum

class StateReasonCodeEnum(str, Enum):
    IDLE = "Idle"
    CREATING = "Creating"
    RESTORING = "Restoring"
    ENI_LIMIT_EXCEEDED = "EniLimitExceeded"
    INSUFFICIENT_ROLE_PERMISSIONS = "InsufficientRolePermissions"
    INVALID_CONFIGURATION = "InvalidConfiguration"
    INTERNAL_ERROR = "InternalError"
    SUBNET_OUT_OF_IP_ADDRESSES = "SubnetOutOfIPAddresses"
    INVALID_SUBNET = "InvalidSubnet"
    INVALID_SECURITY_GROUP = "InvalidSecurityGroup"
    IMAGE_DELETED = "ImageDeleted"
    IMAGE_ACCESS_DENIED = "ImageAccessDenied"
    INVALID_IMAGE = "InvalidImage"

