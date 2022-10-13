from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class QuotePostGenerateSaleInvoiceRequest:
    request: shared.QuoteGeneratingInvoiceDto = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class QuotePostGenerateSaleInvoiceResponse:
    content_type: str = field(default=None)
    quote_post_generate_sale_invoice_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
