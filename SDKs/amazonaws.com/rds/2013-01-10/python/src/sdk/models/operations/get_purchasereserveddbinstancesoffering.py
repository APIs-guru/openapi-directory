from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetPurchaseReservedDbInstancesOfferingActionEnum(str, Enum):
    PURCHASE_RESERVED_DB_INSTANCES_OFFERING = "PurchaseReservedDBInstancesOffering"

class GetPurchaseReservedDbInstancesOfferingVersionEnum(str, Enum):
    TWO_THOUSAND_AND_THIRTEEN_01_10 = "2013-01-10"


@dataclass
class GetPurchaseReservedDbInstancesOfferingQueryParams:
    action: GetPurchaseReservedDbInstancesOfferingActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    reserved_db_instances_offering_id: str = field(metadata={'query_param': { 'field_name': 'ReservedDBInstancesOfferingId', 'style': 'form', 'explode': True }})
    version: GetPurchaseReservedDbInstancesOfferingVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    db_instance_count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'DBInstanceCount', 'style': 'form', 'explode': True }})
    reserved_db_instance_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ReservedDBInstanceId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPurchaseReservedDbInstancesOfferingHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPurchaseReservedDbInstancesOfferingRequest:
    headers: GetPurchaseReservedDbInstancesOfferingHeaders = field()
    query_params: GetPurchaseReservedDbInstancesOfferingQueryParams = field()
    

@dataclass
class GetPurchaseReservedDbInstancesOfferingResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
