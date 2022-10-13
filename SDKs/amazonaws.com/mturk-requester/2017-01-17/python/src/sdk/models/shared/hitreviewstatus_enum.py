from dataclasses import dataclass, field
from typing import Enum

class HitReviewStatusEnum(str, Enum):
    NOT_REVIEWED = "NotReviewed"
    MARKED_FOR_REVIEW = "MarkedForReview"
    REVIEWED_APPROPRIATE = "ReviewedAppropriate"
    REVIEWED_INAPPROPRIATE = "ReviewedInappropriate"

