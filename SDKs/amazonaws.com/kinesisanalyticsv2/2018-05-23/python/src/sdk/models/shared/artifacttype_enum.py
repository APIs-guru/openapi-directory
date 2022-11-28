from dataclasses import dataclass, field
from enum import Enum

class ArtifactTypeEnum(str, Enum):
    UDF = "UDF"
    DEPENDENCY_JAR = "DEPENDENCY_JAR"

