from dataclasses import dataclass, field
from typing import Enum

class LastUpdateStatusReasonCodeEnum(str, Enum):
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

