# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest, BigqueryreservationProjectsLocationsCapacityCommitmentsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest = {
  security: {
    option1: {
      oauth2: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      }
      oauth2c: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      }
    },
  },
  pathParams: {
    parent: "facilis",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "eligendi",
    alt: "json",
    callback: "non",
    capacityCommitmentId: "itaque",
    enforceSingleAdminProjectPerOrg: true,
    fields: "optio",
    key: "eligendi",
    oauthToken: "in",
    prettyPrint: true,
    quotaUser: "repellendus",
    uploadType: "amet",
    uploadProtocol: "consequatur",
  },
  request: {
    failureStatus: {
      code: 3656480505494023641,
      details: [
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
      message: "aspernatur",
    },
    multiRegionAuxiliary: false,
    plan: "ANNUAL",
    renewalPlan: "MONTHLY",
    slotCount: "quo",
  },
};

sdk.projects.bigqueryreservationProjectsLocationsCapacityCommitmentsCreate(req).then((res: BigqueryreservationProjectsLocationsCapacityCommitmentsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `bigqueryreservationProjectsLocationsCapacityCommitmentsCreate` - Creates a new capacity commitment resource.
* `bigqueryreservationProjectsLocationsCapacityCommitmentsList` - Lists all the capacity commitments for the admin project.
* `bigqueryreservationProjectsLocationsCapacityCommitmentsMerge` - Merges capacity commitments of the same plan into a single commitment. The resulting capacity commitment has the greater commitment_end_time out of the to-be-merged capacity commitments. Attempting to merge capacity commitments of different plan will fail with the error code `google.rpc.Code.FAILED_PRECONDITION`.
* `bigqueryreservationProjectsLocationsCapacityCommitmentsSplit` - Splits capacity commitment to two commitments of the same plan and `commitment_end_time`. A common use case is to enable downgrading commitments. For example, in order to downgrade from 10000 slots to 8000, you might split a 10000 capacity commitment into commitments of 2000 and 8000. Then, you delete the first one after the commitment end time passes.
* `bigqueryreservationProjectsLocationsReservationsAssignmentsCreate` - Creates an assignment object which allows the given project to submit jobs of a certain type using slots from the specified reservation. Currently a resource (project, folder, organization) can only have one assignment per each (job_type, location) combination, and that reservation will be used for all jobs of the matching type. Different assignments can be created on different levels of the projects, folders or organization hierarchy. During query execution, the assignment is looked up at the project, folder and organization levels in that order. The first assignment found is applied to the query. When creating assignments, it does not matter if other assignments exist at higher levels. Example: * The organization `organizationA` contains two projects, `project1` and `project2`. * Assignments for all three entities (`organizationA`, `project1`, and `project2`) could all be created and mapped to the same or different reservations. "None" assignments represent an absence of the assignment. Projects assigned to None use on-demand pricing. To create a "None" assignment, use "none" as a reservation_id in the parent. Example parent: `projects/myproject/locations/US/reservations/none`. Returns `google.rpc.Code.PERMISSION_DENIED` if user does not have 'bigquery.admin' permissions on the project using the reservation and the project that owns this reservation. Returns `google.rpc.Code.INVALID_ARGUMENT` when location of the assignment does not match location of the reservation.
* `bigqueryreservationProjectsLocationsReservationsAssignmentsDelete` - Deletes a assignment. No expansion will happen. Example: * Organization `organizationA` contains two projects, `project1` and `project2`. * Reservation `res1` exists and was created previously. * CreateAssignment was used previously to define the following associations between entities and reservations: `` and `` In this example, deletion of the `` assignment won't affect the other assignment ``. After said deletion, queries from `project1` will still use `res1` while queries from `project2` will switch to use on-demand mode.
* `bigqueryreservationProjectsLocationsReservationsAssignmentsList` - Lists assignments. Only explicitly created assignments will be returned. Example: * Organization `organizationA` contains two projects, `project1` and `project2`. * Reservation `res1` exists and was created previously. * CreateAssignment was used previously to define the following associations between entities and reservations: `` and `` In this example, ListAssignments will just return the above two assignments for reservation `res1`, and no expansion/merge will happen. The wildcard "-" can be used for reservations in the request. In that case all assignments belongs to the specified project and location will be listed. **Note** "-" cannot be used for projects nor locations.
* `bigqueryreservationProjectsLocationsReservationsAssignmentsMove` - Moves an assignment under a new reservation. This differs from removing an existing assignment and recreating a new one by providing a transactional change that ensures an assignee always has an associated reservation.
* `bigqueryreservationProjectsLocationsReservationsAssignmentsPatch` - Updates an existing assignment. Only the `priority` field can be updated.
* `bigqueryreservationProjectsLocationsReservationsCreate` - Creates a new reservation resource.
* `bigqueryreservationProjectsLocationsReservationsGet` - Returns information about the reservation.
* `bigqueryreservationProjectsLocationsReservationsList` - Lists all the reservations for the project in the specified location.
* `bigqueryreservationProjectsLocationsSearchAllAssignments` - Looks up assignments for a specified resource for a particular region. If the request is about a project: 1. Assignments created on the project will be returned if they exist. 2. Otherwise assignments created on the closest ancestor will be returned. 3. Assignments for different JobTypes will all be returned. The same logic applies if the request is about a folder. If the request is about an organization, then assignments created on the organization will be returned (organization doesn't have ancestors). Comparing to ListAssignments, there are some behavior differences: 1. permission on the assignee will be verified in this API. 2. Hierarchy lookup (project->folder->organization) happens in this API. 3. Parent here is `projects/*/locations/*`, instead of `projects/*/locations/*reservations/*`.
* `bigqueryreservationProjectsLocationsSearchAssignments` - Deprecated: Looks up assignments for a specified resource for a particular region. If the request is about a project: 1. Assignments created on the project will be returned if they exist. 2. Otherwise assignments created on the closest ancestor will be returned. 3. Assignments for different JobTypes will all be returned. The same logic applies if the request is about a folder. If the request is about an organization, then assignments created on the organization will be returned (organization doesn't have ancestors). Comparing to ListAssignments, there are some behavior differences: 1. permission on the assignee will be verified in this API. 2. Hierarchy lookup (project->folder->organization) happens in this API. 3. Parent here is `projects/*/locations/*`, instead of `projects/*/locations/*reservations/*`. **Note** "-" cannot be used for projects nor locations.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
