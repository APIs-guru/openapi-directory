from dataclasses import dataclass, field
from enum import Enum

class CodeScanningAlertClassificationEnum(str, Enum):
    SOURCE = "source"
    GENERATED = "generated"
    TEST = "test"
    LIBRARY = "library"

