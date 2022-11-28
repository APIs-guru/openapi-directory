import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Projects:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def bigqueryreservation_projects_locations_capacity_commitments_create(self, request: operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest) -> operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateResponse:
        r"""Creates a new capacity commitment resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/capacityCommitments", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CapacityCommitment])
                res.capacity_commitment = out

        return res

    
    def bigqueryreservation_projects_locations_capacity_commitments_list(self, request: operations.BigqueryreservationProjectsLocationsCapacityCommitmentsListRequest) -> operations.BigqueryreservationProjectsLocationsCapacityCommitmentsListResponse:
        r"""Lists all the capacity commitments for the admin project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/capacityCommitments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BigqueryreservationProjectsLocationsCapacityCommitmentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListCapacityCommitmentsResponse])
                res.list_capacity_commitments_response = out

        return res

    
    def bigqueryreservation_projects_locations_capacity_commitments_merge(self, request: operations.BigqueryreservationProjectsLocationsCapacityCommitmentsMergeRequest) -> operations.BigqueryreservationProjectsLocationsCapacityCommitmentsMergeResponse:
        r"""Merges capacity commitments of the same plan into a single commitment. The resulting capacity commitment has the greater commitment_end_time out of the to-be-merged capacity commitments. Attempting to merge capacity commitments of different plan will fail with the error code `google.rpc.Code.FAILED_PRECONDITION`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/capacityCommitments:merge", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigqueryreservationProjectsLocationsCapacityCommitmentsMergeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CapacityCommitment])
                res.capacity_commitment = out

        return res

    
    def bigqueryreservation_projects_locations_capacity_commitments_split(self, request: operations.BigqueryreservationProjectsLocationsCapacityCommitmentsSplitRequest) -> operations.BigqueryreservationProjectsLocationsCapacityCommitmentsSplitResponse:
        r"""Splits capacity commitment to two commitments of the same plan and `commitment_end_time`. A common use case is to enable downgrading commitments. For example, in order to downgrade from 10000 slots to 8000, you might split a 10000 capacity commitment into commitments of 2000 and 8000. Then, you delete the first one after the commitment end time passes.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:split", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigqueryreservationProjectsLocationsCapacityCommitmentsSplitResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SplitCapacityCommitmentResponse])
                res.split_capacity_commitment_response = out

        return res

    
    def bigqueryreservation_projects_locations_reservations_assignments_create(self, request: operations.BigqueryreservationProjectsLocationsReservationsAssignmentsCreateRequest) -> operations.BigqueryreservationProjectsLocationsReservationsAssignmentsCreateResponse:
        r"""Creates an assignment object which allows the given project to submit jobs of a certain type using slots from the specified reservation. Currently a resource (project, folder, organization) can only have one assignment per each (job_type, location) combination, and that reservation will be used for all jobs of the matching type. Different assignments can be created on different levels of the projects, folders or organization hierarchy. During query execution, the assignment is looked up at the project, folder and organization levels in that order. The first assignment found is applied to the query. When creating assignments, it does not matter if other assignments exist at higher levels. Example: * The organization `organizationA` contains two projects, `project1` and `project2`. * Assignments for all three entities (`organizationA`, `project1`, and `project2`) could all be created and mapped to the same or different reservations. \"None\" assignments represent an absence of the assignment. Projects assigned to None use on-demand pricing. To create a \"None\" assignment, use \"none\" as a reservation_id in the parent. Example parent: `projects/myproject/locations/US/reservations/none`. Returns `google.rpc.Code.PERMISSION_DENIED` if user does not have 'bigquery.admin' permissions on the project using the reservation and the project that owns this reservation. Returns `google.rpc.Code.INVALID_ARGUMENT` when location of the assignment does not match location of the reservation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/assignments", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigqueryreservationProjectsLocationsReservationsAssignmentsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Assignment])
                res.assignment = out

        return res

    
    def bigqueryreservation_projects_locations_reservations_assignments_delete(self, request: operations.BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteRequest) -> operations.BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteResponse:
        r"""Deletes a assignment. No expansion will happen. Example: * Organization `organizationA` contains two projects, `project1` and `project2`. * Reservation `res1` exists and was created previously. * CreateAssignment was used previously to define the following associations between entities and reservations: `` and `` In this example, deletion of the `` assignment won't affect the other assignment ``. After said deletion, queries from `project1` will still use `res1` while queries from `project2` will switch to use on-demand mode.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def bigqueryreservation_projects_locations_reservations_assignments_list(self, request: operations.BigqueryreservationProjectsLocationsReservationsAssignmentsListRequest) -> operations.BigqueryreservationProjectsLocationsReservationsAssignmentsListResponse:
        r"""Lists assignments. Only explicitly created assignments will be returned. Example: * Organization `organizationA` contains two projects, `project1` and `project2`. * Reservation `res1` exists and was created previously. * CreateAssignment was used previously to define the following associations between entities and reservations: `` and `` In this example, ListAssignments will just return the above two assignments for reservation `res1`, and no expansion/merge will happen. The wildcard \"-\" can be used for reservations in the request. In that case all assignments belongs to the specified project and location will be listed. **Note** \"-\" cannot be used for projects nor locations.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/assignments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BigqueryreservationProjectsLocationsReservationsAssignmentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAssignmentsResponse])
                res.list_assignments_response = out

        return res

    
    def bigqueryreservation_projects_locations_reservations_assignments_move(self, request: operations.BigqueryreservationProjectsLocationsReservationsAssignmentsMoveRequest) -> operations.BigqueryreservationProjectsLocationsReservationsAssignmentsMoveResponse:
        r"""Moves an assignment under a new reservation. This differs from removing an existing assignment and recreating a new one by providing a transactional change that ensures an assignee always has an associated reservation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:move", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigqueryreservationProjectsLocationsReservationsAssignmentsMoveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Assignment])
                res.assignment = out

        return res

    
    def bigqueryreservation_projects_locations_reservations_assignments_patch(self, request: operations.BigqueryreservationProjectsLocationsReservationsAssignmentsPatchRequest) -> operations.BigqueryreservationProjectsLocationsReservationsAssignmentsPatchResponse:
        r"""Updates an existing assignment. Only the `priority` field can be updated.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigqueryreservationProjectsLocationsReservationsAssignmentsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Assignment])
                res.assignment = out

        return res

    
    def bigqueryreservation_projects_locations_reservations_create(self, request: operations.BigqueryreservationProjectsLocationsReservationsCreateRequest) -> operations.BigqueryreservationProjectsLocationsReservationsCreateResponse:
        r"""Creates a new reservation resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/reservations", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigqueryreservationProjectsLocationsReservationsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Reservation])
                res.reservation = out

        return res

    
    def bigqueryreservation_projects_locations_reservations_get(self, request: operations.BigqueryreservationProjectsLocationsReservationsGetRequest) -> operations.BigqueryreservationProjectsLocationsReservationsGetResponse:
        r"""Returns information about the reservation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BigqueryreservationProjectsLocationsReservationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Reservation])
                res.reservation = out

        return res

    
    def bigqueryreservation_projects_locations_reservations_list(self, request: operations.BigqueryreservationProjectsLocationsReservationsListRequest) -> operations.BigqueryreservationProjectsLocationsReservationsListResponse:
        r"""Lists all the reservations for the project in the specified location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/reservations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BigqueryreservationProjectsLocationsReservationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListReservationsResponse])
                res.list_reservations_response = out

        return res

    
    def bigqueryreservation_projects_locations_search_all_assignments(self, request: operations.BigqueryreservationProjectsLocationsSearchAllAssignmentsRequest) -> operations.BigqueryreservationProjectsLocationsSearchAllAssignmentsResponse:
        r"""Looks up assignments for a specified resource for a particular region. If the request is about a project: 1. Assignments created on the project will be returned if they exist. 2. Otherwise assignments created on the closest ancestor will be returned. 3. Assignments for different JobTypes will all be returned. The same logic applies if the request is about a folder. If the request is about an organization, then assignments created on the organization will be returned (organization doesn't have ancestors). Comparing to ListAssignments, there are some behavior differences: 1. permission on the assignee will be verified in this API. 2. Hierarchy lookup (project->folder->organization) happens in this API. 3. Parent here is `projects/*/locations/*`, instead of `projects/*/locations/*reservations/*`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}:searchAllAssignments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BigqueryreservationProjectsLocationsSearchAllAssignmentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchAllAssignmentsResponse])
                res.search_all_assignments_response = out

        return res

    
    def bigqueryreservation_projects_locations_search_assignments(self, request: operations.BigqueryreservationProjectsLocationsSearchAssignmentsRequest) -> operations.BigqueryreservationProjectsLocationsSearchAssignmentsResponse:
        r"""Deprecated: Looks up assignments for a specified resource for a particular region. If the request is about a project: 1. Assignments created on the project will be returned if they exist. 2. Otherwise assignments created on the closest ancestor will be returned. 3. Assignments for different JobTypes will all be returned. The same logic applies if the request is about a folder. If the request is about an organization, then assignments created on the organization will be returned (organization doesn't have ancestors). Comparing to ListAssignments, there are some behavior differences: 1. permission on the assignee will be verified in this API. 2. Hierarchy lookup (project->folder->organization) happens in this API. 3. Parent here is `projects/*/locations/*`, instead of `projects/*/locations/*reservations/*`. **Note** \"-\" cannot be used for projects nor locations.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}:searchAssignments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BigqueryreservationProjectsLocationsSearchAssignmentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchAssignmentsResponse])
                res.search_assignments_response = out

        return res

    