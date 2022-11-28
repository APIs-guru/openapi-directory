from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class TokensPartnerOfferSkuHistoryResponse:
    all_offers_applied: Optional[bool] = field(default=None)
    claim_date: Optional[datetime] = field(default=None)
    localized_description: Optional[str] = field(default=None)
    localized_name: Optional[str] = field(default=None)
    sku_identifier: Optional[str] = field(default=None)
    sku_offers: Optional[List[TokensPartnerOfferHistoryResponse]] = field(default=None)
    transaction_id: Optional[str] = field(default=None)
    
