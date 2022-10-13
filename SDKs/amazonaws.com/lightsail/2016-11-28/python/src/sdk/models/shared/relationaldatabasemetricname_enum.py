from dataclasses import dataclass, field
from typing import Enum

class RelationalDatabaseMetricNameEnum(str, Enum):
    CPU_UTILIZATION = "CPUUtilization"
    DATABASE_CONNECTIONS = "DatabaseConnections"
    DISK_QUEUE_DEPTH = "DiskQueueDepth"
    FREE_STORAGE_SPACE = "FreeStorageSpace"
    NETWORK_RECEIVE_THROUGHPUT = "NetworkReceiveThroughput"
    NETWORK_TRANSMIT_THROUGHPUT = "NetworkTransmitThroughput"

