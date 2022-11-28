from dataclasses import dataclass, field
from enum import Enum

class SavingsPlanRateFilterAttributeEnum(str, Enum):
    REGION = "region"
    INSTANCE_FAMILY = "instanceFamily"
    INSTANCE_TYPE = "instanceType"
    PRODUCT_DESCRIPTION = "productDescription"
    TENANCY = "tenancy"
    PRODUCT_ID = "productId"

