from dataclasses import dataclass, field
from typing import Enum

class RuleEvaluationStatusEnum(str, Enum):
    IN_PROGRESS = "InProgress"
    NO_ISSUES_FOUND = "NoIssuesFound"
    ISSUES_FOUND = "IssuesFound"
    ERROR = "Error"
    STOPPING = "Stopping"
    STOPPED = "Stopped"

