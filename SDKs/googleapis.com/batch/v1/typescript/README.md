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
import { BatchProjectsLocationsJobsCreateRequest, BatchProjectsLocationsJobsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: BatchProjectsLocationsJobsCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "neque",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "alias",
    alt: "json",
    callback: "et",
    fields: "amet",
    jobId: "magnam",
    key: "nihil",
    oauthToken: "ipsa",
    prettyPrint: true,
    quotaUser: "laboriosam",
    requestId: "placeat",
    uploadType: "aliquid",
    uploadProtocol: "iusto",
  },
  request: {
    allocationPolicy: {
      instances: [
        {
          installGpuDrivers: false,
          instanceTemplate: "nisi",
          policy: {
            accelerators: [
              {
                count: "quis",
                installGpuDrivers: true,
                type: "suscipit",
              },
              {
                count: "eveniet",
                installGpuDrivers: true,
                type: "quasi",
              },
            ],
            disks: [
              {
                deviceName: "non",
                existingDisk: "atque",
                newDisk: {
                  diskInterface: "sint",
                  image: "rem",
                  sizeGb: "excepturi",
                  snapshot: "quisquam",
                  type: "nulla",
                },
              },
              {
                deviceName: "enim",
                existingDisk: "repellat",
                newDisk: {
                  diskInterface: "nisi",
                  image: "esse",
                  sizeGb: "non",
                  snapshot: "minima",
                  type: "aperiam",
                },
              },
            ],
            machineType: "molestiae",
            minCpuPlatform: "provident",
            provisioningModel: "PREEMPTIBLE",
          },
        },
        {
          installGpuDrivers: true,
          instanceTemplate: "eveniet",
          policy: {
            accelerators: [
              {
                count: "porro",
                installGpuDrivers: false,
                type: "consequuntur",
              },
              {
                count: "sit",
                installGpuDrivers: false,
                type: "vel",
              },
            ],
            disks: [
              {
                deviceName: "itaque",
                existingDisk: "similique",
                newDisk: {
                  diskInterface: "ut",
                  image: "rerum",
                  sizeGb: "iusto",
                  snapshot: "adipisci",
                  type: "repellendus",
                },
              },
            ],
            machineType: "et",
            minCpuPlatform: "et",
            provisioningModel: "PREEMPTIBLE",
          },
        },
        {
          installGpuDrivers: true,
          instanceTemplate: "blanditiis",
          policy: {
            accelerators: [
              {
                count: "quia",
                installGpuDrivers: true,
                type: "necessitatibus",
              },
              {
                count: "nostrum",
                installGpuDrivers: false,
                type: "repudiandae",
              },
            ],
            disks: [
              {
                deviceName: "cumque",
                existingDisk: "ipsa",
                newDisk: {
                  diskInterface: "enim",
                  image: "animi",
                  sizeGb: "iusto",
                  snapshot: "veritatis",
                  type: "ea",
                },
              },
              {
                deviceName: "rerum",
                existingDisk: "minus",
                newDisk: {
                  diskInterface: "ab",
                  image: "assumenda",
                  sizeGb: "fuga",
                  snapshot: "et",
                  type: "quam",
                },
              },
            ],
            machineType: "est",
            minCpuPlatform: "perspiciatis",
            provisioningModel: "STANDARD",
          },
        },
      ],
      labels: {
        "aut": "quas",
        "est": "iusto",
      },
      location: {
        allowedLocations: [
          "molestias",
        ],
      },
      network: {
        networkInterfaces: [
          {
            network: "ab",
            noExternalIpAddress: true,
            subnetwork: "fugiat",
          },
          {
            network: "consectetur",
            noExternalIpAddress: false,
            subnetwork: "quaerat",
          },
          {
            network: "ab",
            noExternalIpAddress: true,
            subnetwork: "ullam",
          },
        ],
      },
      serviceAccount: {
        email: "dignissimos",
      },
    },
    labels: {
      "quas": "dolor",
    },
    logsPolicy: {
      destination: "PATH",
      logsPath: "ducimus",
    },
    notifications: [
      {
        message: {
          newJobState: "RUNNING",
          newTaskState: "PENDING",
          type: "TYPE_UNSPECIFIED",
        },
        pubsubTopic: "optio",
      },
      {
        message: {
          newJobState: "SCHEDULED",
          newTaskState: "FAILED",
          type: "TYPE_UNSPECIFIED",
        },
        pubsubTopic: "illo",
      },
      {
        message: {
          newJobState: "DELETION_IN_PROGRESS",
          newTaskState: "FAILED",
          type: "JOB_STATE_CHANGED",
        },
        pubsubTopic: "assumenda",
      },
    ],
    priority: "aspernatur",
    status: {
      runDuration: "in",
      state: "SCHEDULED",
      statusEvents: [
        {
          description: "quia",
          eventTime: "voluptatum",
          taskExecution: {
            exitCode: 3978957507316565666,
          },
          type: "sit",
        },
      ],
      taskGroups: {
        "ea": {
          counts: {
            "perferendis": "esse",
            "aut": "nihil",
            "ea": "doloremque",
          },
          instances: [
            {
              machineType: "iusto",
              provisioningModel: "PROVISIONING_MODEL_UNSPECIFIED",
              taskPack: "molestiae",
            },
            {
              machineType: "in",
              provisioningModel: "SPOT",
              taskPack: "sunt",
            },
            {
              machineType: "harum",
              provisioningModel: "SPOT",
              taskPack: "eos",
            },
          ],
        },
      },
    },
    taskGroups: [
      {
        parallelism: "aut",
        permissiveSsh: false,
        requireHostsFile: true,
        taskCount: "provident",
        taskCountPerNode: "aut",
        taskEnvironments: [
          {
            variables: {
              "sapiente": "et",
              "aut": "rerum",
            },
          },
          {
            variables: {
              "doloremque": "incidunt",
              "provident": "voluptas",
            },
          },
        ],
        taskSpec: {
          computeResource: {
            bootDiskMib: "assumenda",
            cpuMilli: "sunt",
            memoryMib: "nemo",
          },
          environment: {
            variables: {
              "quia": "voluptatem",
              "culpa": "illum",
              "mollitia": "ex",
            },
          },
          environments: {
            "molestiae": "dignissimos",
            "laudantium": "quo",
            "voluptatem": "totam",
          },
          lifecyclePolicies: [
            {
              action: "FAIL_TASK",
              actionCondition: {
                exitCodes: [
                  2867170436337082363,
                  7615081996316769988,
                ],
              },
            },
            {
              action: "RETRY_TASK",
              actionCondition: {
                exitCodes: [
                  2130911999686545789,
                ],
              },
            },
            {
              action: "FAIL_TASK",
              actionCondition: {
                exitCodes: [
                  3871201309715112538,
                ],
              },
            },
          ],
          maxRetryCount: 1677093497499828344,
          maxRunDuration: "enim",
          runnables: [
            {
              alwaysRun: false,
              background: false,
              barrier: {
                name: "recusandae",
              },
              container: {
                blockExternalNetwork: false,
                commands: [
                  "sunt",
                ],
                entrypoint: "ipsum",
                imageUri: "qui",
                options: "autem",
                password: "enim",
                username: "ab",
                volumes: [
                  "molestiae",
                  "accusantium",
                ],
              },
              environment: {
                variables: {
                  "sint": "quo",
                },
              },
              ignoreExitStatus: true,
              script: {
                path: "tenetur",
                text: "assumenda",
              },
              timeout: "voluptatum",
            },
            {
              alwaysRun: true,
              background: false,
              barrier: {
                name: "maxime",
              },
              container: {
                blockExternalNetwork: false,
                commands: [
                  "ea",
                  "temporibus",
                  "perspiciatis",
                ],
                entrypoint: "natus",
                imageUri: "saepe",
                options: "natus",
                password: "fugit",
                username: "qui",
                volumes: [
                  "et",
                  "ullam",
                ],
              },
              environment: {
                variables: {
                  "porro": "sit",
                  "modi": "est",
                },
              },
              ignoreExitStatus: false,
              script: {
                path: "cum",
                text: "dolorem",
              },
              timeout: "qui",
            },
          ],
          volumes: [
            {
              deviceName: "ex",
              gcs: {
                remotePath: "fugiat",
              },
              mountOptions: [
                "soluta",
                "exercitationem",
                "repudiandae",
              ],
              mountPath: "possimus",
              nfs: {
                remotePath: "rerum",
                server: "iusto",
              },
            },
            {
              deviceName: "architecto",
              gcs: {
                remotePath: "eaque",
              },
              mountOptions: [
                "vel",
              ],
              mountPath: "ullam",
              nfs: {
                remotePath: "ut",
                server: "numquam",
              },
            },
          ],
        },
      },
    ],
  },
};

sdk.projects.batchProjectsLocationsJobsCreate(req).then((res: BatchProjectsLocationsJobsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `batchProjectsLocationsJobsCreate` - Create a Job.
* `batchProjectsLocationsJobsList` - List all Jobs for a project within a region.
* `batchProjectsLocationsJobsTaskGroupsTasksList` - List Tasks associated with a job.
* `batchProjectsLocationsList` - Lists information about the supported locations for this service.
* `batchProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `batchProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `batchProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `batchProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `batchProjectsLocationsStateReport` - Report agent's state, e.g. agent status and tasks information
* `batchProjectsLocationsTasksGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `batchProjectsLocationsTasksSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `batchProjectsLocationsTasksTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
