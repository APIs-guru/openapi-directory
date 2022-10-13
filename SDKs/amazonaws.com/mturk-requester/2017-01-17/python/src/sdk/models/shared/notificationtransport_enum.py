from dataclasses import dataclass, field
from typing import Enum

class NotificationTransportEnum(str, Enum):
    EMAIL = "Email"
    SQS = "SQS"
    SNS = "SNS"

