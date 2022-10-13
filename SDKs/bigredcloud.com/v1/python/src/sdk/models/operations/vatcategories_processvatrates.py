from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class VatCategoriesProcessVatRatesRequest:
    request: List[shared.VatRatesByVatCategoryDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class VatCategoriesProcessVatRatesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    vat_categories_process_vat_rates_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
