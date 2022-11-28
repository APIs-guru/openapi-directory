from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DestinyResponsesDestinyLinkedProfilesResponseBnetMembership:
    r"""DestinyResponsesDestinyLinkedProfilesResponseBnetMembership
    If the requested membership had a linked Bungie.Net membership ID, this is the basic information about that BNet account.
    I know, Tetron; I know this is mixing UserServices concerns with DestinyServices concerns. But it's so damn convenient! https://www.youtube.com/watch?v=X5R-bB-gKVI
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
class DestinyResponsesDestinyLinkedProfilesResponse:
    r"""DestinyResponsesDestinyLinkedProfilesResponse
    I know what you seek. You seek linked accounts. Found them, you have.
    This contract returns a minimal amount of data about Destiny Accounts that are linked through your Bungie.Net account. We will not return accounts in this response whose
    """
    
    bnet_membership: Optional[DestinyResponsesDestinyLinkedProfilesResponseBnetMembership] = field(default=None)
    profiles: Optional[List[DestinyResponsesDestinyProfileUserInfoCard]] = field(default=None)
    profiles_with_errors: Optional[List[DestinyResponsesDestinyErrorProfile]] = field(default=None)
    
