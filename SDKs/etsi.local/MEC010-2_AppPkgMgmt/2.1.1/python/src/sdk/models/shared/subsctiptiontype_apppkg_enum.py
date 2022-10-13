from dataclasses import dataclass, field
from typing import Enum

class SubsctiptionTypeAppPkgEnum(str, Enum):
    APP_PACKAGE_ON_BOARDING = "AppPackageOnBoarding"
    APP_PACAKGE_OPERATION_CHANGE = "AppPacakgeOperationChange"
    APP_PACKAGE_DELETION = "AppPackageDeletion"

