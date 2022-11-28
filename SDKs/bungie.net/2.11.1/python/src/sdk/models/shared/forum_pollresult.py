from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class ForumPollResult:
    answer_slot: Optional[int] = field(default=None)
    answer_text: Optional[str] = field(default=None)
    last_vote_date: Optional[datetime] = field(default=None)
    requesting_user_voted: Optional[bool] = field(default=None)
    votes: Optional[int] = field(default=None)
    
