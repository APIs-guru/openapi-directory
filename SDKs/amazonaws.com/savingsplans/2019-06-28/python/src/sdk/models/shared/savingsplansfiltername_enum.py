from dataclasses import dataclass, field
from typing import Enum

class SavingsPlansFilterNameEnum(str, Enum):
    REGION = "region"
    EC2_INSTANCE_FAMILY = "ec2-instance-family"
    COMMITMENT = "commitment"
    UPFRONT = "upfront"
    TERM = "term"
    SAVINGS_PLAN_TYPE = "savings-plan-type"
    PAYMENT_OPTION = "payment-option"
    START = "start"
    END = "end"

