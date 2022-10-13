from dataclasses import dataclass, field
from typing import Enum

class FunctionResponseTypeEnum(str, Enum):
    REPORT_BATCH_ITEM_FAILURES = "ReportBatchItemFailures"

