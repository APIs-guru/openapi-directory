from dataclasses import dataclass, field
from enum import Enum

class UsageStatisticsSortKeyEnum(str, Enum):
    ACCOUNT_ID = "accountId"
    TOTAL = "total"
    SERVICE_LIMIT_VALUE = "serviceLimitValue"
    FREE_TRIAL_START_DATE = "freeTrialStartDate"

