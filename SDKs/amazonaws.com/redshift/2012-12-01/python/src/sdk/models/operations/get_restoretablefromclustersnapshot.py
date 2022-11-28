from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetRestoreTableFromClusterSnapshotActionEnum(str, Enum):
    RESTORE_TABLE_FROM_CLUSTER_SNAPSHOT = "RestoreTableFromClusterSnapshot"

class GetRestoreTableFromClusterSnapshotVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclass
class GetRestoreTableFromClusterSnapshotQueryParams:
    action: GetRestoreTableFromClusterSnapshotActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    cluster_identifier: str = field(metadata={'query_param': { 'field_name': 'ClusterIdentifier', 'style': 'form', 'explode': True }})
    new_table_name: str = field(metadata={'query_param': { 'field_name': 'NewTableName', 'style': 'form', 'explode': True }})
    snapshot_identifier: str = field(metadata={'query_param': { 'field_name': 'SnapshotIdentifier', 'style': 'form', 'explode': True }})
    source_database_name: str = field(metadata={'query_param': { 'field_name': 'SourceDatabaseName', 'style': 'form', 'explode': True }})
    source_table_name: str = field(metadata={'query_param': { 'field_name': 'SourceTableName', 'style': 'form', 'explode': True }})
    version: GetRestoreTableFromClusterSnapshotVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    enable_case_sensitive_identifier: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'EnableCaseSensitiveIdentifier', 'style': 'form', 'explode': True }})
    source_schema_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'SourceSchemaName', 'style': 'form', 'explode': True }})
    target_database_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TargetDatabaseName', 'style': 'form', 'explode': True }})
    target_schema_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TargetSchemaName', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRestoreTableFromClusterSnapshotHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRestoreTableFromClusterSnapshotRequest:
    headers: GetRestoreTableFromClusterSnapshotHeaders = field()
    query_params: GetRestoreTableFromClusterSnapshotQueryParams = field()
    

@dataclass
class GetRestoreTableFromClusterSnapshotResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
