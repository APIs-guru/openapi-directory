from dataclasses import dataclass, field
from typing import Enum

class SortAssociationsByEnum(str, Enum):
    SOURCE_ARN = "SourceArn"
    DESTINATION_ARN = "DestinationArn"
    SOURCE_TYPE = "SourceType"
    DESTINATION_TYPE = "DestinationType"
    CREATION_TIME = "CreationTime"

