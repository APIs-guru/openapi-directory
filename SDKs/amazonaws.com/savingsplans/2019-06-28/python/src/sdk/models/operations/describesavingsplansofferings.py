from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DescribeSavingsPlansOfferingsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class DescribeSavingsPlansOfferingsRequestBodyProductTypeEnum(str, Enum):
    EC2 = "EC2"
    FARGATE = "Fargate"
    LAMBDA = "Lambda"
    SAGE_MAKER = "SageMaker"


@dataclass_json
@dataclass
class DescribeSavingsPlansOfferingsRequestBody:
    currencies: Optional[List[shared.CurrencyCodeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencies' }})
    descriptions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'descriptions' }})
    durations: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'durations' }})
    filters: Optional[List[shared.SavingsPlanOfferingFilterElement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    offering_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offeringIds' }})
    operations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operations' }})
    payment_options: Optional[List[shared.SavingsPlanPaymentOptionEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentOptions' }})
    plan_types: Optional[List[shared.SavingsPlanTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'planTypes' }})
    product_type: Optional[DescribeSavingsPlansOfferingsRequestBodyProductTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productType' }})
    service_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceCodes' }})
    usage_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usageTypes' }})
    

@dataclass
class DescribeSavingsPlansOfferingsRequest:
    headers: DescribeSavingsPlansOfferingsHeaders = field(default=None)
    request: DescribeSavingsPlansOfferingsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeSavingsPlansOfferingsResponse:
    content_type: str = field(default=None)
    describe_savings_plans_offerings_response: Optional[shared.DescribeSavingsPlansOfferingsResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
