from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class StartSupportDataExportXAmzTargetEnum(str, Enum):
    MARKETPLACE_COMMERCE_ANALYTICS20150701_START_SUPPORT_DATA_EXPORT = "MarketplaceCommerceAnalytics20150701.StartSupportDataExport"


@dataclass
class StartSupportDataExportHeaders:
    x_amz_target: StartSupportDataExportXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class StartSupportDataExportRequest:
    headers: StartSupportDataExportHeaders = field()
    request: shared.StartSupportDataExportRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartSupportDataExportResponse:
    content_type: str = field()
    status_code: int = field()
    marketplace_commerce_analytics_exception: Optional[Any] = field(default=None)
    start_support_data_export_result: Optional[shared.StartSupportDataExportResult] = field(default=None)
    
