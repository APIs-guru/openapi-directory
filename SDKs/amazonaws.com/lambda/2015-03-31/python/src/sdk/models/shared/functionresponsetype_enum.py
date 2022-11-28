from dataclasses import dataclass, field
from enum import Enum

class FunctionResponseTypeEnum(str, Enum):
    REPORT_BATCH_ITEM_FAILURES = "ReportBatchItemFailures"

