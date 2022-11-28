from dataclasses import dataclass, field
from enum import Enum

class MethodNameEnum(str, Enum):
    PUT = "PUT"
    GET = "GET"
    DELETE = "DELETE"
    HEAD = "HEAD"

