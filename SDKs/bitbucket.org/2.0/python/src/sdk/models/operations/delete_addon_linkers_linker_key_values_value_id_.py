from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteAddonLinkersLinkerKeyValuesValueIDPathParams:
    linker_key: str = field(default=None, metadata={'path_param': { 'field_name': 'linker_key', 'style': 'simple', 'explode': False }})
    value_id: int = field(default=None, metadata={'path_param': { 'field_name': 'value_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAddonLinkersLinkerKeyValuesValueIDSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteAddonLinkersLinkerKeyValuesValueIDSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteAddonLinkersLinkerKeyValuesValueIDSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteAddonLinkersLinkerKeyValuesValueIDSecurity:
    option1: Optional[DeleteAddonLinkersLinkerKeyValuesValueIDSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteAddonLinkersLinkerKeyValuesValueIDSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[DeleteAddonLinkersLinkerKeyValuesValueIDSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteAddonLinkersLinkerKeyValuesValueIDRequest:
    path_params: DeleteAddonLinkersLinkerKeyValuesValueIDPathParams = field(default=None)
    security: DeleteAddonLinkersLinkerKeyValuesValueIDSecurity = field(default=None)
    

@dataclass
class DeleteAddonLinkersLinkerKeyValuesValueIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
