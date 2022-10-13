import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://bigqueryreservation.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def bigqueryreservation_projects_locations_capacity_commitments_create(self, request: operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest) -> operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/capacityCommitments", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CapacityCommitment])
                res.capacity_commitment = out

        return res

    
    
    def bigqueryreservation_projects_locations_capacity_commitments_list(self, request: operations.BigqueryreservationProjectsLocationsCapacityCommitmentsListRequest) -> operations.BigqueryreservationProjectsLocationsCapacityCommitmentsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/capacityCommitments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BigqueryreservationProjectsLocationsCapacityCommitmentsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListCapacityCommitmentsResponse])
                res.list_capacity_commitments_response = out

        return res

    
    
    def bigqueryreservation_projects_locations_capacity_commitments_merge(self, request: operations.BigqueryreservationProjectsLocationsCapacityCommitmentsMergeRequest) -> operations.BigqueryreservationProjectsLocationsCapacityCommitmentsMergeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/capacityCommitments:merge", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigqueryreservationProjectsLocationsCapacityCommitmentsMergeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CapacityCommitment])
                res.capacity_commitment = out

        return res

    
    
    def bigqueryreservation_projects_locations_capacity_commitments_split(self, request: operations.BigqueryreservationProjectsLocationsCapacityCommitmentsSplitRequest) -> operations.BigqueryreservationProjectsLocationsCapacityCommitmentsSplitResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}:split", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigqueryreservationProjectsLocationsCapacityCommitmentsSplitResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SplitCapacityCommitmentResponse])
                res.split_capacity_commitment_response = out

        return res

    
    
    def bigqueryreservation_projects_locations_reservations_assignments_create(self, request: operations.BigqueryreservationProjectsLocationsReservationsAssignmentsCreateRequest) -> operations.BigqueryreservationProjectsLocationsReservationsAssignmentsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/assignments", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigqueryreservationProjectsLocationsReservationsAssignmentsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Assignment])
                res.assignment = out

        return res

    
    
    def bigqueryreservation_projects_locations_reservations_assignments_delete(self, request: operations.BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteRequest) -> operations.BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    
    def bigqueryreservation_projects_locations_reservations_assignments_list(self, request: operations.BigqueryreservationProjectsLocationsReservationsAssignmentsListRequest) -> operations.BigqueryreservationProjectsLocationsReservationsAssignmentsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/assignments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BigqueryreservationProjectsLocationsReservationsAssignmentsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAssignmentsResponse])
                res.list_assignments_response = out

        return res

    
    
    def bigqueryreservation_projects_locations_reservations_assignments_move(self, request: operations.BigqueryreservationProjectsLocationsReservationsAssignmentsMoveRequest) -> operations.BigqueryreservationProjectsLocationsReservationsAssignmentsMoveResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}:move", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigqueryreservationProjectsLocationsReservationsAssignmentsMoveResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Assignment])
                res.assignment = out

        return res

    
    
    def bigqueryreservation_projects_locations_reservations_assignments_patch(self, request: operations.BigqueryreservationProjectsLocationsReservationsAssignmentsPatchRequest) -> operations.BigqueryreservationProjectsLocationsReservationsAssignmentsPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigqueryreservationProjectsLocationsReservationsAssignmentsPatchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Assignment])
                res.assignment = out

        return res

    
    
    def bigqueryreservation_projects_locations_reservations_create(self, request: operations.BigqueryreservationProjectsLocationsReservationsCreateRequest) -> operations.BigqueryreservationProjectsLocationsReservationsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/reservations", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigqueryreservationProjectsLocationsReservationsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Reservation])
                res.reservation = out

        return res

    
    
    def bigqueryreservation_projects_locations_reservations_get(self, request: operations.BigqueryreservationProjectsLocationsReservationsGetRequest) -> operations.BigqueryreservationProjectsLocationsReservationsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BigqueryreservationProjectsLocationsReservationsGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Reservation])
                res.reservation = out

        return res

    
    
    def bigqueryreservation_projects_locations_reservations_list(self, request: operations.BigqueryreservationProjectsLocationsReservationsListRequest) -> operations.BigqueryreservationProjectsLocationsReservationsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/reservations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BigqueryreservationProjectsLocationsReservationsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListReservationsResponse])
                res.list_reservations_response = out

        return res

    
    
    def bigqueryreservation_projects_locations_search_all_assignments(self, request: operations.BigqueryreservationProjectsLocationsSearchAllAssignmentsRequest) -> operations.BigqueryreservationProjectsLocationsSearchAllAssignmentsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}:searchAllAssignments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BigqueryreservationProjectsLocationsSearchAllAssignmentsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchAllAssignmentsResponse])
                res.search_all_assignments_response = out

        return res

    
    
    def bigqueryreservation_projects_locations_search_assignments(self, request: operations.BigqueryreservationProjectsLocationsSearchAssignmentsRequest) -> operations.BigqueryreservationProjectsLocationsSearchAssignmentsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}:searchAssignments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BigqueryreservationProjectsLocationsSearchAssignmentsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchAssignmentsResponse])
                res.search_assignments_response = out

        return res

    