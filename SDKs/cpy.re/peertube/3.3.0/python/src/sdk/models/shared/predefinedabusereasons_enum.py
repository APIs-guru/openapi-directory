from dataclasses import dataclass, field
from enum import Enum

class PredefinedAbuseReasonsEnum(str, Enum):
    VIOLENT_OR_ABUSIVE = "violentOrAbusive"
    HATEFUL_OR_ABUSIVE = "hatefulOrAbusive"
    SPAM_OR_MISLEADING = "spamOrMisleading"
    PRIVACY = "privacy"
    RIGHTS = "rights"
    SERVER_RULES = "serverRules"
    THUMBNAILS = "thumbnails"
    CAPTIONS = "captions"

