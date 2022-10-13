from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import identityprovidertype_enum


@dataclass_json
@dataclass
class DescribeIdentityProviderConfigurationResponse:
    identity_provider_saml_metadata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityProviderSamlMetadata' }})
    identity_provider_type: Optional[identityprovidertype_enum.IdentityProviderTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityProviderType' }})
    service_provider_saml_metadata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceProviderSamlMetadata' }})
    
