from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Onev21registryGetResponses200ContentApplication1jsonSchemaPropertiesRegistryPropertiesSubscriptionAllOf1Tier:
    allow_storage_overage: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_storage_overage' }})
    included_bandwidth_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'included_bandwidth_bytes' }})
    included_repositories: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'included_repositories' }})
    included_storage_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'included_storage_bytes' }})
    monthly_price_in_cents: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monthly_price_in_cents' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    

@dataclass_json
@dataclass
class Onev21registryGetResponses200ContentApplication1jsonSchemaPropertiesRegistryPropertiesSubscriptionAllOf1:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tier: Optional[Onev21registryGetResponses200ContentApplication1jsonSchemaPropertiesRegistryPropertiesSubscriptionAllOf1Tier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tier' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
