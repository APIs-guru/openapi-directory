from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class DocumentReviewActionEnum(str, Enum):
    SEND_FOR_REVIEW = "SendForReview"
    UPDATE_REVIEW = "UpdateReview"
    APPROVE = "Approve"
    REJECT = "Reject"

