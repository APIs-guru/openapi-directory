from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum

class ImportServerCatalogXAmzTargetEnum(str, Enum):
    AWS_SERVER_MIGRATION_SERVICE_V2016_10_24_IMPORT_SERVER_CATALOG = "AWSServerMigrationService_V2016_10_24.ImportServerCatalog"


@dataclass
class ImportServerCatalogHeaders:
    x_amz_target: ImportServerCatalogXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ImportServerCatalogRequest:
    headers: ImportServerCatalogHeaders = field()
    request: dict[str, Any] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ImportServerCatalogResponse:
    content_type: str = field()
    status_code: int = field()
    import_server_catalog_response: Optional[dict[str, Any]] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    missing_required_parameter_exception: Optional[Any] = field(default=None)
    no_connectors_available_exception: Optional[Any] = field(default=None)
    operation_not_permitted_exception: Optional[Any] = field(default=None)
    unauthorized_operation_exception: Optional[Any] = field(default=None)
    
