from dataclasses import dataclass, field
from typing import Enum

class SourceTypeEnum(str, Enum):
    GIT = "git"
    SVN = "svn"
    ARCHIVE = "archive"
    S3 = "s3"

