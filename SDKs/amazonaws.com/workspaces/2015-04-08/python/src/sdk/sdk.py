
__doc__ = """ SDK Documentation: https://docs.aws.amazon.com/workspaces/ - Amazon Web Services documentation"""
import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"http://workspaces.{region}.amazonaws.com",
	"https://workspaces.{region}.amazonaws.com",
	"http://workspaces.{region}.amazonaws.com.cn",
	"https://workspaces.{region}.amazonaws.com.cn",
]


class SDK:
    r"""SDK Documentation: https://docs.aws.amazon.com/workspaces/ - Amazon Web Services documentation"""

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
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
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def associate_connection_alias(self, request: operations.AssociateConnectionAliasRequest) -> operations.AssociateConnectionAliasResponse:
        r"""<p>Associates the specified connection alias with the specified directory to enable cross-Region redirection. For more information, see <a href=\"https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html\"> Cross-Region Redirection for Amazon WorkSpaces</a>.</p> <note> <p>Before performing this operation, call <a href=\"https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html\"> DescribeConnectionAliases</a> to make sure that the current state of the connection alias is <code>CREATED</code>.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.AssociateConnectionAlias"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AssociateConnectionAliasResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssociateConnectionAliasResult])
                res.associate_connection_alias_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_associated_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.access_denied_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameter_values_exception = out
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_resource_state_exception = out
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.operation_not_supported_exception = out

        return res

    
    def associate_ip_groups(self, request: operations.AssociateIPGroupsRequest) -> operations.AssociateIPGroupsResponse:
        r"""Associates the specified IP access control group with the specified directory.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.AssociateIpGroups"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AssociateIPGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.associate_ip_groups_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameter_values_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_limit_exceeded_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_resource_state_exception = out
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.access_denied_exception = out
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.operation_not_supported_exception = out

        return res

    
    def authorize_ip_rules(self, request: operations.AuthorizeIPRulesRequest) -> operations.AuthorizeIPRulesResponse:
        r"""<p>Adds one or more rules to the specified IP access control group.</p> <p>This action gives users permission to access their WorkSpaces from the CIDR address ranges specified in the rules.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.AuthorizeIpRules"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizeIPRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.authorize_ip_rules_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameter_values_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_limit_exceeded_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_resource_state_exception = out
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.access_denied_exception = out

        return res

    
    def copy_workspace_image(self, request: operations.CopyWorkspaceImageRequest) -> operations.CopyWorkspaceImageResponse:
        r"""<p>Copies the specified image from the specified Region to the current Region. For more information about copying images, see <a href=\"https://docs.aws.amazon.com/workspaces/latest/adminguide/copy-custom-image.html\"> Copy a Custom WorkSpaces Image</a>.</p> <note> <p>In the China (Ningxia) Region, you can copy images only within the same Region.</p> <p>In the AWS GovCloud (US-West) Region, to copy images to and from other AWS Regions, contact AWS Support.</p> </note> <important> <p>Before copying a shared image, be sure to verify that it has been shared from the correct AWS account. To determine if an image has been shared and to see the AWS account ID that owns an image, use the <a href=\"https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImages.html\">DescribeWorkSpaceImages</a> and <a href=\"https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImagePermissions.html\">DescribeWorkspaceImagePermissions</a> API operations. </p> </important>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.CopyWorkspaceImage"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CopyWorkspaceImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CopyWorkspaceImageResult])
                res.copy_workspace_image_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_limit_exceeded_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_already_exists_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_unavailable_exception = out
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.operation_not_supported_exception = out
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.access_denied_exception = out
        elif r.status_code == 486:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameter_values_exception = out

        return res

    
    def create_connection_alias(self, request: operations.CreateConnectionAliasRequest) -> operations.CreateConnectionAliasResponse:
        r"""Creates the specified connection alias for use with cross-Region redirection. For more information, see <a href=\"https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html\"> Cross-Region Redirection for Amazon WorkSpaces</a>.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.CreateConnectionAlias"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateConnectionAliasResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateConnectionAliasResult])
                res.create_connection_alias_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_already_exists_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.access_denied_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameter_values_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_limit_exceeded_exception = out
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_resource_state_exception = out
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.operation_not_supported_exception = out

        return res

    
    def create_ip_group(self, request: operations.CreateIPGroupRequest) -> operations.CreateIPGroupResponse:
        r"""<p>Creates an IP access control group.</p> <p>An IP access control group provides you with the ability to control the IP addresses from which users are allowed to access their WorkSpaces. To specify the CIDR address ranges, add rules to your IP access control group and then associate the group with your directory. You can add rules when you create the group or at any time using <a>AuthorizeIpRules</a>.</p> <p>There is a default IP access control group associated with your directory. If you don't associate an IP access control group with your directory, the default group is used. The default group includes a default rule that allows users to access their WorkSpaces from anywhere. You cannot modify the default IP access control group for your directory.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.CreateIpGroup"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateIPGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateIPGroupResult])
                res.create_ip_group_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameter_values_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_limit_exceeded_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_already_exists_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_creation_failed_exception = out
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.access_denied_exception = out

        return res

    
    def create_tags(self, request: operations.CreateTagsRequest) -> operations.CreateTagsResponse:
        r"""Creates the specified tags for the specified WorkSpaces resource.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.CreateTags"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_tags_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameter_values_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_limit_exceeded_exception = out

        return res

    
    def create_workspace_bundle(self, request: operations.CreateWorkspaceBundleRequest) -> operations.CreateWorkspaceBundleResponse:
        r"""Creates the specified WorkSpace bundle. For more information about creating WorkSpace bundles, see <a href=\"https://docs.aws.amazon.com/workspaces/latest/adminguide/create-custom-bundle.html\"> Create a Custom WorkSpaces Image and Bundle</a>.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.CreateWorkspaceBundle"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateWorkspaceBundleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateWorkspaceBundleResult])
                res.create_workspace_bundle_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_unavailable_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_already_exists_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_limit_exceeded_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameter_values_exception = out
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.access_denied_exception = out

        return res

    
    def create_workspaces(self, request: operations.CreateWorkspacesRequest) -> operations.CreateWorkspacesResponse:
        r"""<p>Creates one or more WorkSpaces.</p> <p>This operation is asynchronous and returns before the WorkSpaces are created.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.CreateWorkspaces"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateWorkspacesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateWorkspacesResult])
                res.create_workspaces_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_limit_exceeded_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameter_values_exception = out

        return res

    
    def delete_connection_alias(self, request: operations.DeleteConnectionAliasRequest) -> operations.DeleteConnectionAliasResponse:
        r"""<p>Deletes the specified connection alias. For more information, see <a href=\"https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html\"> Cross-Region Redirection for Amazon WorkSpaces</a>.</p> <important> <p> <b>If you will no longer be using a fully qualified domain name (FQDN) as the registration code for your WorkSpaces users, you must take certain precautions to prevent potential security issues.</b> For more information, see <a href=\"https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html#cross-region-redirection-security-considerations\"> Security Considerations if You Stop Using Cross-Region Redirection</a>.</p> </important> <note> <p>To delete a connection alias that has been shared, the shared account must first disassociate the connection alias from any directories it has been associated with. Then you must unshare the connection alias from the account it has been shared with. You can delete a connection alias only after it is no longer shared with any accounts or associated with any directories.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.DeleteConnectionAlias"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteConnectionAliasResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_connection_alias_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_associated_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.access_denied_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameter_values_exception = out
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_resource_state_exception = out
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.operation_not_supported_exception = out

        return res

    
    def delete_ip_group(self, request: operations.DeleteIPGroupRequest) -> operations.DeleteIPGroupResponse:
        r"""<p>Deletes the specified IP access control group.</p> <p>You cannot delete an IP access control group that is associated with a directory.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.DeleteIpGroup"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteIPGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_ip_group_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameter_values_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_associated_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.access_denied_exception = out

        return res

    
    def delete_tags(self, request: operations.DeleteTagsRequest) -> operations.DeleteTagsResponse:
        r"""Deletes the specified tags from the specified WorkSpaces resource.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.DeleteTags"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_tags_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameter_values_exception = out

        return res

    
    def delete_workspace_bundle(self, request: operations.DeleteWorkspaceBundleRequest) -> operations.DeleteWorkspaceBundleResponse:
        r"""Deletes the specified WorkSpace bundle. For more information about deleting WorkSpace bundles, see <a href=\"https://docs.aws.amazon.com/workspaces/latest/adminguide/delete_bundle.html\"> Delete a Custom WorkSpaces Bundle or Image</a>.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.DeleteWorkspaceBundle"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteWorkspaceBundleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_workspace_bundle_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameter_values_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_associated_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.access_denied_exception = out

        return res

    
    def delete_workspace_image(self, request: operations.DeleteWorkspaceImageRequest) -> operations.DeleteWorkspaceImageResponse:
        r"""Deletes the specified image from your account. To delete an image, you must first delete any bundles that are associated with the image and unshare the image if it is shared with other accounts. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.DeleteWorkspaceImage"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteWorkspaceImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_workspace_image_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_associated_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_resource_state_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.access_denied_exception = out

        return res

    
    def deregister_workspace_directory(self, request: operations.DeregisterWorkspaceDirectoryRequest) -> operations.DeregisterWorkspaceDirectoryResponse:
        r"""<p>Deregisters the specified directory. This operation is asynchronous and returns before the WorkSpace directory is deregistered. If any WorkSpaces are registered to this directory, you must remove them before you can deregister the directory.</p> <note> <p>Simple AD and AD Connector are made available to you free of charge to use with WorkSpaces. If there are no WorkSpaces being used with your Simple AD or AD Connector directory for 30 consecutive days, this directory will be automatically deregistered for use with Amazon WorkSpaces, and you will be charged for this directory as per the <a href=\"http://aws.amazon.com/directoryservice/pricing/\">AWS Directory Services pricing terms</a>.</p> <p>To delete empty directories, see <a href=\"https://docs.aws.amazon.com/workspaces/latest/adminguide/delete-workspaces-directory.html\"> Delete the Directory for Your WorkSpaces</a>. If you delete your Simple AD or AD Connector directory, you can always create a new one when you want to start using WorkSpaces again.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.DeregisterWorkspaceDirectory"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeregisterWorkspaceDirectoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.deregister_workspace_directory_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.access_denied_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameter_values_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.operation_not_supported_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_resource_state_exception = out

        return res

    
    def describe_account(self, request: operations.DescribeAccountRequest) -> operations.DescribeAccountResponse:
        r"""Retrieves a list that describes the configuration of Bring Your Own License (BYOL) for the specified account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.DescribeAccount"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeAccountResult])
                res.describe_account_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.access_denied_exception = out

        return res

    
    def describe_account_modifications(self, request: operations.DescribeAccountModificationsRequest) -> operations.DescribeAccountModificationsResponse:
        r"""Retrieves a list that describes modifications to the configuration of Bring Your Own License (BYOL) for the specified account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.DescribeAccountModifications"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeAccountModificationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeAccountModificationsResult])
                res.describe_account_modifications_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.access_denied_exception = out

        return res

    
    def describe_client_properties(self, request: operations.DescribeClientPropertiesRequest) -> operations.DescribeClientPropertiesResponse:
        r"""Retrieves a list that describes one or more specified Amazon WorkSpaces clients.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.DescribeClientProperties"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeClientPropertiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeClientPropertiesResult])
                res.describe_client_properties_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameter_values_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.access_denied_exception = out

        return res

    
    def describe_connection_alias_permissions(self, request: operations.DescribeConnectionAliasPermissionsRequest) -> operations.DescribeConnectionAliasPermissionsResponse:
        r"""Describes the permissions that the owner of a connection alias has granted to another AWS account for the specified connection alias. For more information, see <a href=\"https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html\"> Cross-Region Redirection for Amazon WorkSpaces</a>.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.DescribeConnectionAliasPermissions"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeConnectionAliasPermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeConnectionAliasPermissionsResult])
                res.describe_connection_alias_permissions_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.access_denied_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameter_values_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.operation_not_supported_exception = out

        return res

    
    def describe_connection_aliases(self, request: operations.DescribeConnectionAliasesRequest) -> operations.DescribeConnectionAliasesResponse:
        r"""Retrieves a list that describes the connection aliases used for cross-Region redirection. For more information, see <a href=\"https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html\"> Cross-Region Redirection for Amazon WorkSpaces</a>.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.DescribeConnectionAliases"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeConnectionAliasesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeConnectionAliasesResult])
                res.describe_connection_aliases_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.access_denied_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameter_values_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.operation_not_supported_exception = out

        return res

    
    def describe_ip_groups(self, request: operations.DescribeIPGroupsRequest) -> operations.DescribeIPGroupsResponse:
        r"""Describes one or more of your IP access control groups.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.DescribeIpGroups"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeIPGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeIPGroupsResult])
                res.describe_ip_groups_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameter_values_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.access_denied_exception = out

        return res

    
    def describe_tags(self, request: operations.DescribeTagsRequest) -> operations.DescribeTagsResponse:
        r"""Describes the specified tags for the specified WorkSpaces resource.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.DescribeTags"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeTagsResult])
                res.describe_tags_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def describe_workspace_bundles(self, request: operations.DescribeWorkspaceBundlesRequest) -> operations.DescribeWorkspaceBundlesResponse:
        r"""<p>Retrieves a list that describes the available WorkSpace bundles.</p> <p>You can filter the results using either bundle ID or owner, but not both.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.DescribeWorkspaceBundles"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeWorkspaceBundlesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeWorkspaceBundlesResult])
                res.describe_workspace_bundles_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameter_values_exception = out

        return res

    
    def describe_workspace_directories(self, request: operations.DescribeWorkspaceDirectoriesRequest) -> operations.DescribeWorkspaceDirectoriesResponse:
        r"""Describes the available directories that are registered with Amazon WorkSpaces.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.DescribeWorkspaceDirectories"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeWorkspaceDirectoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeWorkspaceDirectoriesResult])
                res.describe_workspace_directories_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameter_values_exception = out

        return res

    
    def describe_workspace_image_permissions(self, request: operations.DescribeWorkspaceImagePermissionsRequest) -> operations.DescribeWorkspaceImagePermissionsResponse:
        r"""Describes the permissions that the owner of an image has granted to other AWS accounts for an image.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.DescribeWorkspaceImagePermissions"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeWorkspaceImagePermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeWorkspaceImagePermissionsResult])
                res.describe_workspace_image_permissions_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.access_denied_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameter_values_exception = out

        return res

    
    def describe_workspace_images(self, request: operations.DescribeWorkspaceImagesRequest) -> operations.DescribeWorkspaceImagesResponse:
        r"""Retrieves a list that describes one or more specified images, if the image identifiers are provided. Otherwise, all images in the account are described. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.DescribeWorkspaceImages"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeWorkspaceImagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeWorkspaceImagesResult])
                res.describe_workspace_images_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.access_denied_exception = out

        return res

    
    def describe_workspace_snapshots(self, request: operations.DescribeWorkspaceSnapshotsRequest) -> operations.DescribeWorkspaceSnapshotsResponse:
        r"""Describes the snapshots for the specified WorkSpace.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.DescribeWorkspaceSnapshots"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeWorkspaceSnapshotsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeWorkspaceSnapshotsResult])
                res.describe_workspace_snapshots_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameter_values_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.access_denied_exception = out

        return res

    
    def describe_workspaces(self, request: operations.DescribeWorkspacesRequest) -> operations.DescribeWorkspacesResponse:
        r"""<p>Describes the specified WorkSpaces.</p> <p>You can filter the results by using the bundle identifier, directory identifier, or owner, but you can specify only one filter at a time.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.DescribeWorkspaces"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeWorkspacesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeWorkspacesResult])
                res.describe_workspaces_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameter_values_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_unavailable_exception = out

        return res

    
    def describe_workspaces_connection_status(self, request: operations.DescribeWorkspacesConnectionStatusRequest) -> operations.DescribeWorkspacesConnectionStatusResponse:
        r"""Describes the connection status of the specified WorkSpaces.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.DescribeWorkspacesConnectionStatus"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeWorkspacesConnectionStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeWorkspacesConnectionStatusResult])
                res.describe_workspaces_connection_status_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameter_values_exception = out

        return res

    
    def disassociate_connection_alias(self, request: operations.DisassociateConnectionAliasRequest) -> operations.DisassociateConnectionAliasResponse:
        r"""<p>Disassociates a connection alias from a directory. Disassociating a connection alias disables cross-Region redirection between two directories in different AWS Regions. For more information, see <a href=\"https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html\"> Cross-Region Redirection for Amazon WorkSpaces</a>.</p> <note> <p>Before performing this operation, call <a href=\"https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html\"> DescribeConnectionAliases</a> to make sure that the current state of the connection alias is <code>CREATED</code>.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.DisassociateConnectionAlias"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisassociateConnectionAliasResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.disassociate_connection_alias_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.access_denied_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameter_values_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_resource_state_exception = out
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.operation_not_supported_exception = out

        return res

    
    def disassociate_ip_groups(self, request: operations.DisassociateIPGroupsRequest) -> operations.DisassociateIPGroupsResponse:
        r"""Disassociates the specified IP access control group from the specified directory.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.DisassociateIpGroups"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisassociateIPGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.disassociate_ip_groups_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameter_values_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_resource_state_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.access_denied_exception = out

        return res

    
    def import_workspace_image(self, request: operations.ImportWorkspaceImageRequest) -> operations.ImportWorkspaceImageResponse:
        r"""Imports the specified Windows 10 Bring Your Own License (BYOL) image into Amazon WorkSpaces. The image must be an already licensed Amazon EC2 image that is in your AWS account, and you must own the image. For more information about creating BYOL images, see <a href=\"https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html\"> Bring Your Own Windows Desktop Licenses</a>.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.ImportWorkspaceImage"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ImportWorkspaceImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImportWorkspaceImageResult])
                res.import_workspace_image_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_limit_exceeded_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_already_exists_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.operation_not_supported_exception = out
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.access_denied_exception = out
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameter_values_exception = out

        return res

    
    def list_available_management_cidr_ranges(self, request: operations.ListAvailableManagementCidrRangesRequest) -> operations.ListAvailableManagementCidrRangesResponse:
        r"""<p>Retrieves a list of IP address ranges, specified as IPv4 CIDR blocks, that you can use for the network management interface when you enable Bring Your Own License (BYOL). </p> <p>This operation can be run only by AWS accounts that are enabled for BYOL. If your account isn't enabled for BYOL, you'll receive an <code>AccessDeniedException</code> error.</p> <p>The management network interface is connected to a secure Amazon WorkSpaces management network. It is used for interactive streaming of the WorkSpace desktop to Amazon WorkSpaces clients, and to allow Amazon WorkSpaces to manage the WorkSpace.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.ListAvailableManagementCidrRanges"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ListAvailableManagementCidrRangesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAvailableManagementCidrRangesResult])
                res.list_available_management_cidr_ranges_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameter_values_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.access_denied_exception = out

        return res

    
    def migrate_workspace(self, request: operations.MigrateWorkspaceRequest) -> operations.MigrateWorkspaceResponse:
        r"""<p>Migrates a WorkSpace from one operating system or bundle type to another, while retaining the data on the user volume.</p> <p>The migration process recreates the WorkSpace by using a new root volume from the target bundle image and the user volume from the last available snapshot of the original WorkSpace. During migration, the original <code>D:\Users\%USERNAME%</code> user profile folder is renamed to <code>D:\Users\%USERNAME%MMddyyTHHmmss%.NotMigrated</code>. A new <code>D:\Users\%USERNAME%\</code> folder is generated by the new OS. Certain files in the old user profile are moved to the new user profile.</p> <p>For available migration scenarios, details about what happens during migration, and best practices, see <a href=\"https://docs.aws.amazon.com/workspaces/latest/adminguide/migrate-workspaces.html\">Migrate a WorkSpace</a>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.MigrateWorkspace"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MigrateWorkspaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MigrateWorkspaceResult])
                res.migrate_workspace_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameter_values_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.access_denied_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.operation_not_supported_exception = out
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.operation_in_progress_exception = out
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_unavailable_exception = out

        return res

    
    def modify_account(self, request: operations.ModifyAccountRequest) -> operations.ModifyAccountResponse:
        r"""Modifies the configuration of Bring Your Own License (BYOL) for the specified account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.ModifyAccount"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ModifyAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.modify_account_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameter_values_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.access_denied_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_resource_state_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_unavailable_exception = out
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def modify_client_properties(self, request: operations.ModifyClientPropertiesRequest) -> operations.ModifyClientPropertiesResponse:
        r"""Modifies the properties of the specified Amazon WorkSpaces clients.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.ModifyClientProperties"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ModifyClientPropertiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.modify_client_properties_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameter_values_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.access_denied_exception = out

        return res

    
    def modify_selfservice_permissions(self, request: operations.ModifySelfservicePermissionsRequest) -> operations.ModifySelfservicePermissionsResponse:
        r"""Modifies the self-service WorkSpace management capabilities for your users. For more information, see <a href=\"https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html\">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.ModifySelfservicePermissions"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ModifySelfservicePermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.modify_selfservice_permissions_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.access_denied_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameter_values_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def modify_workspace_access_properties(self, request: operations.ModifyWorkspaceAccessPropertiesRequest) -> operations.ModifyWorkspaceAccessPropertiesResponse:
        r"""Specifies which devices and operating systems users can use to access their WorkSpaces. For more information, see <a href=\"https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html#control-device-access\"> Control Device Access</a>.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.ModifyWorkspaceAccessProperties"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ModifyWorkspaceAccessPropertiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.modify_workspace_access_properties_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.access_denied_exception = out

        return res

    
    def modify_workspace_creation_properties(self, request: operations.ModifyWorkspaceCreationPropertiesRequest) -> operations.ModifyWorkspaceCreationPropertiesResponse:
        r"""Modify the default properties used to create WorkSpaces.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.ModifyWorkspaceCreationProperties"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ModifyWorkspaceCreationPropertiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.modify_workspace_creation_properties_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.access_denied_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameter_values_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.operation_not_supported_exception = out

        return res

    
    def modify_workspace_properties(self, request: operations.ModifyWorkspacePropertiesRequest) -> operations.ModifyWorkspacePropertiesResponse:
        r"""Modifies the specified WorkSpace properties. For important information about how to modify the size of the root and user volumes, see <a href=\"https://docs.aws.amazon.com/workspaces/latest/adminguide/modify-workspaces.html\"> Modify a WorkSpace</a>. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.ModifyWorkspaceProperties"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ModifyWorkspacePropertiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.modify_workspace_properties_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameter_values_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_resource_state_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.operation_in_progress_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.unsupported_workspace_configuration_exception = out
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.access_denied_exception = out
        elif r.status_code == 486:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_unavailable_exception = out

        return res

    
    def modify_workspace_state(self, request: operations.ModifyWorkspaceStateRequest) -> operations.ModifyWorkspaceStateResponse:
        r"""<p>Sets the state of the specified WorkSpace.</p> <p>To maintain a WorkSpace without being interrupted, set the WorkSpace state to <code>ADMIN_MAINTENANCE</code>. WorkSpaces in this state do not respond to requests to reboot, stop, start, rebuild, or restore. An AutoStop WorkSpace in this state is not stopped. Users cannot log into a WorkSpace in the <code>ADMIN_MAINTENANCE</code> state.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.ModifyWorkspaceState"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ModifyWorkspaceStateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.modify_workspace_state_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameter_values_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_resource_state_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def reboot_workspaces(self, request: operations.RebootWorkspacesRequest) -> operations.RebootWorkspacesResponse:
        r"""<p>Reboots the specified WorkSpaces.</p> <p>You cannot reboot a WorkSpace unless its state is <code>AVAILABLE</code> or <code>UNHEALTHY</code>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have rebooted.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.RebootWorkspaces"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RebootWorkspacesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RebootWorkspacesResult])
                res.reboot_workspaces_result = out

        return res

    
    def rebuild_workspaces(self, request: operations.RebuildWorkspacesRequest) -> operations.RebuildWorkspacesResponse:
        r"""<p>Rebuilds the specified WorkSpace.</p> <p>You cannot rebuild a WorkSpace unless its state is <code>AVAILABLE</code>, <code>ERROR</code>, <code>UNHEALTHY</code>, <code>STOPPED</code>, or <code>REBOOTING</code>.</p> <p>Rebuilding a WorkSpace is a potentially destructive action that can result in the loss of data. For more information, see <a href=\"https://docs.aws.amazon.com/workspaces/latest/adminguide/reset-workspace.html\">Rebuild a WorkSpace</a>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have been completely rebuilt.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.RebuildWorkspaces"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RebuildWorkspacesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RebuildWorkspacesResult])
                res.rebuild_workspaces_result = out

        return res

    
    def register_workspace_directory(self, request: operations.RegisterWorkspaceDirectoryRequest) -> operations.RegisterWorkspaceDirectoryResponse:
        r"""Registers the specified directory. This operation is asynchronous and returns before the WorkSpace directory is registered. If this is the first time you are registering a directory, you will need to create the workspaces_DefaultRole role before you can register a directory. For more information, see <a href=\"https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-access-control.html#create-default-role\"> Creating the workspaces_DefaultRole Role</a>.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.RegisterWorkspaceDirectory"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RegisterWorkspaceDirectoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.register_workspace_directory_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameter_values_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_limit_exceeded_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.access_denied_exception = out
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.workspaces_default_role_not_found_exception = out
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_resource_state_exception = out
        elif r.status_code == 486:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.unsupported_network_configuration_exception = out
        elif r.status_code == 487:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.operation_not_supported_exception = out

        return res

    
    def restore_workspace(self, request: operations.RestoreWorkspaceRequest) -> operations.RestoreWorkspaceResponse:
        r"""<p>Restores the specified WorkSpace to its last known healthy state.</p> <p>You cannot restore a WorkSpace unless its state is <code> AVAILABLE</code>, <code>ERROR</code>, <code>UNHEALTHY</code>, or <code>STOPPED</code>.</p> <p>Restoring a WorkSpace is a potentially destructive action that can result in the loss of data. For more information, see <a href=\"https://docs.aws.amazon.com/workspaces/latest/adminguide/restore-workspace.html\">Restore a WorkSpace</a>.</p> <p>This operation is asynchronous and returns before the WorkSpace is completely restored.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.RestoreWorkspace"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RestoreWorkspaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.restore_workspace_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameter_values_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.access_denied_exception = out

        return res

    
    def revoke_ip_rules(self, request: operations.RevokeIPRulesRequest) -> operations.RevokeIPRulesResponse:
        r"""Removes one or more rules from the specified IP access control group.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.RevokeIpRules"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RevokeIPRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.revoke_ip_rules_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameter_values_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_resource_state_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.access_denied_exception = out

        return res

    
    def start_workspaces(self, request: operations.StartWorkspacesRequest) -> operations.StartWorkspacesResponse:
        r"""<p>Starts the specified WorkSpaces.</p> <p>You cannot start a WorkSpace unless it has a running mode of <code>AutoStop</code> and a state of <code>STOPPED</code>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.StartWorkspaces"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StartWorkspacesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StartWorkspacesResult])
                res.start_workspaces_result = out

        return res

    
    def stop_workspaces(self, request: operations.StopWorkspacesRequest) -> operations.StopWorkspacesResponse:
        r"""<p> Stops the specified WorkSpaces.</p> <p>You cannot stop a WorkSpace unless it has a running mode of <code>AutoStop</code> and a state of <code>AVAILABLE</code>, <code>IMPAIRED</code>, <code>UNHEALTHY</code>, or <code>ERROR</code>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.StopWorkspaces"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StopWorkspacesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StopWorkspacesResult])
                res.stop_workspaces_result = out

        return res

    
    def terminate_workspaces(self, request: operations.TerminateWorkspacesRequest) -> operations.TerminateWorkspacesResponse:
        r"""<p>Terminates the specified WorkSpaces.</p> <important> <p>Terminating a WorkSpace is a permanent action and cannot be undone. The user's data is destroyed. If you need to archive any user data, contact AWS Support before terminating the WorkSpace.</p> </important> <p>You can terminate a WorkSpace that is in any state except <code>SUSPENDED</code>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have been completely terminated. After a WorkSpace is terminated, the <code>TERMINATED</code> state is returned only briefly before the WorkSpace directory metadata is cleaned up, so this state is rarely returned. To confirm that a WorkSpace is terminated, check for the WorkSpace ID by using <a href=\"https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaces.html\"> DescribeWorkSpaces</a>. If the WorkSpace ID isn't returned, then the WorkSpace has been successfully terminated.</p> <note> <p>Simple AD and AD Connector are made available to you free of charge to use with WorkSpaces. If there are no WorkSpaces being used with your Simple AD or AD Connector directory for 30 consecutive days, this directory will be automatically deregistered for use with Amazon WorkSpaces, and you will be charged for this directory as per the <a href=\"http://aws.amazon.com/directoryservice/pricing/\">AWS Directory Services pricing terms</a>.</p> <p>To delete empty directories, see <a href=\"https://docs.aws.amazon.com/workspaces/latest/adminguide/delete-workspaces-directory.html\"> Delete the Directory for Your WorkSpaces</a>. If you delete your Simple AD or AD Connector directory, you can always create a new one when you want to start using WorkSpaces again.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.TerminateWorkspaces"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TerminateWorkspacesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TerminateWorkspacesResult])
                res.terminate_workspaces_result = out

        return res

    
    def update_connection_alias_permission(self, request: operations.UpdateConnectionAliasPermissionRequest) -> operations.UpdateConnectionAliasPermissionResponse:
        r"""<p>Shares or unshares a connection alias with one account by specifying whether that account has permission to associate the connection alias with a directory. If the association permission is granted, the connection alias is shared with that account. If the association permission is revoked, the connection alias is unshared with the account. For more information, see <a href=\"https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html\"> Cross-Region Redirection for Amazon WorkSpaces</a>.</p> <note> <ul> <li> <p>Before performing this operation, call <a href=\"https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html\"> DescribeConnectionAliases</a> to make sure that the current state of the connection alias is <code>CREATED</code>.</p> </li> <li> <p>To delete a connection alias that has been shared, the shared account must first disassociate the connection alias from any directories it has been associated with. Then you must unshare the connection alias from the account it has been shared with. You can delete a connection alias only after it is no longer shared with any accounts or associated with any directories.</p> </li> </ul> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.UpdateConnectionAliasPermission"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateConnectionAliasPermissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_connection_alias_permission_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.access_denied_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameter_values_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_limit_exceeded_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_associated_exception = out
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_resource_state_exception = out
        elif r.status_code == 486:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.operation_not_supported_exception = out

        return res

    
    def update_rules_of_ip_group(self, request: operations.UpdateRulesOfIPGroupRequest) -> operations.UpdateRulesOfIPGroupResponse:
        r"""Replaces the current rules of the specified IP access control group with the specified rules.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.UpdateRulesOfIpGroup"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateRulesOfIPGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_rules_of_ip_group_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameter_values_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_limit_exceeded_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_resource_state_exception = out
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.access_denied_exception = out

        return res

    
    def update_workspace_bundle(self, request: operations.UpdateWorkspaceBundleRequest) -> operations.UpdateWorkspaceBundleResponse:
        r"""<p>Updates a WorkSpace bundle with a new image. For more information about updating WorkSpace bundles, see <a href=\"https://docs.aws.amazon.com/workspaces/latest/adminguide/update-custom-bundle.html\"> Update a Custom WorkSpaces Bundle</a>.</p> <important> <p>Existing WorkSpaces aren't automatically updated when you update the bundle that they're based on. To update existing WorkSpaces that are based on a bundle that you've updated, you must either rebuild the WorkSpaces or delete and recreate them.</p> </important>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.UpdateWorkspaceBundle"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateWorkspaceBundleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_workspace_bundle_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.access_denied_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameter_values_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_unavailable_exception = out

        return res

    
    def update_workspace_image_permission(self, request: operations.UpdateWorkspaceImagePermissionRequest) -> operations.UpdateWorkspaceImagePermissionResponse:
        r"""<p>Shares or unshares an image with one account in the same AWS Region by specifying whether that account has permission to copy the image. If the copy image permission is granted, the image is shared with that account. If the copy image permission is revoked, the image is unshared with the account.</p> <p>After an image has been shared, the recipient account can copy the image to other AWS Regions as needed.</p> <note> <p>In the China (Ningxia) Region, you can copy images only within the same Region.</p> <p>In the AWS GovCloud (US-West) Region, to copy images to and from other AWS Regions, contact AWS Support.</p> </note> <p>For more information about sharing images, see <a href=\"https://docs.aws.amazon.com/workspaces/latest/adminguide/share-custom-image.html\"> Share or Unshare a Custom WorkSpaces Image</a>.</p> <note> <ul> <li> <p>To delete an image that has been shared, you must unshare the image before you delete it.</p> </li> <li> <p>Sharing Bring Your Own License (BYOL) images across AWS accounts isn't supported at this time in the AWS GovCloud (US-West) Region. To share BYOL images across accounts in the AWS GovCloud (US-West) Region, contact AWS Support.</p> </li> </ul> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=WorkspacesService.UpdateWorkspaceImagePermission"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateWorkspaceImagePermissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_workspace_image_permission_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_unavailable_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.access_denied_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameter_values_exception = out
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.operation_not_supported_exception = out

        return res

    