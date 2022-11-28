from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class VatCategoriesProcessVatRatesRequest:
    request: List[shared.VatRatesByVatCategoryDto] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class VatCategoriesProcessVatRatesResponse:
    content_type: str = field()
    status_code: int = field()
    vat_categories_process_vat_rates_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
