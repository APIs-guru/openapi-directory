from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import servicequotatemplateassociationstatus_enum


@dataclass_json
@dataclass
class GetAssociationForServiceQuotaTemplateResponse:
    service_quota_template_association_status: Optional[servicequotatemplateassociationstatus_enum.ServiceQuotaTemplateAssociationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceQuotaTemplateAssociationStatus' }})
    
