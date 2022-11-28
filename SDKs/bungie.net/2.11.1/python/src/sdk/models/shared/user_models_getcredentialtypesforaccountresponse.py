from dataclasses import dataclass, field
from typing import Optional


@dataclass
class UserModelsGetCredentialTypesForAccountResponse:
    credential_as_string: Optional[str] = field(default=None)
    credential_display_name: Optional[str] = field(default=None)
    credential_type: Optional[int] = field(default=None)
    is_public: Optional[bool] = field(default=None)
    
