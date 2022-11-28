from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class DestinyResponsesDestinyErrorProfileInfoCard:
    r"""DestinyResponsesDestinyErrorProfileInfoCard
    Basic info about the account that failed. Don't expect anything other than membership ID, Membership Type, and displayName to be populated.
    """
    
    applicable_membership_types: Optional[List[int]] = field(default=None)
    cross_save_override: Optional[int] = field(default=None)
    display_name: Optional[str] = field(default=None)
    icon_path: Optional[str] = field(default=None)
    is_public: Optional[bool] = field(default=None)
    membership_id: Optional[int] = field(default=None)
    membership_type: Optional[int] = field(default=None)
    supplemental_display_name: Optional[str] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyErrorProfile:
    r"""DestinyResponsesDestinyErrorProfile
    If a Destiny Profile can't be returned, but we're pretty certain it's a valid Destiny account, this will contain as much info as we can get about the profile for your use.
    Assume that the most you'll get is the Error Code, the Membership Type and the Membership ID.
    """
    
    error_code: Optional[int] = field(default=None)
    info_card: Optional[DestinyResponsesDestinyErrorProfileInfoCard] = field(default=None)
    
