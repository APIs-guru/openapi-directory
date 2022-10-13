from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import copyoption_enum


@dataclass_json
@dataclass
class CopyProductInput:
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceptLanguage' }})
    copy_options: Optional[List[copyoption_enum.CopyOptionEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CopyOptions' }})
    idempotency_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdempotencyToken' }})
    source_product_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceProductArn' }})
    source_provisioning_artifact_identifiers: Optional[List[dict[str, str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceProvisioningArtifactIdentifiers' }})
    target_product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetProductId' }})
    target_product_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetProductName' }})
    
