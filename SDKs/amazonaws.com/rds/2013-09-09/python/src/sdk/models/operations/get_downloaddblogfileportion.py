from dataclasses import dataclass, field
from typing import Enum,Optional

class GetDownloadDbLogFilePortionActionEnum(str, Enum):
    DOWNLOAD_DB_LOG_FILE_PORTION = "DownloadDBLogFilePortion"

class GetDownloadDbLogFilePortionVersionEnum(str, Enum):
    TWO_THOUSAND_AND_THIRTEEN_09_09 = "2013-09-09"


@dataclass
class GetDownloadDbLogFilePortionQueryParams:
    action: GetDownloadDbLogFilePortionActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    db_instance_identifier: str = field(default=None, metadata={'query_param': { 'field_name': 'DBInstanceIdentifier', 'style': 'form', 'explode': True }})
    log_file_name: str = field(default=None, metadata={'query_param': { 'field_name': 'LogFileName', 'style': 'form', 'explode': True }})
    marker: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    number_of_lines: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'NumberOfLines', 'style': 'form', 'explode': True }})
    version: GetDownloadDbLogFilePortionVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDownloadDbLogFilePortionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDownloadDbLogFilePortionRequest:
    query_params: GetDownloadDbLogFilePortionQueryParams = field(default=None)
    headers: GetDownloadDbLogFilePortionHeaders = field(default=None)
    

@dataclass
class GetDownloadDbLogFilePortionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
