from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class SubscriptionPurchase:
    r"""SubscriptionPurchase
    A SubscriptionPurchase resource indicates the status of a user's subscription purchase.
    """
    
    auto_renewing: Optional[bool] = field(default=None)
    cancel_reason: Optional[int] = field(default=None)
    cancel_survey_result: Optional[SubscriptionCancelSurveyResult] = field(default=None)
    country_code: Optional[str] = field(default=None)
    developer_payload: Optional[str] = field(default=None)
    email_address: Optional[str] = field(default=None)
    expiry_time_millis: Optional[str] = field(default=None)
    family_name: Optional[str] = field(default=None)
    given_name: Optional[str] = field(default=None)
    kind: Optional[str] = field(default=None)
    linked_purchase_token: Optional[str] = field(default=None)
    order_id: Optional[str] = field(default=None)
    payment_state: Optional[int] = field(default=None)
    price_amount_micros: Optional[str] = field(default=None)
    price_change: Optional[SubscriptionPriceChange] = field(default=None)
    price_currency_code: Optional[str] = field(default=None)
    profile_id: Optional[str] = field(default=None)
    profile_name: Optional[str] = field(default=None)
    purchase_type: Optional[int] = field(default=None)
    start_time_millis: Optional[str] = field(default=None)
    user_cancellation_time_millis: Optional[str] = field(default=None)
    
