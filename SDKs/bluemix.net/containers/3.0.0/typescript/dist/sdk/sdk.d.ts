import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://containers-api.ng.bluemix.net/v3"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * deleteContainersGroupsNameOrId - Stop and delete all container instances in a container group.
     *
     * Stops and deletes the container instances that run in a container group (corresponding IBM Containers command: `cf ic group rm <group_name>`). When you delete a container group, all floating private IP addresses are released.
    **/
    deleteContainersGroupsNameOrId(req: operations.DeleteContainersGroupsNameOrIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteContainersGroupsNameOrIdResponse>;
    /**
     * deleteContainersNameOrId - Remove a single container
     *
     * Remove a single container that is identified by container ID or name from a space (corresponding IBM Containers command: `cf ic delete <container>`). The container must be stopped before it can be deleted, unless the `force` query parameter is set to true.
    **/
    deleteContainersNameOrId(req: operations.DeleteContainersNameOrIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteContainersNameOrIdResponse>;
    /**
     * deleteImagesId - Remove a Docker image.
     *
     * Remove a Docker image from the private Bluemix registry that is identified by the image ID (corresponding IBM Containers command: `cf ic rmi <image>`).
    **/
    deleteImagesId(req: operations.DeleteImagesIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteImagesIdResponse>;
    /**
     * deleteVolumesFsName - Delete a file share
     *
     * This endpoint deletes a file share from a space (corresponding IBM Containers command: `cf ic volume fs-rm FSNAME`).
     *
     *  Before you can delete a file share, all mounted volumes must be deleted first. To delete a volume, run `cf ic volume rm VOLNAME` or call the `DELETE /volumes/{name}` API endpoint.
     *
     *  **Note:** To delete a file share you must have been granted organization developer rights.
    **/
    deleteVolumesFsName(req: operations.DeleteVolumesFsNameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVolumesFsNameResponse>;
    /**
     * deleteVolumesName - Delete a volume
     *
     * Delete a volume with a given name from a space (corresponding IBM Containers command: `cf ic volume rm VOLNAME`). To delete a volume, all mounted containers must be unmounted first. After the volume is deleted, the data that are stored in the volume are lost.
    **/
    deleteVolumesName(req: operations.DeleteVolumesNameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVolumesNameResponse>;
    /**
     * getContainersFloatingIps - List available public IP addresses in a space
     *
     * This endpoint returns a list of all public IP addresses that are allocated to a space and not bound to a container. If you want to list all public IP addresses that are allocated to a space, even those that are already bound to a container, use the `all` query parameter (corrsponding IBM Containers command: `cf ic ip list`).
    **/
    getContainersFloatingIps(req: operations.GetContainersFloatingIpsRequest, config?: AxiosRequestConfig): Promise<operations.GetContainersFloatingIpsResponse>;
    /**
     * getContainersGroups - List all container groups in a space
     *
     * This endpoint returns a list of all container groups in a space independent of their current state. (corresponding IBM Containers command: `cf ic group list`).
    **/
    getContainersGroups(req: operations.GetContainersGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetContainersGroupsResponse>;
    /**
     * getContainersGroupsNameOrId - Inspect a container group.
     *
     * This endpoint retrieves detailed information about a container group with a given name (corresponding IBM Containers command: `cf ic group inspect GROUP`).
    **/
    getContainersGroupsNameOrId(req: operations.GetContainersGroupsNameOrIdRequest, config?: AxiosRequestConfig): Promise<operations.GetContainersGroupsNameOrIdResponse>;
    /**
     * getContainersIdStatus - List the current state of a container.
     *
     * This endpoint returns the current state of a container. This state can either be a transient state, such as BUILDING and NETWORKING, or a non-transient state, such as RUNNING, SHUTDOWN, CRASHED, or SUSPENDED.
    **/
    getContainersIdStatus(req: operations.GetContainersIdStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetContainersIdStatusResponse>;
    /**
     * getContainersJson - List single containers in a space.
     *
     * This endpoint returns a list of all single containers in a space that are currently in a running state (corresponding IBM Containers command: `cf ic ps`). To list all single containers independent of their current state, set the `all` query parameter to true.
    **/
    getContainersJson(req: operations.GetContainersJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetContainersJsonResponse>;
    /**
     * getContainersMessages - List messages for the user
     *
     * This endpoint retrieves all IBM Containers system messages for the user.
    **/
    getContainersMessages(req: operations.GetContainersMessagesRequest, config?: AxiosRequestConfig): Promise<operations.GetContainersMessagesResponse>;
    /**
     * getContainersNameOrIdJson - Inspect a single container
     *
     * This endpoint retrieves detailed information about a single container (corresponding IBM Containers command: `cf ic inspect <container>`).
    **/
    getContainersNameOrIdJson(req: operations.GetContainersNameOrIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetContainersNameOrIdJsonResponse>;
    /**
     * getContainersQuota - Retrieve organization and space specific quota
     *
     * Retrieve the quota that is assigned to the organization and space.
    **/
    getContainersQuota(req: operations.GetContainersQuotaRequest, config?: AxiosRequestConfig): Promise<operations.GetContainersQuotaResponse>;
    /**
     * getContainersUsage - List container sizes and quota limits
     *
     * This endpoint returns a list of available container sizes and the quota limit and usage for the space.
     *
     * - Container sizes: A list of available container sizes indicating the amount of container memory, disk space and virtual CPUs that can be assigned to the container.
     * - Quota limit: Lists the number of containers, public IP addresses, available container memory, and virtual CPUS that are allocated to a space.
     * - Quota usage: Lists the current number of containers, images, and public IP addresses in a space that is counted towards your quota limit.
    **/
    getContainersUsage(req: operations.GetContainersUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetContainersUsageResponse>;
    /**
     * getContainersVersion - List latest API version
     *
     * This endpoint retrieves a list of all microservices that are used in the IBM Containers service with their current build version. This method does not require authentication.
    **/
    getContainersVersion(config?: AxiosRequestConfig): Promise<operations.GetContainersVersionResponse>;
    /**
     * getImagesJson - List all Docker images that are available in your private Bluemix registry.
     *
     * This endpoint returns a list of all available Docker images in a private Bluemix registry (corresponding IBM Containers command: `cf ic images`.
    **/
    getImagesJson(req: operations.GetImagesJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetImagesJsonResponse>;
    /**
     * getImagesNameOrIdJson - Inspect a Docker image in private Bluemix registry
     *
     * This endpoint returns detailed information about a Docker image that is stored in the private Bluemix registry of an organization (corresponding IBM Containers command: `cf ic inspect <image_name_or_id>`).
    **/
    getImagesNameOrIdJson(req: operations.GetImagesNameOrIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetImagesNameOrIdJsonResponse>;
    /**
     * getRegistryNamespaces - Retrieve the namespace of an organization.
     *
     * This endpoint retrieves the namespace that was set for the organization that owns the current space (corresponding IBM Containers command: `cf ic namespace get`).
    **/
    getRegistryNamespaces(req: operations.GetRegistryNamespacesRequest, config?: AxiosRequestConfig): Promise<operations.GetRegistryNamespacesResponse>;
    /**
     * getRegistryNamespacesNamespace - Check the availability of a namespace
     *
     * This endpoint checks whether a namespace is available in Bluemix and can be used to set up the private Docker images registry for an organization. When a HTTP code `201 Ok` is returned, the namespace is already assigned to another organization in Bluemix and cannot be used. When a HTTP code `404 Not found` is returned, the namespace can be used for your organization.
     *
     *  Consider the following rules when choosing a namespace for your organization:
     *
     * - Every organization can have one namespace at a time only
     * - The namespace must be unique in Bluemix.
     * - The namespace can be 4-30 characters long.
     * - The namespace must start with at least one letter or number.
     * - The namespace can only contain lowercase letters, numbers or underscores (_).
    **/
    getRegistryNamespacesNamespace(req: operations.GetRegistryNamespacesNamespaceRequest, config?: AxiosRequestConfig): Promise<operations.GetRegistryNamespacesNamespaceResponse>;
    /**
     * getTlskey - Retrieve the TLS Certificate
     *
     * This endpoint returns the TLS (Transport Layer Security) certificate to the user (corresponding IBM Containers command: `cf ic login`). The TLS certificate is a SSL certificate that is used to authenticate the user's CLI with the IBM Containers service and to establish a secure communication between the user's local machine and the container in Bluemix.
    **/
    getTlskey(req: operations.GetTlskeyRequest, config?: AxiosRequestConfig): Promise<operations.GetTlskeyResponse>;
    /**
     * getVolumesFsFlavorsJson - List available file share sizes
     *
     * This endpoint returns a list of available file shares in gigabyte (corresponding IBM Containers command: `cf ic volume fs-flavor-list`).
    **/
    getVolumesFsFlavorsJson(req: operations.GetVolumesFsFlavorsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetVolumesFsFlavorsJsonResponse>;
    /**
     * getVolumesFsJson - List available file shares in a space
     *
     * This endpoint returns a list of all file shares that are availble in a space (corresponding IBM Containers command: `cf ic volume fs-list`).
    **/
    getVolumesFsJson(req: operations.GetVolumesFsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetVolumesFsJsonResponse>;
    /**
     * getVolumesFsNameJson - Inspect a file share
     *
     * This endpoint returns detailed information about a file share (corresponding IBM Containers command: `cf ic volume fs-inspect FSNAME`).
    **/
    getVolumesFsNameJson(req: operations.GetVolumesFsNameJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetVolumesFsNameJsonResponse>;
    /**
     * getVolumesJson - List all volumes for a space
     *
     * This endpoint returns a list of all volumes that are available in the given space (corresponding IBM Containers command: `cf ic volume list`).
    **/
    getVolumesJson(req: operations.GetVolumesJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetVolumesJsonResponse>;
    /**
     * getVolumesNameJson - Retrieve detailed information about a volume.
     *
     * Retrieve a detailed list of information about a volume that is identified by the volume name (corresponding IBM Containers command: `cf ic volume inspect VOLNAME`).
    **/
    getVolumesNameJson(req: operations.GetVolumesNameJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetVolumesNameJsonResponse>;
    /**
     * patchContainersGroupsNameOrId - Update a container group.
     *
     * Update the number of container instances that run in a container group (corresponding IBM Containers command: `cf ic group update <option> <group>`).
     *
     * Note: You can run only one update at a time.
     *
     *  The desired number is the number of container instances that you require. It must be within the current limits of Max and Min. To increase the number of desired container instances above the Max value, you must first execute an update on the Max value. Once this update is completed, you can increase the desired number of container instances.
    **/
    patchContainersGroupsNameOrId(req: operations.PatchContainersGroupsNameOrIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchContainersGroupsNameOrIdResponse>;
    /**
     * postBuild - Build a Docker image from a Dockerfile
     *
     * This API builds a new container image from a Dockerfile that is stored on your local machine and pushes the image to the private Bluemix registry (corresponding IBM Containers command: `cf ic build`).
     *
     *  To push an image to your Bluemix registry, a namespace must be set for the organization. Run `cf ic namespace get` or call the `GET /registry/namespaces` API to check if a namespace is already set. If not, run `cf ic namespace set NAMESPACE` or call the `PUT /registry/namespaces/{namespace}` API to set a namespace for your organization.
    **/
    postBuild(req: operations.PostBuildRequest, config?: AxiosRequestConfig): Promise<operations.PostBuildResponse>;
    /**
     * postContainersCreate - Create and start a single container
     *
     * This endpoint creates and starts a single container in your space based on the Docker image that is specified in the Image field of the request json. A single container in IBM Containers is similar to a container that you create in your local Docker environment. Single containers are a good way to start with IBM Containers and to learn about how containers work in the IBM Cloud and the features that IBM Containers provides. They are also recommended when you want to run simple app tests or during the development process of an app.
     *
     *  In the Docker API there are two separate APIs to create and start a container. However in IBM Containers a container is created and started in a single API call. Therefore, this API merges parameters from the Docker API to create and start container.
     *
     *  To create a container with IBM Containers, you must at least define the image that the container is based on.
     *
     * - Image: You must include the full path to the image in your private Bluemix registry in the format: `registry.ng.bluemix.net/<namespace>/<image>`.
    **/
    postContainersCreate(req: operations.PostContainersCreateRequest, config?: AxiosRequestConfig): Promise<operations.PostContainersCreateResponse>;
    /**
     * postContainersFloatingIpsIpRelease - Release public IP address
     *
     * This endpoint releases a public IP address from a space (corresponding IBM Containers command: `cf ic ip release <ip_adress>`). The public IP address is no longer allocated to the space. If a container was bound to the IP address, it is automatically unbound.
    **/
    postContainersFloatingIpsIpRelease(req: operations.PostContainersFloatingIpsIpReleaseRequest, config?: AxiosRequestConfig): Promise<operations.PostContainersFloatingIpsIpReleaseResponse>;
    /**
     * postContainersFloatingIpsRequest - Request a public IP address for a space
     *
     * This endpoint requests a new public IP address for a space (corresponding IBM Containers command: `cf ic ip request`). The number of public IP addresses depends on the quota that is assigned to the space. If there is not enough quota left to request a new public IP address, you can either contact your organization manager to increase the quota, or unbind an existing IP address from a container by running `cf ic ip unbind <ip_adress> <container>` command, or  calling the `POST /container/{name_or_id}/floating-ips/{ip}/unbind` endpoint.
    **/
    postContainersFloatingIpsRequest(req: operations.PostContainersFloatingIpsRequestRequest, config?: AxiosRequestConfig): Promise<operations.PostContainersFloatingIpsRequestResponse>;
    /**
     * postContainersGroups - Create and start a container group.
     *
     * This endpoint creates and starts a new container group in your space. A container group consists of two or more single containers that are all created from the same container image and as a consequence are configured in the same way. Container groups offer different options at no cost to make your app highly available, such as in-built load balancing, auto-recovery of unhealthy container instances, and auto-scaling of container instances based on CPU and memory usage.
     *
     * To create a container group with IBM Containers, you must at least define a container group name and the image that the container group is based on. Required attributes:
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     * - Name: The container group name must start with a letter and then can include uppercase letters, lowercase letters, numbers, periods (.), underscores (_), or hyphens (-).
     * - Image: You must include the full path to the image in your private Bluemix registry in the format:`registry.ng.bluemix.net/<namespace>/<image>`.
    **/
    postContainersGroups(req: operations.PostContainersGroupsRequest, config?: AxiosRequestConfig): Promise<operations.PostContainersGroupsResponse>;
    /**
     * postContainersGroupsNameOrIdMaproute - Map a public route to a container group.
     *
     * If you want your container group to be accessible from the Internet, you need to expose a public port and map a public route to it (corresponding IBM Containers command: `cf ic route map -n <host> -d <domain> <group>`). Every route consists of the host name and domain.
    **/
    postContainersGroupsNameOrIdMaproute(req: operations.PostContainersGroupsNameOrIdMaprouteRequest, config?: AxiosRequestConfig): Promise<operations.PostContainersGroupsNameOrIdMaprouteResponse>;
    /**
     * postContainersGroupsNameOrIdUnmaproute - Unmap a public route from a container group
     *
     * This endpoint unmaps a public route from a container group (corresponding IBM Containers command: `cf ic route unmap -n <host> -d <domain> <group>`). If no other public route is mapped to the container group, then the container group is no longer available from the internet.
     *
     *  When you unmap a route from a container group, the route is not deleted and can be mapped to other container groups.
    **/
    postContainersGroupsNameOrIdUnmaproute(req: operations.PostContainersGroupsNameOrIdUnmaprouteRequest, config?: AxiosRequestConfig): Promise<operations.PostContainersGroupsNameOrIdUnmaprouteResponse>;
    /**
     * postContainersNameOrIdFloatingIpsIpBind - Bind a public IP address to a single container
     *
     * This endpoint binds an available public IP address to a single container (corresponding IBM Containers command: `cf ic ip bind <ip_adress> <container>`). After a container is bound to a public IP address, it can be accessed at `https://<public_ip_adress>:<public_port>`.
    **/
    postContainersNameOrIdFloatingIpsIpBind(req: operations.PostContainersNameOrIdFloatingIpsIpBindRequest, config?: AxiosRequestConfig): Promise<operations.PostContainersNameOrIdFloatingIpsIpBindResponse>;
    /**
     * postContainersNameOrIdFloatingIpsIpUnbind - Unbind a public IP address from a container
     *
     * This endpoint unbinds a public IP address from a container (corresponding IBM Containers command: `cf ic ip unbind <ip_adress> <container>`). The container that is unbound from the IP address will not be accessible from the internet anymore. The public IP address will be further allocated to the space and can be used to be bound to other containers.
    **/
    postContainersNameOrIdFloatingIpsIpUnbind(req: operations.PostContainersNameOrIdFloatingIpsIpUnbindRequest, config?: AxiosRequestConfig): Promise<operations.PostContainersNameOrIdFloatingIpsIpUnbindResponse>;
    /**
     * postContainersNameOrIdPause - Pause a single container
     *
     * Pause all processes in a running single container with a given container ID or name (corresponding IBM Containers command: `cf ic pause <container>`).
    **/
    postContainersNameOrIdPause(req: operations.PostContainersNameOrIdPauseRequest, config?: AxiosRequestConfig): Promise<operations.PostContainersNameOrIdPauseResponse>;
    /**
     * postContainersNameOrIdRename - Rename a single container
     *
     * Change the current name of an existing single container that is identified by the container ID or name (corresponding IBM Containers command: `cf ic rename <old_name> <new_name>`).
    **/
    postContainersNameOrIdRename(req: operations.PostContainersNameOrIdRenameRequest, config?: AxiosRequestConfig): Promise<operations.PostContainersNameOrIdRenameResponse>;
    /**
     * postContainersNameOrIdRestart - Restart a single container
     *
     * Restart a container with a given container ID or name (corresponding IBM Containers command: `cf ic restart <container>`).
    **/
    postContainersNameOrIdRestart(req: operations.PostContainersNameOrIdRestartRequest, config?: AxiosRequestConfig): Promise<operations.PostContainersNameOrIdRestartResponse>;
    /**
     * postContainersNameOrIdStart - Start a single container
     *
     * Start a single container with a given container name or ID (corresponding IBM Containers command: `cf ic start <container>`).
    **/
    postContainersNameOrIdStart(req: operations.PostContainersNameOrIdStartRequest, config?: AxiosRequestConfig): Promise<operations.PostContainersNameOrIdStartResponse>;
    /**
     * postContainersNameOrIdStop - Stop a single container
     *
     * Stop a single container with a given container name or ID (corresponding IBM Containers command: `cf ic stop <container>`).
    **/
    postContainersNameOrIdStop(req: operations.PostContainersNameOrIdStopRequest, config?: AxiosRequestConfig): Promise<operations.PostContainersNameOrIdStopResponse>;
    /**
     * postContainersNameOrIdUnpause - Unpause a single container
     *
     * Unpause all processes that are currently stopped inside a single containers with a given container ID or name (corresponding IBM Containers command: `cf ic unpause <container>`).
    **/
    postContainersNameOrIdUnpause(req: operations.PostContainersNameOrIdUnpauseRequest, config?: AxiosRequestConfig): Promise<operations.PostContainersNameOrIdUnpauseResponse>;
    /**
     * postVolumesCreate - Create a volume in a space
     *
     * This endpoints creates a new volume in your space (corresponding IBM Containers command: `cf ic volume create VOLNAME`). A volume is used to persist and access app data between container restarts. Volumes are hosted on file shares that define the available actual storage in Bluemix and the number of input and output transactions per second (IOPS).
     *
     *  After you have created a volume, you must mount it to a container by using the `--volume` option in the `cf ic run` (single containers) or `cf ic group create` (container groups) command. You can also define the volume as part of the HTTP body and send a request to the `POST /containers/create` (single containers) or `POST /containers/groups` (container groups) endpoints.
     *
     *  Note: If you mount multiple containers in a space to the same volume, they share the data in the volume and can access them anytime. When a container is deleted, the associated volume is not removed.
    **/
    postVolumesCreate(req: operations.PostVolumesCreateRequest, config?: AxiosRequestConfig): Promise<operations.PostVolumesCreateResponse>;
    /**
     * postVolumesFsCreate - Create a file share in a space
     *
     * This endpoint creates a new file share in a space (corresponding IBM Containers command: `cf ic volume fs-create FSNAME FSSIZE FSIOPS`).
     *
     *  A file share is a persistent NFS-based (Network File System) storage system that hosts Docker volumes in a Bluemix space and allows a user to store and access container and app-related files. To store files in a file share, you must create a container volume and save the data into this volume.
     *
     *  As soon as you create your first volume in a space with the `cf ic volume create VOLNAME` command or the `POST /volumes/create` API endpoint, a default file share with 20 GB at 4 IOPS (Input Output operations Per Second) is created at no cost.
     *
     * The organization manager can create file shares with specific storage size and IOPS to meet the storage needs of the space. File shares can be provisioned in sizes from 20 GB to 12 TB and at IOPS per GB of 0.25, 2 or 4. Run `cf ic volume fs-flavor-list` or call the `GET /volumes/fs/flavors/json` API endpoint to retrieve a list of available file share sizes. The file share size in relation to the number of IOPS impacts the speed that data can be read and written from and to the container volume.
    **/
    postVolumesFsCreate(req: operations.PostVolumesFsCreateRequest, config?: AxiosRequestConfig): Promise<operations.PostVolumesFsCreateResponse>;
    /**
     * postVolumesName - Share a volume with another space
     *
     * This endpoint provisions an existing volume that was created in one space to another space within the same organization. Single containers and container groups in each space can read and write to the shared volume. The volume remains owned by the original space it was created in, including management and billing. For example, the volume can be deleted from the original space only.
    **/
    postVolumesName(req: operations.PostVolumesNameRequest, config?: AxiosRequestConfig): Promise<operations.PostVolumesNameResponse>;
    /**
     * putContainersQuota - Update space quota
     *
     * This endpoint updates the quota that is allocated to a Bluemix space.
     *
     *  **Note**: Only paid accounts are eligbile to update the space quota. If you are using a free-trial account, upgrade to a paid account first.
    **/
    putContainersQuota(req: operations.PutContainersQuotaRequest, config?: AxiosRequestConfig): Promise<operations.PutContainersQuotaResponse>;
    /**
     * putRegistryNamespacesNamespace - Set a namespace for your private Bluemix registry.
     *
     * Set up your own Docker images registry in Bluemix by defining a namespace for your organization (corresponding IBM Containers command: `cf ic namespace set <namespace>`). The namespace is used to generate a unique URL to your private Bluemix registry. In your private registry you store all Docker images that you want to share across your organization. To create a container from an image, you must first push the image to your registry.
     *
     *  The namespace cannot be changed after is has been set. Consider the following rules to choose a namespace for your organization:
     *
     * - Every organization can have one namespace at a time only
     * - The namespace must be unique in Bluemix.
     * - The namespace can be 4-30 characters long.
     * - The namespace must start with at least one letter or number.
     * - The namespace can only contain lowercase letters, numbers or underscores (_).
    **/
    putRegistryNamespacesNamespace(req: operations.PutRegistryNamespacesNamespaceRequest, config?: AxiosRequestConfig): Promise<operations.PutRegistryNamespacesNamespaceResponse>;
    /**
     * putTlskeyRefresh - Refresh the TLS Certificate
     *
     * This endpoint requests to generate a new TLS (Transport Layer Security) certificate on the server and to update the existing user TLS certificate (corresponding IBM Containers command: `cf ic init`).
    **/
    putTlskeyRefresh(req: operations.PutTlskeyRefreshRequest, config?: AxiosRequestConfig): Promise<operations.PutTlskeyRefreshResponse>;
}
export {};
