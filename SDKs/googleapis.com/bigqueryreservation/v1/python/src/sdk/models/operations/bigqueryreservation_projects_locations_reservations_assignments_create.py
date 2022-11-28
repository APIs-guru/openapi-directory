from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class BigqueryreservationProjectsLocationsReservationsAssignmentsCreatePathParams:
    parent: str = field(metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    

@dataclass
class BigqueryreservationProjectsLocationsReservationsAssignmentsCreateQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    assignment_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'assignmentId', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class BigqueryreservationProjectsLocationsReservationsAssignmentsCreateSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigqueryreservationProjectsLocationsReservationsAssignmentsCreateSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigqueryreservationProjectsLocationsReservationsAssignmentsCreateSecurity:
    option1: Optional[BigqueryreservationProjectsLocationsReservationsAssignmentsCreateSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[BigqueryreservationProjectsLocationsReservationsAssignmentsCreateSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class BigqueryreservationProjectsLocationsReservationsAssignmentsCreateRequest:
    path_params: BigqueryreservationProjectsLocationsReservationsAssignmentsCreatePathParams = field()
    query_params: BigqueryreservationProjectsLocationsReservationsAssignmentsCreateQueryParams = field()
    security: BigqueryreservationProjectsLocationsReservationsAssignmentsCreateSecurity = field()
    request: Optional[shared.AssignmentInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BigqueryreservationProjectsLocationsReservationsAssignmentsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    assignment: Optional[shared.Assignment] = field(default=None)
    
