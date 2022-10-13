from dataclasses import dataclass, field
from typing import Enum

class AwsS3BucketNotificationConfigurationS3KeyFilterRuleNameEnum(str, Enum):
    PREFIX = "Prefix"
    SUFFIX = "Suffix"

