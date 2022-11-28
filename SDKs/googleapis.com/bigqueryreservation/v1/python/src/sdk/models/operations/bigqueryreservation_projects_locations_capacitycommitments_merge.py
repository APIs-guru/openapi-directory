from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class BigqueryreservationProjectsLocationsCapacityCommitmentsMergePathParams:
    parent: str = field(metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    

@dataclass
class BigqueryreservationProjectsLocationsCapacityCommitmentsMergeQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurity:
    option1: Optional[BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class BigqueryreservationProjectsLocationsCapacityCommitmentsMergeRequest:
    path_params: BigqueryreservationProjectsLocationsCapacityCommitmentsMergePathParams = field()
    query_params: BigqueryreservationProjectsLocationsCapacityCommitmentsMergeQueryParams = field()
    security: BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurity = field()
    request: Optional[shared.MergeCapacityCommitmentsRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BigqueryreservationProjectsLocationsCapacityCommitmentsMergeResponse:
    content_type: str = field()
    status_code: int = field()
    capacity_commitment: Optional[shared.CapacityCommitment] = field(default=None)
    
