from dataclasses import dataclass, field
from typing import Enum

class NsfwPolicyEnum(str, Enum):
    DISPLAY = "display"
    BLUR = "blur"
    DO_NOT_LIST = "do_not_list"

