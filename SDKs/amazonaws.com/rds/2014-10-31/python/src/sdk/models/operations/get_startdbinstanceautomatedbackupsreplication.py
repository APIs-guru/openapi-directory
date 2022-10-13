from dataclasses import dataclass, field
from typing import Enum,Optional

class GetStartDbInstanceAutomatedBackupsReplicationActionEnum(str, Enum):
    START_DB_INSTANCE_AUTOMATED_BACKUPS_REPLICATION = "StartDBInstanceAutomatedBackupsReplication"

class GetStartDbInstanceAutomatedBackupsReplicationVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclass
class GetStartDbInstanceAutomatedBackupsReplicationQueryParams:
    action: GetStartDbInstanceAutomatedBackupsReplicationActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    backup_retention_period: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'BackupRetentionPeriod', 'style': 'form', 'explode': True }})
    kms_key_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'KmsKeyId', 'style': 'form', 'explode': True }})
    pre_signed_url: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'PreSignedUrl', 'style': 'form', 'explode': True }})
    source_db_instance_arn: str = field(default=None, metadata={'query_param': { 'field_name': 'SourceDBInstanceArn', 'style': 'form', 'explode': True }})
    version: GetStartDbInstanceAutomatedBackupsReplicationVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetStartDbInstanceAutomatedBackupsReplicationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetStartDbInstanceAutomatedBackupsReplicationRequest:
    query_params: GetStartDbInstanceAutomatedBackupsReplicationQueryParams = field(default=None)
    headers: GetStartDbInstanceAutomatedBackupsReplicationHeaders = field(default=None)
    

@dataclass
class GetStartDbInstanceAutomatedBackupsReplicationResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
