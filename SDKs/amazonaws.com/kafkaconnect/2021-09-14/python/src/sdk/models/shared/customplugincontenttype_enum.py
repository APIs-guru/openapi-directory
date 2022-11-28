from dataclasses import dataclass, field
from enum import Enum

class CustomPluginContentTypeEnum(str, Enum):
    JAR = "JAR"
    ZIP = "ZIP"

