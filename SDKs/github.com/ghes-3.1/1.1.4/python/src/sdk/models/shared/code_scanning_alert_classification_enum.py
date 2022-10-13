from dataclasses import dataclass, field
from typing import Enum

class CodeScanningAlertClassificationEnum(str, Enum):
    SOURCE = "source"
    GENERATED = "generated"
    TEST = "test"
    LIBRARY = "library"

