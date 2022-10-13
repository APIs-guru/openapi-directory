from dataclasses import dataclass, field
from typing import Enum

class ChannelTypeEnum(str, Enum):
    FACEBOOK = "Facebook"
    SLACK = "Slack"
    TWILIO_SMS = "Twilio-Sms"
    KIK = "Kik"

