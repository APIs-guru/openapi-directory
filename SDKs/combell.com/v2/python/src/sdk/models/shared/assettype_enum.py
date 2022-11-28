from dataclasses import dataclass, field
from enum import Enum

class AssetTypeEnum(str, Enum):
    DOMAIN = "domain"
    LINUX_HOSTING = "linux_hosting"
    MYSQL = "mysql"
    DNS = "dns"
    MAILBOX = "mailbox"
    WINDOWS_HOSTING = "windows_hosting"

