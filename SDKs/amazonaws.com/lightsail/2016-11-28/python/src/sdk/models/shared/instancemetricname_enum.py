from dataclasses import dataclass, field
from enum import Enum

class InstanceMetricNameEnum(str, Enum):
    CPU_UTILIZATION = "CPUUtilization"
    NETWORK_IN = "NetworkIn"
    NETWORK_OUT = "NetworkOut"
    STATUS_CHECK_FAILED = "StatusCheckFailed"
    STATUS_CHECK_FAILED_INSTANCE = "StatusCheckFailed_Instance"
    STATUS_CHECK_FAILED_SYSTEM = "StatusCheckFailed_System"
    BURST_CAPACITY_TIME = "BurstCapacityTime"
    BURST_CAPACITY_PERCENTAGE = "BurstCapacityPercentage"

