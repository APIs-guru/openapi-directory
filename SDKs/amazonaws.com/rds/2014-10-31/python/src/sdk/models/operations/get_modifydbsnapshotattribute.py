from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum

class GetModifyDbSnapshotAttributeActionEnum(str, Enum):
    MODIFY_DB_SNAPSHOT_ATTRIBUTE = "ModifyDBSnapshotAttribute"

class GetModifyDbSnapshotAttributeVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclass
class GetModifyDbSnapshotAttributeQueryParams:
    action: GetModifyDbSnapshotAttributeActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    attribute_name: str = field(metadata={'query_param': { 'field_name': 'AttributeName', 'style': 'form', 'explode': True }})
    db_snapshot_identifier: str = field(metadata={'query_param': { 'field_name': 'DBSnapshotIdentifier', 'style': 'form', 'explode': True }})
    version: GetModifyDbSnapshotAttributeVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    values_to_add: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'ValuesToAdd', 'style': 'form', 'explode': True }})
    values_to_remove: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'ValuesToRemove', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyDbSnapshotAttributeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetModifyDbSnapshotAttributeRequest:
    headers: GetModifyDbSnapshotAttributeHeaders = field()
    query_params: GetModifyDbSnapshotAttributeQueryParams = field()
    

@dataclass
class GetModifyDbSnapshotAttributeResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
