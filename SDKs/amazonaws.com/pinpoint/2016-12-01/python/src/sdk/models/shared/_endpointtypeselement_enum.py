from dataclasses import dataclass, field
from enum import Enum

class EndpointTypesElementEnum(str, Enum):
    PUSH = "PUSH"
    GCM = "GCM"
    APNS = "APNS"
    APNS_SANDBOX = "APNS_SANDBOX"
    APNS_VOIP = "APNS_VOIP"
    APNS_VOIP_SANDBOX = "APNS_VOIP_SANDBOX"
    ADM = "ADM"
    SMS = "SMS"
    VOICE = "VOICE"
    EMAIL = "EMAIL"
    BAIDU = "BAIDU"
    CUSTOM = "CUSTOM"
    IN_APP = "IN_APP"

