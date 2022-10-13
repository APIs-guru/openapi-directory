from dataclasses import dataclass, field
from typing import Enum

class MatchFieldTypeEnum(str, Enum):
    URI = "URI"
    QUERY_STRING = "QUERY_STRING"
    HEADER = "HEADER"
    METHOD = "METHOD"
    BODY = "BODY"
    SINGLE_QUERY_ARG = "SINGLE_QUERY_ARG"
    ALL_QUERY_ARGS = "ALL_QUERY_ARGS"

