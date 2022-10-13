from dataclasses import dataclass, field
from typing import Enum,Optional

class GetDescribeDbLogFilesActionEnum(str, Enum):
    DESCRIBE_DB_LOG_FILES = "DescribeDBLogFiles"

class GetDescribeDbLogFilesVersionEnum(str, Enum):
    TWO_THOUSAND_AND_THIRTEEN_02_12 = "2013-02-12"


@dataclass
class GetDescribeDbLogFilesQueryParams:
    action: GetDescribeDbLogFilesActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    db_instance_identifier: str = field(default=None, metadata={'query_param': { 'field_name': 'DBInstanceIdentifier', 'style': 'form', 'explode': True }})
    file_last_written: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'FileLastWritten', 'style': 'form', 'explode': True }})
    file_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'FileSize', 'style': 'form', 'explode': True }})
    filename_contains: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'FilenameContains', 'style': 'form', 'explode': True }})
    marker: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_records: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxRecords', 'style': 'form', 'explode': True }})
    version: GetDescribeDbLogFilesVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDescribeDbLogFilesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetDescribeDbLogFilesRequest:
    query_params: GetDescribeDbLogFilesQueryParams = field(default=None)
    headers: GetDescribeDbLogFilesHeaders = field(default=None)
    

@dataclass
class GetDescribeDbLogFilesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
