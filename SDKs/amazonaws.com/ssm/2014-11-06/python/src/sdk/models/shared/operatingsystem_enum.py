from dataclasses import dataclass, field
from enum import Enum

class OperatingSystemEnum(str, Enum):
    WINDOWS = "WINDOWS"
    AMAZON_LINUX = "AMAZON_LINUX"
    AMAZON_LINUX_2 = "AMAZON_LINUX_2"
    UBUNTU = "UBUNTU"
    REDHAT_ENTERPRISE_LINUX = "REDHAT_ENTERPRISE_LINUX"
    SUSE = "SUSE"
    CENTOS = "CENTOS"
    ORACLE_LINUX = "ORACLE_LINUX"
    DEBIAN = "DEBIAN"
    MACOS = "MACOS"

