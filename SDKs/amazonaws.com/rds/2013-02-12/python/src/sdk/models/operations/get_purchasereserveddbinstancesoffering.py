from dataclasses import dataclass, field
from typing import Enum,Optional

class GetPurchaseReservedDbInstancesOfferingActionEnum(str, Enum):
    PURCHASE_RESERVED_DB_INSTANCES_OFFERING = "PurchaseReservedDBInstancesOffering"

class GetPurchaseReservedDbInstancesOfferingVersionEnum(str, Enum):
    TWO_THOUSAND_AND_THIRTEEN_02_12 = "2013-02-12"


@dataclass
class GetPurchaseReservedDbInstancesOfferingQueryParams:
    action: GetPurchaseReservedDbInstancesOfferingActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    db_instance_count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'DBInstanceCount', 'style': 'form', 'explode': True }})
    reserved_db_instance_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ReservedDBInstanceId', 'style': 'form', 'explode': True }})
    reserved_db_instances_offering_id: str = field(default=None, metadata={'query_param': { 'field_name': 'ReservedDBInstancesOfferingId', 'style': 'form', 'explode': True }})
    version: GetPurchaseReservedDbInstancesOfferingVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

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
    query_params: GetPurchaseReservedDbInstancesOfferingQueryParams = field(default=None)
    headers: GetPurchaseReservedDbInstancesOfferingHeaders = field(default=None)
    

@dataclass
class GetPurchaseReservedDbInstancesOfferingResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
