import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * bigqueryreservationProjectsLocationsCapacityCommitmentsCreate - Creates a new capacity commitment resource.
    **/
    bigqueryreservationProjectsLocationsCapacityCommitmentsCreate(req: operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateResponse>;
    /**
     * bigqueryreservationProjectsLocationsCapacityCommitmentsList - Lists all the capacity commitments for the admin project.
    **/
    bigqueryreservationProjectsLocationsCapacityCommitmentsList(req: operations.BigqueryreservationProjectsLocationsCapacityCommitmentsListRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryreservationProjectsLocationsCapacityCommitmentsListResponse>;
    /**
     * bigqueryreservationProjectsLocationsCapacityCommitmentsMerge - Merges capacity commitments of the same plan into a single commitment. The resulting capacity commitment has the greater commitment_end_time out of the to-be-merged capacity commitments. Attempting to merge capacity commitments of different plan will fail with the error code `google.rpc.Code.FAILED_PRECONDITION`.
    **/
    bigqueryreservationProjectsLocationsCapacityCommitmentsMerge(req: operations.BigqueryreservationProjectsLocationsCapacityCommitmentsMergeRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryreservationProjectsLocationsCapacityCommitmentsMergeResponse>;
    /**
     * bigqueryreservationProjectsLocationsCapacityCommitmentsSplit - Splits capacity commitment to two commitments of the same plan and `commitment_end_time`. A common use case is to enable downgrading commitments. For example, in order to downgrade from 10000 slots to 8000, you might split a 10000 capacity commitment into commitments of 2000 and 8000. Then, you delete the first one after the commitment end time passes.
    **/
    bigqueryreservationProjectsLocationsCapacityCommitmentsSplit(req: operations.BigqueryreservationProjectsLocationsCapacityCommitmentsSplitRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryreservationProjectsLocationsCapacityCommitmentsSplitResponse>;
    /**
     * bigqueryreservationProjectsLocationsReservationsAssignmentsCreate - Creates an assignment object which allows the given project to submit jobs of a certain type using slots from the specified reservation. Currently a resource (project, folder, organization) can only have one assignment per each (job_type, location) combination, and that reservation will be used for all jobs of the matching type. Different assignments can be created on different levels of the projects, folders or organization hierarchy. During query execution, the assignment is looked up at the project, folder and organization levels in that order. The first assignment found is applied to the query. When creating assignments, it does not matter if other assignments exist at higher levels. Example: * The organization `organizationA` contains two projects, `project1` and `project2`. * Assignments for all three entities (`organizationA`, `project1`, and `project2`) could all be created and mapped to the same or different reservations. "None" assignments represent an absence of the assignment. Projects assigned to None use on-demand pricing. To create a "None" assignment, use "none" as a reservation_id in the parent. Example parent: `projects/myproject/locations/US/reservations/none`. Returns `google.rpc.Code.PERMISSION_DENIED` if user does not have 'bigquery.admin' permissions on the project using the reservation and the project that owns this reservation. Returns `google.rpc.Code.INVALID_ARGUMENT` when location of the assignment does not match location of the reservation.
    **/
    bigqueryreservationProjectsLocationsReservationsAssignmentsCreate(req: operations.BigqueryreservationProjectsLocationsReservationsAssignmentsCreateRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryreservationProjectsLocationsReservationsAssignmentsCreateResponse>;
    /**
     * bigqueryreservationProjectsLocationsReservationsAssignmentsDelete - Deletes a assignment. No expansion will happen. Example: * Organization `organizationA` contains two projects, `project1` and `project2`. * Reservation `res1` exists and was created previously. * CreateAssignment was used previously to define the following associations between entities and reservations: `` and `` In this example, deletion of the `` assignment won't affect the other assignment ``. After said deletion, queries from `project1` will still use `res1` while queries from `project2` will switch to use on-demand mode.
    **/
    bigqueryreservationProjectsLocationsReservationsAssignmentsDelete(req: operations.BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteResponse>;
    /**
     * bigqueryreservationProjectsLocationsReservationsAssignmentsList - Lists assignments. Only explicitly created assignments will be returned. Example: * Organization `organizationA` contains two projects, `project1` and `project2`. * Reservation `res1` exists and was created previously. * CreateAssignment was used previously to define the following associations between entities and reservations: `` and `` In this example, ListAssignments will just return the above two assignments for reservation `res1`, and no expansion/merge will happen. The wildcard "-" can be used for reservations in the request. In that case all assignments belongs to the specified project and location will be listed. **Note** "-" cannot be used for projects nor locations.
    **/
    bigqueryreservationProjectsLocationsReservationsAssignmentsList(req: operations.BigqueryreservationProjectsLocationsReservationsAssignmentsListRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryreservationProjectsLocationsReservationsAssignmentsListResponse>;
    /**
     * bigqueryreservationProjectsLocationsReservationsAssignmentsMove - Moves an assignment under a new reservation. This differs from removing an existing assignment and recreating a new one by providing a transactional change that ensures an assignee always has an associated reservation.
    **/
    bigqueryreservationProjectsLocationsReservationsAssignmentsMove(req: operations.BigqueryreservationProjectsLocationsReservationsAssignmentsMoveRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryreservationProjectsLocationsReservationsAssignmentsMoveResponse>;
    /**
     * bigqueryreservationProjectsLocationsReservationsAssignmentsPatch - Updates an existing assignment. Only the `priority` field can be updated.
    **/
    bigqueryreservationProjectsLocationsReservationsAssignmentsPatch(req: operations.BigqueryreservationProjectsLocationsReservationsAssignmentsPatchRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryreservationProjectsLocationsReservationsAssignmentsPatchResponse>;
    /**
     * bigqueryreservationProjectsLocationsReservationsCreate - Creates a new reservation resource.
    **/
    bigqueryreservationProjectsLocationsReservationsCreate(req: operations.BigqueryreservationProjectsLocationsReservationsCreateRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryreservationProjectsLocationsReservationsCreateResponse>;
    /**
     * bigqueryreservationProjectsLocationsReservationsGet - Returns information about the reservation.
    **/
    bigqueryreservationProjectsLocationsReservationsGet(req: operations.BigqueryreservationProjectsLocationsReservationsGetRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryreservationProjectsLocationsReservationsGetResponse>;
    /**
     * bigqueryreservationProjectsLocationsReservationsList - Lists all the reservations for the project in the specified location.
    **/
    bigqueryreservationProjectsLocationsReservationsList(req: operations.BigqueryreservationProjectsLocationsReservationsListRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryreservationProjectsLocationsReservationsListResponse>;
    /**
     * bigqueryreservationProjectsLocationsSearchAllAssignments - Looks up assignments for a specified resource for a particular region. If the request is about a project: 1. Assignments created on the project will be returned if they exist. 2. Otherwise assignments created on the closest ancestor will be returned. 3. Assignments for different JobTypes will all be returned. The same logic applies if the request is about a folder. If the request is about an organization, then assignments created on the organization will be returned (organization doesn't have ancestors). Comparing to ListAssignments, there are some behavior differences: 1. permission on the assignee will be verified in this API. 2. Hierarchy lookup (project->folder->organization) happens in this API. 3. Parent here is `projects/* /locations/*`, instead of `projects/* /locations/*reservations/*`.
    **/
    bigqueryreservationProjectsLocationsSearchAllAssignments(req: operations.BigqueryreservationProjectsLocationsSearchAllAssignmentsRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryreservationProjectsLocationsSearchAllAssignmentsResponse>;
    /**
     * bigqueryreservationProjectsLocationsSearchAssignments - Deprecated: Looks up assignments for a specified resource for a particular region. If the request is about a project: 1. Assignments created on the project will be returned if they exist. 2. Otherwise assignments created on the closest ancestor will be returned. 3. Assignments for different JobTypes will all be returned. The same logic applies if the request is about a folder. If the request is about an organization, then assignments created on the organization will be returned (organization doesn't have ancestors). Comparing to ListAssignments, there are some behavior differences: 1. permission on the assignee will be verified in this API. 2. Hierarchy lookup (project->folder->organization) happens in this API. 3. Parent here is `projects/* /locations/*`, instead of `projects/* /locations/*reservations/*`. **Note** "-" cannot be used for projects nor locations.
    **/
    bigqueryreservationProjectsLocationsSearchAssignments(req: operations.BigqueryreservationProjectsLocationsSearchAssignmentsRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryreservationProjectsLocationsSearchAssignmentsResponse>;
}
