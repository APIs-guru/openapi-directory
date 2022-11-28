from dataclasses import dataclass, field
from enum import Enum

class UsageStatisticsFilterKeyEnum(str, Enum):
    ACCOUNT_ID = "accountId"
    SERVICE_LIMIT = "serviceLimit"
    FREE_TRIAL_START_DATE = "freeTrialStartDate"
    TOTAL = "total"

