from dataclasses import dataclass, field
from typing import Enum

class ArtifactTypeEnum(str, Enum):
    UDF = "UDF"
    DEPENDENCY_JAR = "DEPENDENCY_JAR"

