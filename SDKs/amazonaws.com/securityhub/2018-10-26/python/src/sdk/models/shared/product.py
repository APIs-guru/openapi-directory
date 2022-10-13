from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import integrationtype_enum


@dataclass_json
@dataclass
class Product:
    activation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActivationUrl' }})
    categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Categories' }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompanyName' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    integration_types: Optional[List[integrationtype_enum.IntegrationTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IntegrationTypes' }})
    marketplace_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MarketplaceUrl' }})
    product_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductArn' }})
    product_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductName' }})
    product_subscription_resource_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductSubscriptionResourcePolicy' }})
    
