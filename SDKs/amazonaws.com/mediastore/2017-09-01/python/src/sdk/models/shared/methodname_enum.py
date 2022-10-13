from dataclasses import dataclass, field
from typing import Enum

class MethodNameEnum(str, Enum):
    PUT = "PUT"
    GET = "GET"
    DELETE = "DELETE"
    HEAD = "HEAD"

