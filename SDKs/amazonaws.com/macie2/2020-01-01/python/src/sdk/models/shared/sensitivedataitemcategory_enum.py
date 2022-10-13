from dataclasses import dataclass, field
from typing import Enum

class SensitiveDataItemCategoryEnum(str, Enum):
    FINANCIAL_INFORMATION = "FINANCIAL_INFORMATION"
    PERSONAL_INFORMATION = "PERSONAL_INFORMATION"
    CREDENTIALS = "CREDENTIALS"
    CUSTOM_IDENTIFIER = "CUSTOM_IDENTIFIER"

