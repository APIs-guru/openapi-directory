from dataclasses import dataclass, field
from typing import Enum

class AppTypeEnum(str, Enum):
    AWS_FLOW_RUBY = "aws-flow-ruby"
    JAVA = "java"
    RAILS = "rails"
    PHP = "php"
    NODEJS = "nodejs"
    STATIC = "static"
    OTHER = "other"

