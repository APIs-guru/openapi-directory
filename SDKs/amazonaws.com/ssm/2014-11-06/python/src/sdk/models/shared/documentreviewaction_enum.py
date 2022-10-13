from dataclasses import dataclass, field
from typing import Enum

class DocumentReviewActionEnum(str, Enum):
    SEND_FOR_REVIEW = "SendForReview"
    UPDATE_REVIEW = "UpdateReview"
    APPROVE = "Approve"
    REJECT = "Reject"

