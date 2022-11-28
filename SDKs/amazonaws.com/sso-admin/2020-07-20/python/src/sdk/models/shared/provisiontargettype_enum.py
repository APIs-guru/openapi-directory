from dataclasses import dataclass, field
from enum import Enum

class ProvisionTargetTypeEnum(str, Enum):
    AWS_ACCOUNT = "AWS_ACCOUNT"
    ALL_PROVISIONED_ACCOUNTS = "ALL_PROVISIONED_ACCOUNTS"

