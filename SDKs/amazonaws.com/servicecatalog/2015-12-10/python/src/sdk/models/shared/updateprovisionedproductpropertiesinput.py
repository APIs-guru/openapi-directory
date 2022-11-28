from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateProvisionedProductPropertiesInput:
    idempotency_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdempotencyToken') }})
    provisioned_product_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedProductId') }})
    provisioned_product_properties: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedProductProperties') }})
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptLanguage') }})
    
