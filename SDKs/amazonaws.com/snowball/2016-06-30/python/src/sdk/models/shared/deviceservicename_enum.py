from dataclasses import dataclass, field
from enum import Enum

class DeviceServiceNameEnum(str, Enum):
    NFS_ON_DEVICE_SERVICE = "NFS_ON_DEVICE_SERVICE"
    S3_ON_DEVICE_SERVICE = "S3_ON_DEVICE_SERVICE"

