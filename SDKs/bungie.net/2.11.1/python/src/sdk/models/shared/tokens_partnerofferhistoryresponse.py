from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class TokensPartnerOfferHistoryResponse:
    apply_date: Optional[datetime] = field(default=None)
    is_consumable: Optional[bool] = field(default=None)
    localized_description: Optional[str] = field(default=None)
    localized_name: Optional[str] = field(default=None)
    membership_id: Optional[int] = field(default=None)
    membership_type: Optional[int] = field(default=None)
    partner_offer_key: Optional[str] = field(default=None)
    quantity_applied: Optional[int] = field(default=None)
    
