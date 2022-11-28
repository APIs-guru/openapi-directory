from dataclasses import dataclass, field
from enum import Enum

class LoadBalancerMetricNameEnum(str, Enum):
    CLIENT_TLS_NEGOTIATION_ERROR_COUNT = "ClientTLSNegotiationErrorCount"
    HEALTHY_HOST_COUNT = "HealthyHostCount"
    UNHEALTHY_HOST_COUNT = "UnhealthyHostCount"
    HTTP_CODE_LB_4_XX_COUNT = "HTTPCode_LB_4XX_Count"
    HTTP_CODE_LB_5_XX_COUNT = "HTTPCode_LB_5XX_Count"
    HTTP_CODE_INSTANCE_2_XX_COUNT = "HTTPCode_Instance_2XX_Count"
    HTTP_CODE_INSTANCE_3_XX_COUNT = "HTTPCode_Instance_3XX_Count"
    HTTP_CODE_INSTANCE_4_XX_COUNT = "HTTPCode_Instance_4XX_Count"
    HTTP_CODE_INSTANCE_5_XX_COUNT = "HTTPCode_Instance_5XX_Count"
    INSTANCE_RESPONSE_TIME = "InstanceResponseTime"
    REJECTED_CONNECTION_COUNT = "RejectedConnectionCount"
    REQUEST_COUNT = "RequestCount"

