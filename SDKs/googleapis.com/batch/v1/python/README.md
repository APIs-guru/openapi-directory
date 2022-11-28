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
    
req = operations.BatchProjectsLocationsJobsCreateRequest(
    security=operations.BatchProjectsLocationsJobsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.BatchProjectsLocationsJobsCreatePathParams(
        parent="neque",
    ),
    query_params=operations.BatchProjectsLocationsJobsCreateQueryParams(
        dollar_xgafv="2",
        access_token="alias",
        alt="json",
        callback="et",
        fields="amet",
        job_id="magnam",
        key="nihil",
        oauth_token="ipsa",
        pretty_print=True,
        quota_user="laboriosam",
        request_id="placeat",
        upload_type="aliquid",
        upload_protocol="iusto",
    ),
    request=shared.JobInput(
        allocation_policy=shared.AllocationPolicy(
            instances=[
                shared.InstancePolicyOrTemplate(
                    install_gpu_drivers=False,
                    instance_template="nisi",
                    policy=shared.InstancePolicy(
                        accelerators=[
                            shared.Accelerator(
                                count="quis",
                                install_gpu_drivers=True,
                                type="suscipit",
                            ),
                            shared.Accelerator(
                                count="eveniet",
                                install_gpu_drivers=True,
                                type="quasi",
                            ),
                        ],
                        disks=[
                            shared.AttachedDisk(
                                device_name="non",
                                existing_disk="atque",
                                new_disk=shared.Disk(
                                    disk_interface="sint",
                                    image="rem",
                                    size_gb="excepturi",
                                    snapshot="quisquam",
                                    type="nulla",
                                ),
                            ),
                            shared.AttachedDisk(
                                device_name="enim",
                                existing_disk="repellat",
                                new_disk=shared.Disk(
                                    disk_interface="nisi",
                                    image="esse",
                                    size_gb="non",
                                    snapshot="minima",
                                    type="aperiam",
                                ),
                            ),
                        ],
                        machine_type="molestiae",
                        min_cpu_platform="provident",
                        provisioning_model="PREEMPTIBLE",
                    ),
                ),
                shared.InstancePolicyOrTemplate(
                    install_gpu_drivers=True,
                    instance_template="eveniet",
                    policy=shared.InstancePolicy(
                        accelerators=[
                            shared.Accelerator(
                                count="porro",
                                install_gpu_drivers=False,
                                type="consequuntur",
                            ),
                            shared.Accelerator(
                                count="sit",
                                install_gpu_drivers=False,
                                type="vel",
                            ),
                        ],
                        disks=[
                            shared.AttachedDisk(
                                device_name="itaque",
                                existing_disk="similique",
                                new_disk=shared.Disk(
                                    disk_interface="ut",
                                    image="rerum",
                                    size_gb="iusto",
                                    snapshot="adipisci",
                                    type="repellendus",
                                ),
                            ),
                        ],
                        machine_type="et",
                        min_cpu_platform="et",
                        provisioning_model="PREEMPTIBLE",
                    ),
                ),
                shared.InstancePolicyOrTemplate(
                    install_gpu_drivers=True,
                    instance_template="blanditiis",
                    policy=shared.InstancePolicy(
                        accelerators=[
                            shared.Accelerator(
                                count="quia",
                                install_gpu_drivers=True,
                                type="necessitatibus",
                            ),
                            shared.Accelerator(
                                count="nostrum",
                                install_gpu_drivers=False,
                                type="repudiandae",
                            ),
                        ],
                        disks=[
                            shared.AttachedDisk(
                                device_name="cumque",
                                existing_disk="ipsa",
                                new_disk=shared.Disk(
                                    disk_interface="enim",
                                    image="animi",
                                    size_gb="iusto",
                                    snapshot="veritatis",
                                    type="ea",
                                ),
                            ),
                            shared.AttachedDisk(
                                device_name="rerum",
                                existing_disk="minus",
                                new_disk=shared.Disk(
                                    disk_interface="ab",
                                    image="assumenda",
                                    size_gb="fuga",
                                    snapshot="et",
                                    type="quam",
                                ),
                            ),
                        ],
                        machine_type="est",
                        min_cpu_platform="perspiciatis",
                        provisioning_model="STANDARD",
                    ),
                ),
            ],
            labels={
                "aut": "quas",
                "est": "iusto",
            },
            location=shared.LocationPolicy(
                allowed_locations=[
                    "molestias",
                ],
            ),
            network=shared.NetworkPolicy(
                network_interfaces=[
                    shared.NetworkInterface(
                        network="ab",
                        no_external_ip_address=True,
                        subnetwork="fugiat",
                    ),
                    shared.NetworkInterface(
                        network="consectetur",
                        no_external_ip_address=False,
                        subnetwork="quaerat",
                    ),
                    shared.NetworkInterface(
                        network="ab",
                        no_external_ip_address=True,
                        subnetwork="ullam",
                    ),
                ],
            ),
            service_account=shared.ServiceAccount(
                email="dignissimos",
            ),
        ),
        labels={
            "quas": "dolor",
        },
        logs_policy=shared.LogsPolicy(
            destination="PATH",
            logs_path="ducimus",
        ),
        notifications=[
            shared.JobNotification(
                message=shared.Message(
                    new_job_state="RUNNING",
                    new_task_state="PENDING",
                    type="TYPE_UNSPECIFIED",
                ),
                pubsub_topic="optio",
            ),
            shared.JobNotification(
                message=shared.Message(
                    new_job_state="SCHEDULED",
                    new_task_state="FAILED",
                    type="TYPE_UNSPECIFIED",
                ),
                pubsub_topic="illo",
            ),
            shared.JobNotification(
                message=shared.Message(
                    new_job_state="DELETION_IN_PROGRESS",
                    new_task_state="FAILED",
                    type="JOB_STATE_CHANGED",
                ),
                pubsub_topic="assumenda",
            ),
        ],
        priority="aspernatur",
        status=shared.JobStatus(
            run_duration="in",
            state="SCHEDULED",
            status_events=[
                shared.StatusEvent(
                    description="quia",
                    event_time="voluptatum",
                    task_execution=shared.TaskExecution(
                        exit_code=3978957507316565666,
                    ),
                    type="sit",
                ),
            ],
            task_groups={
                "ea": shared.TaskGroupStatus(
                    counts={
                        "perferendis": "esse",
                        "aut": "nihil",
                        "ea": "doloremque",
                    },
                    instances=[
                        shared.InstanceStatus(
                            machine_type="iusto",
                            provisioning_model="PROVISIONING_MODEL_UNSPECIFIED",
                            task_pack="molestiae",
                        ),
                        shared.InstanceStatus(
                            machine_type="in",
                            provisioning_model="SPOT",
                            task_pack="sunt",
                        ),
                        shared.InstanceStatus(
                            machine_type="harum",
                            provisioning_model="SPOT",
                            task_pack="eos",
                        ),
                    ],
                ),
            },
        ),
        task_groups=[
            shared.TaskGroupInput(
                parallelism="aut",
                permissive_ssh=False,
                require_hosts_file=True,
                task_count="provident",
                task_count_per_node="aut",
                task_environments=[
                    shared.Environment(
                        variables={
                            "sapiente": "et",
                            "aut": "rerum",
                        },
                    ),
                    shared.Environment(
                        variables={
                            "doloremque": "incidunt",
                            "provident": "voluptas",
                        },
                    ),
                ],
                task_spec=shared.TaskSpec(
                    compute_resource=shared.ComputeResource(
                        boot_disk_mib="assumenda",
                        cpu_milli="sunt",
                        memory_mib="nemo",
                    ),
                    environment=shared.Environment(
                        variables={
                            "quia": "voluptatem",
                            "culpa": "illum",
                            "mollitia": "ex",
                        },
                    ),
                    environments={
                        "molestiae": "dignissimos",
                        "laudantium": "quo",
                        "voluptatem": "totam",
                    },
                    lifecycle_policies=[
                        shared.LifecyclePolicy(
                            action="FAIL_TASK",
                            action_condition=shared.ActionCondition(
                                exit_codes=[
                                    2867170436337082363,
                                    7615081996316769988,
                                ],
                            ),
                        ),
                        shared.LifecyclePolicy(
                            action="RETRY_TASK",
                            action_condition=shared.ActionCondition(
                                exit_codes=[
                                    2130911999686545789,
                                ],
                            ),
                        ),
                        shared.LifecyclePolicy(
                            action="FAIL_TASK",
                            action_condition=shared.ActionCondition(
                                exit_codes=[
                                    3871201309715112538,
                                ],
                            ),
                        ),
                    ],
                    max_retry_count=1677093497499828344,
                    max_run_duration="enim",
                    runnables=[
                        shared.Runnable(
                            always_run=False,
                            background=False,
                            barrier=shared.Barrier(
                                name="recusandae",
                            ),
                            container=shared.Container(
                                block_external_network=False,
                                commands=[
                                    "sunt",
                                ],
                                entrypoint="ipsum",
                                image_uri="qui",
                                options="autem",
                                password="enim",
                                username="ab",
                                volumes=[
                                    "molestiae",
                                    "accusantium",
                                ],
                            ),
                            environment=shared.Environment(
                                variables={
                                    "sint": "quo",
                                },
                            ),
                            ignore_exit_status=True,
                            script=shared.Script(
                                path="tenetur",
                                text="assumenda",
                            ),
                            timeout="voluptatum",
                        ),
                        shared.Runnable(
                            always_run=True,
                            background=False,
                            barrier=shared.Barrier(
                                name="maxime",
                            ),
                            container=shared.Container(
                                block_external_network=False,
                                commands=[
                                    "ea",
                                    "temporibus",
                                    "perspiciatis",
                                ],
                                entrypoint="natus",
                                image_uri="saepe",
                                options="natus",
                                password="fugit",
                                username="qui",
                                volumes=[
                                    "et",
                                    "ullam",
                                ],
                            ),
                            environment=shared.Environment(
                                variables={
                                    "porro": "sit",
                                    "modi": "est",
                                },
                            ),
                            ignore_exit_status=False,
                            script=shared.Script(
                                path="cum",
                                text="dolorem",
                            ),
                            timeout="qui",
                        ),
                    ],
                    volumes=[
                        shared.Volume(
                            device_name="ex",
                            gcs=shared.Gcs(
                                remote_path="fugiat",
                            ),
                            mount_options=[
                                "soluta",
                                "exercitationem",
                                "repudiandae",
                            ],
                            mount_path="possimus",
                            nfs=shared.Nfs(
                                remote_path="rerum",
                                server="iusto",
                            ),
                        ),
                        shared.Volume(
                            device_name="architecto",
                            gcs=shared.Gcs(
                                remote_path="eaque",
                            ),
                            mount_options=[
                                "vel",
                            ],
                            mount_path="ullam",
                            nfs=shared.Nfs(
                                remote_path="ut",
                                server="numquam",
                            ),
                        ),
                    ],
                ),
            ),
        ],
    ),
)
    
res = s.projects.batch_projects_locations_jobs_create(req)

if res.job is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `batch_projects_locations_jobs_create` - Create a Job.
* `batch_projects_locations_jobs_list` - List all Jobs for a project within a region.
* `batch_projects_locations_jobs_task_groups_tasks_list` - List Tasks associated with a job.
* `batch_projects_locations_list` - Lists information about the supported locations for this service.
* `batch_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `batch_projects_locations_operations_delete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `batch_projects_locations_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `batch_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `batch_projects_locations_state_report` - Report agent's state, e.g. agent status and tasks information
* `batch_projects_locations_tasks_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `batch_projects_locations_tasks_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `batch_projects_locations_tasks_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
