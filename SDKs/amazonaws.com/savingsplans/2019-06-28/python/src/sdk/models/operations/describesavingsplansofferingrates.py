from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DescribeSavingsPlansOfferingRatesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class DescribeSavingsPlansOfferingRatesRequestBody:
    filters: Optional[List[shared.SavingsPlanOfferingRateFilterElement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    operations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operations') }})
    products: Optional[List[shared.SavingsPlanProductTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    savings_plan_offering_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('savingsPlanOfferingIds') }})
    savings_plan_payment_options: Optional[List[shared.SavingsPlanPaymentOptionEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('savingsPlanPaymentOptions') }})
    savings_plan_types: Optional[List[shared.SavingsPlanTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('savingsPlanTypes') }})
    service_codes: Optional[List[shared.SavingsPlanRateServiceCodeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceCodes') }})
    usage_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageTypes') }})
    

@dataclass
class DescribeSavingsPlansOfferingRatesRequest:
    headers: DescribeSavingsPlansOfferingRatesHeaders = field()
    request: DescribeSavingsPlansOfferingRatesRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeSavingsPlansOfferingRatesResponse:
    content_type: str = field()
    status_code: int = field()
    describe_savings_plans_offering_rates_response: Optional[shared.DescribeSavingsPlansOfferingRatesResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
