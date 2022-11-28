

import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://containers-api.ng.bluemix.net/v3",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def delete_containers_groups_name_or_id_(self, request: operations.DeleteContainersGroupsNameOrIDRequest) -> operations.DeleteContainersGroupsNameOrIDResponse:
        r"""Stop and delete all container instances in a container group.
        Stops and deletes the container instances that run in a container group (corresponding IBM Containers command: `cf ic group rm <group_name>`). When you delete a container group, all floating private IP addresses are released.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/containers/groups/{name_or_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteContainersGroupsNameOrIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def delete_containers_name_or_id_(self, request: operations.DeleteContainersNameOrIDRequest) -> operations.DeleteContainersNameOrIDResponse:
        r"""Remove a single container
        Remove a single container that is identified by container ID or name from a space (corresponding IBM Containers command: `cf ic delete <container>`). The container must be stopped before it can be deleted, unless the `force` query parameter is set to true.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/containers/{name_or_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteContainersNameOrIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def delete_images_id_(self, request: operations.DeleteImagesIDRequest) -> operations.DeleteImagesIDResponse:
        r"""Remove a Docker image.
        Remove a Docker image from the private Bluemix registry that is identified by the image ID (corresponding IBM Containers command: `cf ic rmi <image>`).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/images/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteImagesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def delete_volumes_fs_name_(self, request: operations.DeleteVolumesFsNameRequest) -> operations.DeleteVolumesFsNameResponse:
        r"""Delete a file share
        This endpoint deletes a file share from a space (corresponding IBM Containers command: `cf ic volume fs-rm FSNAME`).
        
         Before you can delete a file share, all mounted volumes must be deleted first. To delete a volume, run `cf ic volume rm VOLNAME` or call the `DELETE /volumes/{name}` API endpoint. 
        
         **Note:** To delete a file share you must have been granted organization developer rights.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/volumes/fs/{name}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteVolumesFsNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def delete_volumes_name_(self, request: operations.DeleteVolumesNameRequest) -> operations.DeleteVolumesNameResponse:
        r"""Delete a volume
        Delete a volume with a given name from a space (corresponding IBM Containers command: `cf ic volume rm VOLNAME`). To delete a volume, all mounted containers must be unmounted first. After the volume is deleted, the data that are stored in the volume are lost. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/volumes/{name}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteVolumesNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_containers_floating_ips(self, request: operations.GetContainersFloatingIpsRequest) -> operations.GetContainersFloatingIpsResponse:
        r"""List available public IP addresses in a space
        This endpoint returns a list of all public IP addresses that are allocated to a space and not bound to a container. If you want to list all public IP addresses that are allocated to a space, even those that are already bound to a container, use the `all` query parameter (corrsponding IBM Containers command: `cf ic ip list`).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/containers/floating-ips"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContainersFloatingIpsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.floating_ips = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_containers_groups(self, request: operations.GetContainersGroupsRequest) -> operations.GetContainersGroupsResponse:
        r"""List all container groups in a space
        This endpoint returns a list of all container groups in a space independent of their current state. (corresponding IBM Containers command: `cf ic group list`).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/containers/groups"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContainersGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.containers_groups_get_list_items = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_containers_groups_name_or_id_(self, request: operations.GetContainersGroupsNameOrIDRequest) -> operations.GetContainersGroupsNameOrIDResponse:
        r"""Inspect a container group.
        This endpoint retrieves detailed information about a container group with a given name (corresponding IBM Containers command: `cf ic group inspect GROUP`).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/containers/groups/{name_or_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContainersGroupsNameOrIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.containers_groups_name_or_id_get_details = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_containers_id_status(self, request: operations.GetContainersIDStatusRequest) -> operations.GetContainersIDStatusResponse:
        r"""List the current state of a container.
        This endpoint returns the current state of a container. This state can either be a transient state, such as BUILDING and NETWORKING, or a non-transient state, such as RUNNING, SHUTDOWN, CRASHED, or SUSPENDED.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/containers/{id}/status", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContainersIDStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_container_status = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_containers_json(self, request: operations.GetContainersJSONRequest) -> operations.GetContainersJSONResponse:
        r"""List single containers in a space.
        This endpoint returns a list of all single containers in a space that are currently in a running state (corresponding IBM Containers command: `cf ic ps`). To list all single containers independent of their current state, set the `all` query parameter to true.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/containers/json"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContainersJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.containers = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_containers_messages(self, request: operations.GetContainersMessagesRequest) -> operations.GetContainersMessagesResponse:
        r"""List messages for the user
        This endpoint retrieves all IBM Containers system messages for the user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/containers/messages"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContainersMessagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetContainersMessages200ApplicationJSON])
                res.get_containers_messages_200_application_json_object = out
        elif r.status_code == 500:
            pass

        return res

    
    def get_containers_name_or_id_json(self, request: operations.GetContainersNameOrIDJSONRequest) -> operations.GetContainersNameOrIDJSONResponse:
        r"""Inspect a single container
        This endpoint retrieves detailed information about a single container (corresponding IBM Containers command: `cf ic inspect <container>`).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/containers/{name_or_id}/json", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContainersNameOrIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.container_info = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_containers_quota(self, request: operations.GetContainersQuotaRequest) -> operations.GetContainersQuotaResponse:
        r"""Retrieve organization and space specific quota
        Retrieve the quota that is assigned to the organization and space.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/containers/quota"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContainersQuotaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.containers_quota_info = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_containers_usage(self, request: operations.GetContainersUsageRequest) -> operations.GetContainersUsageResponse:
        r"""List container sizes and quota limits
        This endpoint returns a list of available container sizes and the quota limit and usage for the space. 
        
        - Container sizes: A list of available container sizes indicating the amount of container memory, disk space and virtual CPUs that can be assigned to the container.
        - Quota limit: Lists the number of containers, public IP addresses, available container memory, and virtual CPUS that are allocated to a space. 
        - Quota usage: Lists the current number of containers, images, and public IP addresses in a space that is counted towards your quota limit. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/containers/usage"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContainersUsageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.containers_usage_info = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_containers_version(self) -> operations.GetContainersVersionResponse:
        r"""List latest API version
        This endpoint retrieves a list of all microservices that are used in the IBM Containers service with their current build version. This method does not require authentication.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/containers/version"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContainersVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.containers_version_get_info = out
        elif r.status_code == 500:
            pass

        return res

    
    def get_images_json(self, request: operations.GetImagesJSONRequest) -> operations.GetImagesJSONResponse:
        r"""List all Docker images that are available in your private Bluemix registry.
        This endpoint returns a list of all available Docker images in a private Bluemix registry (corresponding IBM Containers command: `cf ic images`.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/images/json"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetImagesJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.image_info = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_images_name_or_id_json(self, request: operations.GetImagesNameOrIDJSONRequest) -> operations.GetImagesNameOrIDJSONResponse:
        r"""Inspect a Docker image in private Bluemix registry
        This endpoint returns detailed information about a Docker image that is stored in the private Bluemix registry of an organization (corresponding IBM Containers command: `cf ic inspect <image_name_or_id>`).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/images/{name_or_id}/json", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetImagesNameOrIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImageDetail])
                res.image_detail = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_registry_namespaces(self, request: operations.GetRegistryNamespacesRequest) -> operations.GetRegistryNamespacesResponse:
        r"""Retrieve the namespace of an organization.
        This endpoint retrieves the namespace that was set for the organization that owns the current space (corresponding IBM Containers command: `cf ic namespace get`).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/registry/namespaces"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRegistryNamespacesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Namespace])
                res.namespace = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_registry_namespaces_namespace_(self, request: operations.GetRegistryNamespacesNamespaceRequest) -> operations.GetRegistryNamespacesNamespaceResponse:
        r"""Check the availability of a namespace
        This endpoint checks whether a namespace is available in Bluemix and can be used to set up the private Docker images registry for an organization. When a HTTP code `201 Ok` is returned, the namespace is already assigned to another organization in Bluemix and cannot be used. When a HTTP code `404 Not found` is returned, the namespace can be used for your organization. 
        
         Consider the following rules when choosing a namespace for your organization: 
        
        - Every organization can have one namespace at a time only 
        - The namespace must be unique in Bluemix. 
        - The namespace can be 4-30 characters long. 
        - The namespace must start with at least one letter or number. 
        - The namespace can only contain lowercase letters, numbers or underscores (_). 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/registry/namespaces/{namespace}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRegistryNamespacesNamespaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Namespace])
                res.namespace = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_tlskey(self, request: operations.GetTlskeyRequest) -> operations.GetTlskeyResponse:
        r"""Retrieve the TLS Certificate
        This endpoint returns the TLS (Transport Layer Security) certificate to the user (corresponding IBM Containers command: `cf ic login`). The TLS certificate is a SSL certificate that is used to authenticate the user's CLI with the IBM Containers service and to establish a secure communication between the user's local machine and the container in Bluemix.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tlskey"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTlskeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Certificate])
                res.certificate = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_volumes_fs_flavors_json(self, request: operations.GetVolumesFsFlavorsJSONRequest) -> operations.GetVolumesFsFlavorsJSONResponse:
        r"""List available file share sizes
        This endpoint returns a list of available file shares in gigabyte (corresponding IBM Containers command: `cf ic volume fs-flavor-list`).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/volumes/fs/flavors/json"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVolumesFsFlavorsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.get_volumes_fs_flavors_json_200_application_json_integers = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_volumes_fs_json(self, request: operations.GetVolumesFsJSONRequest) -> operations.GetVolumesFsJSONResponse:
        r"""List available file shares in a space
        This endpoint returns a list of all file shares that are availble in a space (corresponding IBM Containers command: `cf ic volume fs-list`).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/volumes/fs/json"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVolumesFsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Fileshare]])
                res.fileshares = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_volumes_fs_name_json(self, request: operations.GetVolumesFsNameJSONRequest) -> operations.GetVolumesFsNameJSONResponse:
        r"""Inspect a file share
        This endpoint returns detailed information about a file share (corresponding IBM Containers command: `cf ic volume fs-inspect FSNAME`).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/volumes/fs/{name}/json", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVolumesFsNameJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.GetFileshareDetails]])
                res.get_fileshare_details = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_volumes_json(self, request: operations.GetVolumesJSONRequest) -> operations.GetVolumesJSONResponse:
        r"""List all volumes for a space
        This endpoint returns a list of all volumes that are available in the given space (corresponding IBM Containers command: `cf ic volume list`).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/volumes/json"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVolumesJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.volumes = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_volumes_name_json(self, request: operations.GetVolumesNameJSONRequest) -> operations.GetVolumesNameJSONResponse:
        r"""Retrieve detailed information about a volume. 
        Retrieve a detailed list of information about a volume that is identified by the volume name (corresponding IBM Containers command: `cf ic volume inspect VOLNAME`).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/volumes/{name}/json", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVolumesNameJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.volume = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def patch_containers_groups_name_or_id_(self, request: operations.PatchContainersGroupsNameOrIDRequest) -> operations.PatchContainersGroupsNameOrIDResponse:
        r"""Update a container group.
        Update the number of container instances that run in a container group (corresponding IBM Containers command: `cf ic group update <option> <group>`). 
        
        Note: You can run only one update at a time.  
        
         The desired number is the number of container instances that you require. It must be within the current limits of Max and Min. To increase the number of desired container instances above the Max value, you must first execute an update on the Max value. Once this update is completed, you can increase the desired number of container instances. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/containers/groups/{name_or_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchContainersGroupsNameOrIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def post_build(self, request: operations.PostBuildRequest) -> operations.PostBuildResponse:
        r"""Build a Docker image from a Dockerfile
        This API builds a new container image from a Dockerfile that is stored on your local machine and pushes the image to the private Bluemix registry (corresponding IBM Containers command: `cf ic build`).
        
         To push an image to your Bluemix registry, a namespace must be set for the organization. Run `cf ic namespace get` or call the `GET /registry/namespaces` API to check if a namespace is already set. If not, run `cf ic namespace set NAMESPACE` or call the `PUT /registry/namespaces/{namespace}` API to set a namespace for your organization.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/build"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostBuildResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def post_containers_create(self, request: operations.PostContainersCreateRequest) -> operations.PostContainersCreateResponse:
        r"""Create and start a single container
        This endpoint creates and starts a single container in your space based on the Docker image that is specified in the Image field of the request json. A single container in IBM Containers is similar to a container that you create in your local Docker environment. Single containers are a good way to start with IBM Containers and to learn about how containers work in the IBM Cloud and the features that IBM Containers provides. They are also recommended when you want to run simple app tests or during the development process of an app. 
        
         In the Docker API there are two separate APIs to create and start a container. However in IBM Containers a container is created and started in a single API call. Therefore, this API merges parameters from the Docker API to create and start container. 
        
         To create a container with IBM Containers, you must at least define the image that the container is based on.
        
        - Image: You must include the full path to the image in your private Bluemix registry in the format: `registry.ng.bluemix.net/<namespace>/<image>`.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/containers/create"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostContainersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.container_id = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 409:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def post_containers_floating_ips_ip_release(self, request: operations.PostContainersFloatingIpsIPReleaseRequest) -> operations.PostContainersFloatingIpsIPReleaseResponse:
        r"""Release public IP address
        This endpoint releases a public IP address from a space (corresponding IBM Containers command: `cf ic ip release <ip_adress>`). The public IP address is no longer allocated to the space. If a container was bound to the IP address, it is automatically unbound.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/containers/floating-ips/{ip}/release", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostContainersFloatingIpsIPReleaseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def post_containers_floating_ips_request(self, request: operations.PostContainersFloatingIpsRequestRequest) -> operations.PostContainersFloatingIpsRequestResponse:
        r"""Request a public IP address for a space
        This endpoint requests a new public IP address for a space (corresponding IBM Containers command: `cf ic ip request`). The number of public IP addresses depends on the quota that is assigned to the space. If there is not enough quota left to request a new public IP address, you can either contact your organization manager to increase the quota, or unbind an existing IP address from a container by running `cf ic ip unbind <ip_adress> <container>` command, or  calling the `POST /container/{name_or_id}/floating-ips/{ip}/unbind` endpoint.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/containers/floating-ips/request"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostContainersFloatingIpsRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.post_containers_floating_ips_request_200_application_json_string = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 409:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def post_containers_groups(self, request: operations.PostContainersGroupsRequest) -> operations.PostContainersGroupsResponse:
        r"""Create and start a container group.
        This endpoint creates and starts a new container group in your space. A container group consists of two or more single containers that are all created from the same container image and as a consequence are configured in the same way. Container groups offer different options at no cost to make your app highly available, such as in-built load balancing, auto-recovery of unhealthy container instances, and auto-scaling of container instances based on CPU and memory usage.
        
        To create a container group with IBM Containers, you must at least define a container group name and the image that the container group is based on. Required attributes:
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        - Name: The container group name must start with a letter and then can include uppercase letters, lowercase letters, numbers, periods (.), underscores (_), or hyphens (-). 
        - Image: You must include the full path to the image in your private Bluemix registry in the format:`registry.ng.bluemix.net/<namespace>/<image>`.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/containers/groups"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostContainersGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContainersGroupsPostCreatedInfo])
                res.containers_groups_post_created_info = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 409:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def post_containers_groups_name_or_id_maproute(self, request: operations.PostContainersGroupsNameOrIDMaprouteRequest) -> operations.PostContainersGroupsNameOrIDMaprouteResponse:
        r"""Map a public route to a container group.
        If you want your container group to be accessible from the Internet, you need to expose a public port and map a public route to it (corresponding IBM Containers command: `cf ic route map -n <host> -d <domain> <group>`). Every route consists of the host name and domain.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/containers/groups/{name_or_id}/maproute", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostContainersGroupsNameOrIDMaprouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContainersGroupsNameOrIDMaproutePostInfo])
                res.containers_groups_name_or_id_maproute_post_info = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def post_containers_groups_name_or_id_unmaproute(self, request: operations.PostContainersGroupsNameOrIDUnmaprouteRequest) -> operations.PostContainersGroupsNameOrIDUnmaprouteResponse:
        r"""Unmap a public route from a container group
        This endpoint unmaps a public route from a container group (corresponding IBM Containers command: `cf ic route unmap -n <host> -d <domain> <group>`). If no other public route is mapped to the container group, then the container group is no longer available from the internet. 
        
         When you unmap a route from a container group, the route is not deleted and can be mapped to other container groups. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/containers/groups/{name_or_id}/unmaproute", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostContainersGroupsNameOrIDUnmaprouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContainersGroupsNameOrIDMaproutePostInfo])
                res.containers_groups_name_or_id_maproute_post_info = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def post_containers_name_or_id_floating_ips_ip_bind(self, request: operations.PostContainersNameOrIDFloatingIpsIPBindRequest) -> operations.PostContainersNameOrIDFloatingIpsIPBindResponse:
        r"""Bind a public IP address to a single container
        This endpoint binds an available public IP address to a single container (corresponding IBM Containers command: `cf ic ip bind <ip_adress> <container>`). After a container is bound to a public IP address, it can be accessed at `https://<public_ip_adress>:<public_port>`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/containers/{name_or_id}/floating-ips/{ip}/bind", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostContainersNameOrIDFloatingIpsIPBindResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 304:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def post_containers_name_or_id_floating_ips_ip_unbind(self, request: operations.PostContainersNameOrIDFloatingIpsIPUnbindRequest) -> operations.PostContainersNameOrIDFloatingIpsIPUnbindResponse:
        r"""Unbind a public IP address from a container
        This endpoint unbinds a public IP address from a container (corresponding IBM Containers command: `cf ic ip unbind <ip_adress> <container>`). The container that is unbound from the IP address will not be accessible from the internet anymore. The public IP address will be further allocated to the space and can be used to be bound to other containers. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/containers/{name_or_id}/floating-ips/{ip}/unbind", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostContainersNameOrIDFloatingIpsIPUnbindResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def post_containers_name_or_id_pause(self, request: operations.PostContainersNameOrIDPauseRequest) -> operations.PostContainersNameOrIDPauseResponse:
        r"""Pause a single container
        Pause all processes in a running single container with a given container ID or name (corresponding IBM Containers command: `cf ic pause <container>`).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/containers/{name_or_id}/pause", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostContainersNameOrIDPauseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def post_containers_name_or_id_rename(self, request: operations.PostContainersNameOrIDRenameRequest) -> operations.PostContainersNameOrIDRenameResponse:
        r"""Rename a single container
        Change the current name of an existing single container that is identified by the container ID or name (corresponding IBM Containers command: `cf ic rename <old_name> <new_name>`). 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/containers/{name_or_id}/rename", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostContainersNameOrIDRenameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 409:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def post_containers_name_or_id_restart(self, request: operations.PostContainersNameOrIDRestartRequest) -> operations.PostContainersNameOrIDRestartResponse:
        r"""Restart a single container
        Restart a container with a given container ID or name (corresponding IBM Containers command: `cf ic restart <container>`).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/containers/{name_or_id}/restart", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostContainersNameOrIDRestartResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def post_containers_name_or_id_start(self, request: operations.PostContainersNameOrIDStartRequest) -> operations.PostContainersNameOrIDStartResponse:
        r"""Start a single container
        Start a single container with a given container name or ID (corresponding IBM Containers command: `cf ic start <container>`).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/containers/{name_or_id}/start", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostContainersNameOrIDStartResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def post_containers_name_or_id_stop(self, request: operations.PostContainersNameOrIDStopRequest) -> operations.PostContainersNameOrIDStopResponse:
        r"""Stop a single container
        Stop a single container with a given container name or ID (corresponding IBM Containers command: `cf ic stop <container>`).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/containers/{name_or_id}/stop", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostContainersNameOrIDStopResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def post_containers_name_or_id_unpause(self, request: operations.PostContainersNameOrIDUnpauseRequest) -> operations.PostContainersNameOrIDUnpauseResponse:
        r"""Unpause a single container
        Unpause all processes that are currently stopped inside a single containers with a given container ID or name (corresponding IBM Containers command: `cf ic unpause <container>`).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/containers/{name_or_id}/unpause", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostContainersNameOrIDUnpauseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def post_volumes_create(self, request: operations.PostVolumesCreateRequest) -> operations.PostVolumesCreateResponse:
        r"""Create a volume in a space
        This endpoints creates a new volume in your space (corresponding IBM Containers command: `cf ic volume create VOLNAME`). A volume is used to persist and access app data between container restarts. Volumes are hosted on file shares that define the available actual storage in Bluemix and the number of input and output transactions per second (IOPS). 
        
         After you have created a volume, you must mount it to a container by using the `--volume` option in the `cf ic run` (single containers) or `cf ic group create` (container groups) command. You can also define the volume as part of the HTTP body and send a request to the `POST /containers/create` (single containers) or `POST /containers/groups` (container groups) endpoints. 
        
         Note: If you mount multiple containers in a space to the same volume, they share the data in the volume and can access them anytime. When a container is deleted, the associated volume is not removed.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/volumes/create"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostVolumesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.volume = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 409:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def post_volumes_fs_create(self, request: operations.PostVolumesFsCreateRequest) -> operations.PostVolumesFsCreateResponse:
        r"""Create a file share in a space
        This endpoint creates a new file share in a space (corresponding IBM Containers command: `cf ic volume fs-create FSNAME FSSIZE FSIOPS`). 
        
         A file share is a persistent NFS-based (Network File System) storage system that hosts Docker volumes in a Bluemix space and allows a user to store and access container and app-related files. To store files in a file share, you must create a container volume and save the data into this volume.
        
         As soon as you create your first volume in a space with the `cf ic volume create VOLNAME` command or the `POST /volumes/create` API endpoint, a default file share with 20 GB at 4 IOPS (Input Output operations Per Second) is created at no cost. 
        
        The organization manager can create file shares with specific storage size and IOPS to meet the storage needs of the space. File shares can be provisioned in sizes from 20 GB to 12 TB and at IOPS per GB of 0.25, 2 or 4. Run `cf ic volume fs-flavor-list` or call the `GET /volumes/fs/flavors/json` API endpoint to retrieve a list of available file share sizes. The file share size in relation to the number of IOPS impacts the speed that data can be read and written from and to the container volume.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/volumes/fs/create"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostVolumesFsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 409:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def post_volumes_name_(self, request: operations.PostVolumesNameRequest) -> operations.PostVolumesNameResponse:
        r"""Share a volume with another space
        This endpoint provisions an existing volume that was created in one space to another space within the same organization. Single containers and container groups in each space can read and write to the shared volume. The volume remains owned by the original space it was created in, including management and billing. For example, the volume can be deleted from the original space only.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/volumes/{name}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostVolumesNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.volume = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def put_containers_quota(self, request: operations.PutContainersQuotaRequest) -> operations.PutContainersQuotaResponse:
        r"""Update space quota
        This endpoint updates the quota that is allocated to a Bluemix space. 
        
         **Note**: Only paid accounts are eligbile to update the space quota. If you are using a free-trial account, upgrade to a paid account first.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/containers/quota"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutContainersQuotaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def put_registry_namespaces_namespace_(self, request: operations.PutRegistryNamespacesNamespaceRequest) -> operations.PutRegistryNamespacesNamespaceResponse:
        r"""Set a namespace for your private Bluemix registry.
        Set up your own Docker images registry in Bluemix by defining a namespace for your organization (corresponding IBM Containers command: `cf ic namespace set <namespace>`). The namespace is used to generate a unique URL to your private Bluemix registry. In your private registry you store all Docker images that you want to share across your organization. To create a container from an image, you must first push the image to your registry. 
        
         The namespace cannot be changed after is has been set. Consider the following rules to choose a namespace for your organization: 
        
        - Every organization can have one namespace at a time only 
        - The namespace must be unique in Bluemix. 
        - The namespace can be 4-30 characters long. 
        - The namespace must start with at least one letter or number. 
        - The namespace can only contain lowercase letters, numbers or underscores (_).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/registry/namespaces/{namespace}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("PUT", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRegistryNamespacesNamespaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Namespace])
                res.namespace = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 409:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def put_tlskey_refresh(self, request: operations.PutTlskeyRefreshRequest) -> operations.PutTlskeyRefreshResponse:
        r"""Refresh the TLS Certificate
        This endpoint requests to generate a new TLS (Transport Layer Security) certificate on the server and to update the existing user TLS certificate (corresponding IBM Containers command: `cf ic init`).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tlskey/refresh"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("PUT", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutTlskeyRefreshResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.certificate_refresh = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    