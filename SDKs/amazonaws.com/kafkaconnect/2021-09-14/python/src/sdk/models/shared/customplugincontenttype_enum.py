from dataclasses import dataclass, field
from typing import Enum

class CustomPluginContentTypeEnum(str, Enum):
    JAR = "JAR"
    ZIP = "ZIP"

