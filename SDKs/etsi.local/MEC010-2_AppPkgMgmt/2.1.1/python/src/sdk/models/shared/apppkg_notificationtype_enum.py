from dataclasses import dataclass, field
from enum import Enum

class AppPkgNotificationTypeEnum(str, Enum):
    APP_PACKAGE_ON_BOARDED = "AppPackageOnBoarded"
    APP_PACAKGE_ENABLED = "AppPacakgeEnabled"
    APP_PACAKGE_DISABLED = "AppPacakgeDisabled"
    APP_PACKAGE_DELETED = "AppPackageDeleted"

