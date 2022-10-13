from dataclasses import dataclass, field
from typing import Enum

class LoadBalancerAttributeNameEnum(str, Enum):
    HEALTH_CHECK_PATH = "HealthCheckPath"
    SESSION_STICKINESS_ENABLED = "SessionStickinessEnabled"
    SESSION_STICKINESS_LB_COOKIE_DURATION_SECONDS = "SessionStickiness_LB_CookieDurationSeconds"

