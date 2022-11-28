from dataclasses import dataclass, field
from enum import Enum

class DistributionMetricNameEnum(str, Enum):
    REQUESTS = "Requests"
    BYTES_DOWNLOADED = "BytesDownloaded"
    BYTES_UPLOADED = "BytesUploaded"
    TOTAL_ERROR_RATE = "TotalErrorRate"
    HTTP4XX_ERROR_RATE = "Http4xxErrorRate"
    HTTP5XX_ERROR_RATE = "Http5xxErrorRate"

