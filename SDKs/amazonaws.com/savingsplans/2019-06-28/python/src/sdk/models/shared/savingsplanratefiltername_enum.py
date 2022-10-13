from dataclasses import dataclass, field
from typing import Enum

class SavingsPlanRateFilterNameEnum(str, Enum):
    REGION = "region"
    INSTANCE_TYPE = "instanceType"
    PRODUCT_DESCRIPTION = "productDescription"
    TENANCY = "tenancy"
    PRODUCT_TYPE = "productType"
    SERVICE_CODE = "serviceCode"
    USAGE_TYPE = "usageType"
    OPERATION = "operation"

