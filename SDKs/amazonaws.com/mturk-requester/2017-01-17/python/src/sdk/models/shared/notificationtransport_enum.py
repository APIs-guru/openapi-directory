from dataclasses import dataclass, field
from enum import Enum

class NotificationTransportEnum(str, Enum):
    EMAIL = "Email"
    SQS = "SQS"
    SNS = "SNS"

