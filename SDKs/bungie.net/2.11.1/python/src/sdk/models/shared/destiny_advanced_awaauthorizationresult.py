from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class DestinyAdvancedAwaAuthorizationResult:
    action_token: Optional[str] = field(default=None)
    developer_note: Optional[str] = field(default=None)
    maximum_number_of_uses: Optional[int] = field(default=None)
    membership_type: Optional[int] = field(default=None)
    response_reason: Optional[int] = field(default=None)
    type: Optional[int] = field(default=None)
    user_selection: Optional[int] = field(default=None)
    valid_until: Optional[datetime] = field(default=None)
    
