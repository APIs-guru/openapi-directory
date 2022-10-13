from dataclasses import dataclass, field
from typing import Enum

class ProductionVariantAcceleratorTypeEnum(str, Enum):
    ML_EIA1_MEDIUM = "ml.eia1.medium"
    ML_EIA1_LARGE = "ml.eia1.large"
    ML_EIA1_XLARGE = "ml.eia1.xlarge"
    ML_EIA2_MEDIUM = "ml.eia2.medium"
    ML_EIA2_LARGE = "ml.eia2.large"
    ML_EIA2_XLARGE = "ml.eia2.xlarge"

