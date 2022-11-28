from dataclasses import dataclass, field
from enum import Enum

class RuntimeEnvironmentEnum(str, Enum):
    SQL_1_0 = "SQL-1_0"
    FLINK_1_6 = "FLINK-1_6"
    FLINK_1_8 = "FLINK-1_8"
    FLINK_1_11 = "FLINK-1_11"
    ZEPPELIN_FLINK_1_0 = "ZEPPELIN-FLINK-1_0"

