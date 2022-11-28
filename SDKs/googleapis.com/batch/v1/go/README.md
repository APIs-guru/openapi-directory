# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.BatchProjectsLocationsJobsCreateRequest{
        Security: operations.BatchProjectsLocationsJobsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.BatchProjectsLocationsJobsCreatePathParams{
            Parent: "neque",
        },
        QueryParams: operations.BatchProjectsLocationsJobsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "alias",
            Alt: "json",
            Callback: "et",
            Fields: "amet",
            JobID: "magnam",
            Key: "nihil",
            OauthToken: "ipsa",
            PrettyPrint: true,
            QuotaUser: "laboriosam",
            RequestID: "placeat",
            UploadType: "aliquid",
            UploadProtocol: "iusto",
        },
        Request: &shared.JobInput{
            AllocationPolicy: &shared.AllocationPolicy{
                Instances: []shared.InstancePolicyOrTemplate{
                    shared.InstancePolicyOrTemplate{
                        InstallGpuDrivers: false,
                        InstanceTemplate: "nisi",
                        Policy: &shared.InstancePolicy{
                            Accelerators: []shared.Accelerator{
                                shared.Accelerator{
                                    Count: "quis",
                                    InstallGpuDrivers: true,
                                    Type: "suscipit",
                                },
                                shared.Accelerator{
                                    Count: "eveniet",
                                    InstallGpuDrivers: true,
                                    Type: "quasi",
                                },
                            },
                            Disks: []shared.AttachedDisk{
                                shared.AttachedDisk{
                                    DeviceName: "non",
                                    ExistingDisk: "atque",
                                    NewDisk: &shared.Disk{
                                        DiskInterface: "sint",
                                        Image: "rem",
                                        SizeGb: "excepturi",
                                        Snapshot: "quisquam",
                                        Type: "nulla",
                                    },
                                },
                                shared.AttachedDisk{
                                    DeviceName: "enim",
                                    ExistingDisk: "repellat",
                                    NewDisk: &shared.Disk{
                                        DiskInterface: "nisi",
                                        Image: "esse",
                                        SizeGb: "non",
                                        Snapshot: "minima",
                                        Type: "aperiam",
                                    },
                                },
                            },
                            MachineType: "molestiae",
                            MinCPUPlatform: "provident",
                            ProvisioningModel: "PREEMPTIBLE",
                        },
                    },
                    shared.InstancePolicyOrTemplate{
                        InstallGpuDrivers: true,
                        InstanceTemplate: "eveniet",
                        Policy: &shared.InstancePolicy{
                            Accelerators: []shared.Accelerator{
                                shared.Accelerator{
                                    Count: "porro",
                                    InstallGpuDrivers: false,
                                    Type: "consequuntur",
                                },
                                shared.Accelerator{
                                    Count: "sit",
                                    InstallGpuDrivers: false,
                                    Type: "vel",
                                },
                            },
                            Disks: []shared.AttachedDisk{
                                shared.AttachedDisk{
                                    DeviceName: "itaque",
                                    ExistingDisk: "similique",
                                    NewDisk: &shared.Disk{
                                        DiskInterface: "ut",
                                        Image: "rerum",
                                        SizeGb: "iusto",
                                        Snapshot: "adipisci",
                                        Type: "repellendus",
                                    },
                                },
                            },
                            MachineType: "et",
                            MinCPUPlatform: "et",
                            ProvisioningModel: "PREEMPTIBLE",
                        },
                    },
                    shared.InstancePolicyOrTemplate{
                        InstallGpuDrivers: true,
                        InstanceTemplate: "blanditiis",
                        Policy: &shared.InstancePolicy{
                            Accelerators: []shared.Accelerator{
                                shared.Accelerator{
                                    Count: "quia",
                                    InstallGpuDrivers: true,
                                    Type: "necessitatibus",
                                },
                                shared.Accelerator{
                                    Count: "nostrum",
                                    InstallGpuDrivers: false,
                                    Type: "repudiandae",
                                },
                            },
                            Disks: []shared.AttachedDisk{
                                shared.AttachedDisk{
                                    DeviceName: "cumque",
                                    ExistingDisk: "ipsa",
                                    NewDisk: &shared.Disk{
                                        DiskInterface: "enim",
                                        Image: "animi",
                                        SizeGb: "iusto",
                                        Snapshot: "veritatis",
                                        Type: "ea",
                                    },
                                },
                                shared.AttachedDisk{
                                    DeviceName: "rerum",
                                    ExistingDisk: "minus",
                                    NewDisk: &shared.Disk{
                                        DiskInterface: "ab",
                                        Image: "assumenda",
                                        SizeGb: "fuga",
                                        Snapshot: "et",
                                        Type: "quam",
                                    },
                                },
                            },
                            MachineType: "est",
                            MinCPUPlatform: "perspiciatis",
                            ProvisioningModel: "STANDARD",
                        },
                    },
                },
                Labels: map[string]string{
                    "aut": "quas",
                    "est": "iusto",
                },
                Location: &shared.LocationPolicy{
                    AllowedLocations: []string{
                        "molestias",
                    },
                },
                Network: &shared.NetworkPolicy{
                    NetworkInterfaces: []shared.NetworkInterface{
                        shared.NetworkInterface{
                            Network: "ab",
                            NoExternalIPAddress: true,
                            Subnetwork: "fugiat",
                        },
                        shared.NetworkInterface{
                            Network: "consectetur",
                            NoExternalIPAddress: false,
                            Subnetwork: "quaerat",
                        },
                        shared.NetworkInterface{
                            Network: "ab",
                            NoExternalIPAddress: true,
                            Subnetwork: "ullam",
                        },
                    },
                },
                ServiceAccount: &shared.ServiceAccount{
                    Email: "dignissimos",
                },
            },
            Labels: map[string]string{
                "quas": "dolor",
            },
            LogsPolicy: &shared.LogsPolicy{
                Destination: "PATH",
                LogsPath: "ducimus",
            },
            Notifications: []shared.JobNotification{
                shared.JobNotification{
                    Message: &shared.Message{
                        NewJobState: "RUNNING",
                        NewTaskState: "PENDING",
                        Type: "TYPE_UNSPECIFIED",
                    },
                    PubsubTopic: "optio",
                },
                shared.JobNotification{
                    Message: &shared.Message{
                        NewJobState: "SCHEDULED",
                        NewTaskState: "FAILED",
                        Type: "TYPE_UNSPECIFIED",
                    },
                    PubsubTopic: "illo",
                },
                shared.JobNotification{
                    Message: &shared.Message{
                        NewJobState: "DELETION_IN_PROGRESS",
                        NewTaskState: "FAILED",
                        Type: "JOB_STATE_CHANGED",
                    },
                    PubsubTopic: "assumenda",
                },
            },
            Priority: "aspernatur",
            Status: &shared.JobStatus{
                RunDuration: "in",
                State: "SCHEDULED",
                StatusEvents: []shared.StatusEvent{
                    shared.StatusEvent{
                        Description: "quia",
                        EventTime: "voluptatum",
                        TaskExecution: &shared.TaskExecution{
                            ExitCode: 3978957507316565666,
                        },
                        Type: "sit",
                    },
                },
                TaskGroups: map[string]shared.TaskGroupStatus{
                    "ea": shared.TaskGroupStatus{
                        Counts: map[string]string{
                            "perferendis": "esse",
                            "aut": "nihil",
                            "ea": "doloremque",
                        },
                        Instances: []shared.InstanceStatus{
                            shared.InstanceStatus{
                                MachineType: "iusto",
                                ProvisioningModel: "PROVISIONING_MODEL_UNSPECIFIED",
                                TaskPack: "molestiae",
                            },
                            shared.InstanceStatus{
                                MachineType: "in",
                                ProvisioningModel: "SPOT",
                                TaskPack: "sunt",
                            },
                            shared.InstanceStatus{
                                MachineType: "harum",
                                ProvisioningModel: "SPOT",
                                TaskPack: "eos",
                            },
                        },
                    },
                },
            },
            TaskGroups: []shared.TaskGroupInput{
                shared.TaskGroupInput{
                    Parallelism: "aut",
                    PermissiveSSH: false,
                    RequireHostsFile: true,
                    TaskCount: "provident",
                    TaskCountPerNode: "aut",
                    TaskEnvironments: []shared.Environment{
                        shared.Environment{
                            Variables: map[string]string{
                                "sapiente": "et",
                                "aut": "rerum",
                            },
                        },
                        shared.Environment{
                            Variables: map[string]string{
                                "doloremque": "incidunt",
                                "provident": "voluptas",
                            },
                        },
                    },
                    TaskSpec: &shared.TaskSpec{
                        ComputeResource: &shared.ComputeResource{
                            BootDiskMib: "assumenda",
                            CPUMilli: "sunt",
                            MemoryMib: "nemo",
                        },
                        Environment: &shared.Environment{
                            Variables: map[string]string{
                                "quia": "voluptatem",
                                "culpa": "illum",
                                "mollitia": "ex",
                            },
                        },
                        Environments: map[string]string{
                            "molestiae": "dignissimos",
                            "laudantium": "quo",
                            "voluptatem": "totam",
                        },
                        LifecyclePolicies: []shared.LifecyclePolicy{
                            shared.LifecyclePolicy{
                                Action: "FAIL_TASK",
                                ActionCondition: &shared.ActionCondition{
                                    ExitCodes: []int32{
                                        2867170436337082363,
                                        7615081996316769988,
                                    },
                                },
                            },
                            shared.LifecyclePolicy{
                                Action: "RETRY_TASK",
                                ActionCondition: &shared.ActionCondition{
                                    ExitCodes: []int32{
                                        2130911999686545789,
                                    },
                                },
                            },
                            shared.LifecyclePolicy{
                                Action: "FAIL_TASK",
                                ActionCondition: &shared.ActionCondition{
                                    ExitCodes: []int32{
                                        3871201309715112538,
                                    },
                                },
                            },
                        },
                        MaxRetryCount: 1677093497499828344,
                        MaxRunDuration: "enim",
                        Runnables: []shared.Runnable{
                            shared.Runnable{
                                AlwaysRun: false,
                                Background: false,
                                Barrier: &shared.Barrier{
                                    Name: "recusandae",
                                },
                                Container: &shared.Container{
                                    BlockExternalNetwork: false,
                                    Commands: []string{
                                        "sunt",
                                    },
                                    Entrypoint: "ipsum",
                                    ImageURI: "qui",
                                    Options: "autem",
                                    Password: "enim",
                                    Username: "ab",
                                    Volumes: []string{
                                        "molestiae",
                                        "accusantium",
                                    },
                                },
                                Environment: &shared.Environment{
                                    Variables: map[string]string{
                                        "sint": "quo",
                                    },
                                },
                                IgnoreExitStatus: true,
                                Script: &shared.Script{
                                    Path: "tenetur",
                                    Text: "assumenda",
                                },
                                Timeout: "voluptatum",
                            },
                            shared.Runnable{
                                AlwaysRun: true,
                                Background: false,
                                Barrier: &shared.Barrier{
                                    Name: "maxime",
                                },
                                Container: &shared.Container{
                                    BlockExternalNetwork: false,
                                    Commands: []string{
                                        "ea",
                                        "temporibus",
                                        "perspiciatis",
                                    },
                                    Entrypoint: "natus",
                                    ImageURI: "saepe",
                                    Options: "natus",
                                    Password: "fugit",
                                    Username: "qui",
                                    Volumes: []string{
                                        "et",
                                        "ullam",
                                    },
                                },
                                Environment: &shared.Environment{
                                    Variables: map[string]string{
                                        "porro": "sit",
                                        "modi": "est",
                                    },
                                },
                                IgnoreExitStatus: false,
                                Script: &shared.Script{
                                    Path: "cum",
                                    Text: "dolorem",
                                },
                                Timeout: "qui",
                            },
                        },
                        Volumes: []shared.Volume{
                            shared.Volume{
                                DeviceName: "ex",
                                Gcs: &shared.Gcs{
                                    RemotePath: "fugiat",
                                },
                                MountOptions: []string{
                                    "soluta",
                                    "exercitationem",
                                    "repudiandae",
                                },
                                MountPath: "possimus",
                                Nfs: &shared.Nfs{
                                    RemotePath: "rerum",
                                    Server: "iusto",
                                },
                            },
                            shared.Volume{
                                DeviceName: "architecto",
                                Gcs: &shared.Gcs{
                                    RemotePath: "eaque",
                                },
                                MountOptions: []string{
                                    "vel",
                                },
                                MountPath: "ullam",
                                Nfs: &shared.Nfs{
                                    RemotePath: "ut",
                                    Server: "numquam",
                                },
                            },
                        },
                    },
                },
            },
        },
    }
    
    res, err := s.Projects.BatchProjectsLocationsJobsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `BatchProjectsLocationsJobsCreate` - Create a Job.
* `BatchProjectsLocationsJobsList` - List all Jobs for a project within a region.
* `BatchProjectsLocationsJobsTaskGroupsTasksList` - List Tasks associated with a job.
* `BatchProjectsLocationsList` - Lists information about the supported locations for this service.
* `BatchProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `BatchProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `BatchProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `BatchProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `BatchProjectsLocationsStateReport` - Report agent's state, e.g. agent status and tasks information
* `BatchProjectsLocationsTasksGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `BatchProjectsLocationsTasksSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `BatchProjectsLocationsTasksTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
