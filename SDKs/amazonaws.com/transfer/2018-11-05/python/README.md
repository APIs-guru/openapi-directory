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
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.CreateAccessRequest(
    headers=operations.CreateAccessHeaders(
        x_amz_algorithm="quod",
        x_amz_content_sha256="voluptas",
        x_amz_credential="dolorem",
        x_amz_date="molestias",
        x_amz_security_token="dolor",
        x_amz_signature="consequatur",
        x_amz_signed_headers="rem",
        x_amz_target="TransferService.CreateAccess",
    ),
    request=shared.CreateAccessRequest(
        external_id="quaerat",
        home_directory="quia",
        home_directory_mappings=[
            shared.HomeDirectoryMapEntry(
                entry="hic",
                target="sunt",
            ),
            shared.HomeDirectoryMapEntry(
                entry="eos",
                target="odio",
            ),
        ],
        home_directory_type="PATH",
        policy="reprehenderit",
        posix_profile=shared.PosixProfile(
            gid=6659964822841469656,
            secondary_gids=[
                7283126716863424883,
                3313831822642516207,
            ],
            uid=5414503095933566521,
        ),
        role="quis",
        server_id="et",
    ),
)
    
res = s.sdk.create_access(req)

if res.create_access_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `create_access` - Used by administrators to choose which groups in the directory should have access to upload and download files over the enabled protocols using Amazon Web Services Transfer Family. For example, a Microsoft Active Directory might contain 50,000 users, but only a small fraction might need the ability to transfer files to the server. An administrator can use <code>CreateAccess</code> to limit the access to the correct set of users who need this ability.
* `create_server` - Instantiates an auto-scaling virtual server based on the selected file transfer protocol in Amazon Web Services. When you make updates to your file transfer protocol-enabled server or when you work with users, use the service-generated <code>ServerId</code> property that is assigned to the newly created server.
* `create_user` - Creates a user and associates them with an existing file transfer protocol-enabled server. You can only create and associate users with servers that have the <code>IdentityProviderType</code> set to <code>SERVICE_MANAGED</code>. Using parameters for <code>CreateUser</code>, you can specify the user name, set the home directory, store the user's public key, and assign the user's Amazon Web Services Identity and Access Management (IAM) role. You can also optionally add a session policy, and assign metadata with tags that can be used to group and search for users.
* `create_workflow` -  Allows you to create a workflow with specified steps and step details the workflow invokes after file transfer completes. After creating a workflow, you can associate the workflow created with any transfer servers by specifying the <code>workflow-details</code> field in <code>CreateServer</code> and <code>UpdateServer</code> operations. 
* `delete_access` - Allows you to delete the access specified in the <code>ServerID</code> and <code>ExternalID</code> parameters.
* `delete_server` - <p>Deletes the file transfer protocol-enabled server that you specify.</p> <p>No response returns from this operation.</p>
* `delete_ssh_public_key` - Deletes a user's Secure Shell (SSH) public key.
* `delete_user` - <p>Deletes the user belonging to a file transfer protocol-enabled server you specify.</p> <p>No response returns from this operation.</p> <note> <p>When you delete a user from a server, the user's information is lost.</p> </note>
* `delete_workflow` - Deletes the specified workflow.
* `describe_access` - <p>Describes the access that is assigned to the specific file transfer protocol-enabled server, as identified by its <code>ServerId</code> property and its <code>ExternalID</code>.</p> <p>The response from this call returns the properties of the access that is associated with the <code>ServerId</code> value that was specified.</p>
* `describe_execution` - You can use <code>DescribeExecution</code> to check the details of the execution of the specified workflow.
* `describe_security_policy` - Describes the security policy that is attached to your file transfer protocol-enabled server. The response contains a description of the security policy's properties. For more information about security policies, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/security-policies.html">Working with security policies</a>.
* `describe_server` - <p>Describes a file transfer protocol-enabled server that you specify by passing the <code>ServerId</code> parameter.</p> <p>The response contains a description of a server's properties. When you set <code>EndpointType</code> to VPC, the response will contain the <code>EndpointDetails</code>.</p>
* `describe_user` - <p>Describes the user assigned to the specific file transfer protocol-enabled server, as identified by its <code>ServerId</code> property.</p> <p>The response from this call returns the properties of the user associated with the <code>ServerId</code> value that was specified.</p>
* `describe_workflow` - Describes the specified workflow.
* `import_ssh_public_key` - <p>Adds a Secure Shell (SSH) public key to a user account identified by a <code>UserName</code> value assigned to the specific file transfer protocol-enabled server, identified by <code>ServerId</code>.</p> <p>The response returns the <code>UserName</code> value, the <code>ServerId</code> value, and the name of the <code>SshPublicKeyId</code>.</p>
* `list_accesses` - Lists the details for all the accesses you have on your server.
* `list_executions` - Lists all executions for the specified workflow.
* `list_security_policies` - Lists the security policies that are attached to your file transfer protocol-enabled servers.
* `list_servers` - Lists the file transfer protocol-enabled servers that are associated with your Amazon Web Services account.
* `list_tags_for_resource` - Lists all of the tags associated with the Amazon Resource Name (ARN) that you specify. The resource can be a user, server, or role.
* `list_users` - Lists the users for a file transfer protocol-enabled server that you specify by passing the <code>ServerId</code> parameter.
* `list_workflows` - Lists all of your workflows.
* `send_workflow_step_state` - <p>Sends a callback for asynchronous custom steps.</p> <p> The <code>ExecutionId</code>, <code>WorkflowId</code>, and <code>Token</code> are passed to the target resource during execution of a custom step of a workflow. You must include those with their callback as well as providing a status. </p>
* `start_server` - <p>Changes the state of a file transfer protocol-enabled server from <code>OFFLINE</code> to <code>ONLINE</code>. It has no impact on a server that is already <code>ONLINE</code>. An <code>ONLINE</code> server can accept and process file transfer jobs.</p> <p>The state of <code>STARTING</code> indicates that the server is in an intermediate state, either not fully able to respond, or not fully online. The values of <code>START_FAILED</code> can indicate an error condition.</p> <p>No response is returned from this call.</p>
* `stop_server` - <p>Changes the state of a file transfer protocol-enabled server from <code>ONLINE</code> to <code>OFFLINE</code>. An <code>OFFLINE</code> server cannot accept and process file transfer jobs. Information tied to your server, such as server and user properties, are not affected by stopping your server.</p> <note> <p>Stopping the server will not reduce or impact your file transfer protocol endpoint billing; you must delete the server to stop being billed.</p> </note> <p>The state of <code>STOPPING</code> indicates that the server is in an intermediate state, either not fully able to respond, or not fully offline. The values of <code>STOP_FAILED</code> can indicate an error condition.</p> <p>No response is returned from this call.</p>
* `tag_resource` - <p>Attaches a key-value pair to a resource, as identified by its Amazon Resource Name (ARN). Resources are users, servers, roles, and other entities.</p> <p>There is no response returned from this call.</p>
* `test_identity_provider` - <p>If the <code>IdentityProviderType</code> of a file transfer protocol-enabled server is <code>AWS_DIRECTORY_SERVICE</code> or <code>API_Gateway</code>, tests whether your identity provider is set up successfully. We highly recommend that you call this operation to test your authentication method as soon as you create your server. By doing so, you can troubleshoot issues with the identity provider integration to ensure that your users can successfully use the service.</p> <p> The <code>ServerId</code> and <code>UserName</code> parameters are required. The <code>ServerProtocol</code>, <code>SourceIp</code>, and <code>UserPassword</code> are all optional. </p> <note> <p> You cannot use <code>TestIdentityProvider</code> if the <code>IdentityProviderType</code> of your server is <code>SERVICE_MANAGED</code>. </p> </note> <ul> <li> <p> If you provide any incorrect values for any parameters, the <code>Response</code> field is empty. </p> </li> <li> <p> If you provide a server ID for a server that uses service-managed users, you get an error: </p> <p> <code> An error occurred (InvalidRequestException) when calling the TestIdentityProvider operation: s-<i>server-ID</i> not configured for external auth </code> </p> </li> <li> <p> If you enter a Server ID for the <code>--server-id</code> parameter that does not identify an actual Transfer server, you receive the following error: </p> <p> <code>An error occurred (ResourceNotFoundException) when calling the TestIdentityProvider operation: Unknown server</code> </p> </li> </ul>
* `untag_resource` - <p>Detaches a key-value pair from a resource, as identified by its Amazon Resource Name (ARN). Resources are users, servers, roles, and other entities.</p> <p>No response is returned from this call.</p>
* `update_access` - Allows you to update parameters for the access specified in the <code>ServerID</code> and <code>ExternalID</code> parameters.
* `update_server` - <p>Updates the file transfer protocol-enabled server's properties after that server has been created.</p> <p>The <code>UpdateServer</code> call returns the <code>ServerId</code> of the server you updated.</p>
* `update_user` - <p>Assigns new properties to a user. Parameters you pass modify any or all of the following: the home directory, role, and policy for the <code>UserName</code> and <code>ServerId</code> you specify.</p> <p>The response returns the <code>ServerId</code> and the <code>UserName</code> for the updated user.</p>

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
