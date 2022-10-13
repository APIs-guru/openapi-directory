from dataclasses import dataclass, field
from typing import Enum,Optional

class GetDeleteDbInstanceAutomatedBackupActionEnum(str, Enum):
    DELETE_DB_INSTANCE_AUTOMATED_BACKUP = "DeleteDBInstanceAutomatedBackup"

class GetDeleteDbInstanceAutomatedBackupVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclass
class GetDeleteDbInstanceAutomatedBackupQueryParams:
    action: GetDeleteDbInstanceAutomatedBackupActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    db_instance_automated_backups_arn: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DBInstanceAutomatedBackupsArn', 'style': 'form', 'explode': True }})
    dbi_resource_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DbiResourceId', 'style': 'form', 'explode': True }})
    version: GetDeleteDbInstanceAutomatedBackupVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeleteDbInstanceAutomatedBackupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetDeleteDbInstanceAutomatedBackupRequest:
    query_params: GetDeleteDbInstanceAutomatedBackupQueryParams = field(default=None)
    headers: GetDeleteDbInstanceAutomatedBackupHeaders = field(default=None)
    

@dataclass
class GetDeleteDbInstanceAutomatedBackupResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
