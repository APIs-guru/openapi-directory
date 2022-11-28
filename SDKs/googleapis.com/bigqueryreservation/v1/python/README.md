# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest(
    security=operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurity(
        option1=operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
        ),
    ),
    path_params=operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreatePathParams(
        parent="facilis",
    ),
    query_params=operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams(
        dollar_xgafv="1",
        access_token="eligendi",
        alt="json",
        callback="non",
        capacity_commitment_id="itaque",
        enforce_single_admin_project_per_org=True,
        fields="optio",
        key="eligendi",
        oauth_token="in",
        pretty_print=True,
        quota_user="repellendus",
        upload_type="amet",
        upload_protocol="consequatur",
    ),
    request=shared.CapacityCommitmentInput(
        failure_status=shared.Status(
            code=3656480505494023641,
            details=[
                {
                    "pariatur": "qui",
                    "aut": "est",
                    "nulla": "similique",
                },
                {
                    "ipsum": "porro",
                    "repellendus": "sit",
                    "necessitatibus": "sed",
                },
            ],
            message="aspernatur",
        ),
        multi_region_auxiliary=False,
        plan="ANNUAL",
        renewal_plan="MONTHLY",
        slot_count="quo",
    ),
)
    
res = s.projects.bigqueryreservation_projects_locations_capacity_commitments_create(req)

if res.capacity_commitment is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `bigqueryreservation_projects_locations_capacity_commitments_create` - Creates a new capacity commitment resource.
* `bigqueryreservation_projects_locations_capacity_commitments_list` - Lists all the capacity commitments for the admin project.
* `bigqueryreservation_projects_locations_capacity_commitments_merge` - Merges capacity commitments of the same plan into a single commitment. The resulting capacity commitment has the greater commitment_end_time out of the to-be-merged capacity commitments. Attempting to merge capacity commitments of different plan will fail with the error code `google.rpc.Code.FAILED_PRECONDITION`.
* `bigqueryreservation_projects_locations_capacity_commitments_split` - Splits capacity commitment to two commitments of the same plan and `commitment_end_time`. A common use case is to enable downgrading commitments. For example, in order to downgrade from 10000 slots to 8000, you might split a 10000 capacity commitment into commitments of 2000 and 8000. Then, you delete the first one after the commitment end time passes.
* `bigqueryreservation_projects_locations_reservations_assignments_create` - Creates an assignment object which allows the given project to submit jobs of a certain type using slots from the specified reservation. Currently a resource (project, folder, organization) can only have one assignment per each (job_type, location) combination, and that reservation will be used for all jobs of the matching type. Different assignments can be created on different levels of the projects, folders or organization hierarchy. During query execution, the assignment is looked up at the project, folder and organization levels in that order. The first assignment found is applied to the query. When creating assignments, it does not matter if other assignments exist at higher levels. Example: * The organization `organizationA` contains two projects, `project1` and `project2`. * Assignments for all three entities (`organizationA`, `project1`, and `project2`) could all be created and mapped to the same or different reservations. "None" assignments represent an absence of the assignment. Projects assigned to None use on-demand pricing. To create a "None" assignment, use "none" as a reservation_id in the parent. Example parent: `projects/myproject/locations/US/reservations/none`. Returns `google.rpc.Code.PERMISSION_DENIED` if user does not have 'bigquery.admin' permissions on the project using the reservation and the project that owns this reservation. Returns `google.rpc.Code.INVALID_ARGUMENT` when location of the assignment does not match location of the reservation.
* `bigqueryreservation_projects_locations_reservations_assignments_delete` - Deletes a assignment. No expansion will happen. Example: * Organization `organizationA` contains two projects, `project1` and `project2`. * Reservation `res1` exists and was created previously. * CreateAssignment was used previously to define the following associations between entities and reservations: `` and `` In this example, deletion of the `` assignment won't affect the other assignment ``. After said deletion, queries from `project1` will still use `res1` while queries from `project2` will switch to use on-demand mode.
* `bigqueryreservation_projects_locations_reservations_assignments_list` - Lists assignments. Only explicitly created assignments will be returned. Example: * Organization `organizationA` contains two projects, `project1` and `project2`. * Reservation `res1` exists and was created previously. * CreateAssignment was used previously to define the following associations between entities and reservations: `` and `` In this example, ListAssignments will just return the above two assignments for reservation `res1`, and no expansion/merge will happen. The wildcard "-" can be used for reservations in the request. In that case all assignments belongs to the specified project and location will be listed. **Note** "-" cannot be used for projects nor locations.
* `bigqueryreservation_projects_locations_reservations_assignments_move` - Moves an assignment under a new reservation. This differs from removing an existing assignment and recreating a new one by providing a transactional change that ensures an assignee always has an associated reservation.
* `bigqueryreservation_projects_locations_reservations_assignments_patch` - Updates an existing assignment. Only the `priority` field can be updated.
* `bigqueryreservation_projects_locations_reservations_create` - Creates a new reservation resource.
* `bigqueryreservation_projects_locations_reservations_get` - Returns information about the reservation.
* `bigqueryreservation_projects_locations_reservations_list` - Lists all the reservations for the project in the specified location.
* `bigqueryreservation_projects_locations_search_all_assignments` - Looks up assignments for a specified resource for a particular region. If the request is about a project: 1. Assignments created on the project will be returned if they exist. 2. Otherwise assignments created on the closest ancestor will be returned. 3. Assignments for different JobTypes will all be returned. The same logic applies if the request is about a folder. If the request is about an organization, then assignments created on the organization will be returned (organization doesn't have ancestors). Comparing to ListAssignments, there are some behavior differences: 1. permission on the assignee will be verified in this API. 2. Hierarchy lookup (project->folder->organization) happens in this API. 3. Parent here is `projects/*/locations/*`, instead of `projects/*/locations/*reservations/*`.
* `bigqueryreservation_projects_locations_search_assignments` - Deprecated: Looks up assignments for a specified resource for a particular region. If the request is about a project: 1. Assignments created on the project will be returned if they exist. 2. Otherwise assignments created on the closest ancestor will be returned. 3. Assignments for different JobTypes will all be returned. The same logic applies if the request is about a folder. If the request is about an organization, then assignments created on the organization will be returned (organization doesn't have ancestors). Comparing to ListAssignments, there are some behavior differences: 1. permission on the assignee will be verified in this API. 2. Hierarchy lookup (project->folder->organization) happens in this API. 3. Parent here is `projects/*/locations/*`, instead of `projects/*/locations/*reservations/*`. **Note** "-" cannot be used for projects nor locations.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
