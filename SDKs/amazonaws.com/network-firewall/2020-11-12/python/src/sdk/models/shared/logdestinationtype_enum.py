from dataclasses import dataclass, field
from typing import Enum

class LogDestinationTypeEnum(str, Enum):
    S3 = "S3"
    CLOUD_WATCH_LOGS = "CloudWatchLogs"
    KINESIS_DATA_FIREHOSE = "KinesisDataFirehose"

