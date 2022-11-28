from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CopyProductInput:
    idempotency_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdempotencyToken') }})
    source_product_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceProductArn') }})
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptLanguage') }})
    copy_options: Optional[List[CopyOptionEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CopyOptions') }})
    source_provisioning_artifact_identifiers: Optional[List[dict[str, str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceProvisioningArtifactIdentifiers') }})
    target_product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetProductId') }})
    target_product_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetProductName') }})
    
