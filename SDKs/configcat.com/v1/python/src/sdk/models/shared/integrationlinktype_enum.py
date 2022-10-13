from dataclasses import dataclass, field
from typing import Enum

class IntegrationLinkTypeEnum(str, Enum):
    TRELLO = "trello"
    JIRA = "jira"

