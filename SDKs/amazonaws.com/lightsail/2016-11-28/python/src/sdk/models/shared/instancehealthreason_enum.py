from dataclasses import dataclass, field
from typing import Enum

class InstanceHealthReasonEnum(str, Enum):
    LB_REGISTRATION_IN_PROGRESS = "Lb.RegistrationInProgress"
    LB_INITIAL_HEALTH_CHECKING = "Lb.InitialHealthChecking"
    LB_INTERNAL_ERROR = "Lb.InternalError"
    INSTANCE_RESPONSE_CODE_MISMATCH = "Instance.ResponseCodeMismatch"
    INSTANCE_TIMEOUT = "Instance.Timeout"
    INSTANCE_FAILED_HEALTH_CHECKS = "Instance.FailedHealthChecks"
    INSTANCE_NOT_REGISTERED = "Instance.NotRegistered"
    INSTANCE_NOT_IN_USE = "Instance.NotInUse"
    INSTANCE_DEREGISTRATION_IN_PROGRESS = "Instance.DeregistrationInProgress"
    INSTANCE_INVALID_STATE = "Instance.InvalidState"
    INSTANCE_IP_UNUSABLE = "Instance.IpUnusable"

