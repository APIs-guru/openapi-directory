from dataclasses import dataclass, field
from enum import Enum

class AwsS3BucketNotificationConfigurationS3KeyFilterRuleNameEnum(str, Enum):
    PREFIX = "Prefix"
    SUFFIX = "Suffix"

