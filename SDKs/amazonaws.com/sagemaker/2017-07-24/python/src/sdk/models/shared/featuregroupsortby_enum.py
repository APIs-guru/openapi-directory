from dataclasses import dataclass, field
from typing import Enum

class FeatureGroupSortByEnum(str, Enum):
    NAME = "Name"
    FEATURE_GROUP_STATUS = "FeatureGroupStatus"
    OFFLINE_STORE_STATUS = "OfflineStoreStatus"
    CREATION_TIME = "CreationTime"

