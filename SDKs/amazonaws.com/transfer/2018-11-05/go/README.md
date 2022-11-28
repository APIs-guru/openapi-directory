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
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.CreateAccessRequest{
        Headers: operations.CreateAccessHeaders{
            XAmzAlgorithm: "quod",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "dolorem",
            XAmzDate: "molestias",
            XAmzSecurityToken: "dolor",
            XAmzSignature: "consequatur",
            XAmzSignedHeaders: "rem",
            XAmzTarget: "TransferService.CreateAccess",
        },
        Request: shared.CreateAccessRequest{
            ExternalID: "quaerat",
            HomeDirectory: "quia",
            HomeDirectoryMappings: []shared.HomeDirectoryMapEntry{
                shared.HomeDirectoryMapEntry{
                    Entry: "hic",
                    Target: "sunt",
                },
                shared.HomeDirectoryMapEntry{
                    Entry: "eos",
                    Target: "odio",
                },
            },
            HomeDirectoryType: "PATH",
            Policy: "reprehenderit",
            PosixProfile: &shared.PosixProfile{
                Gid: 6659964822841469656,
                SecondaryGids: []int64{
                    7283126716863424883,
                    3313831822642516207,
                },
                UID: 5414503095933566521,
            },
            Role: "quis",
            ServerID: "et",
        },
    }
    
    res, err := s.Sdk.CreateAccess(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAccessResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CreateAccess` - Used by administrators to choose which groups in the directory should have access to upload and download files over the enabled protocols using Amazon Web Services Transfer Family. For example, a Microsoft Active Directory might contain 50,000 users, but only a small fraction might need the ability to transfer files to the server. An administrator can use <code>CreateAccess</code> to limit the access to the correct set of users who need this ability.
* `CreateServer` - Instantiates an auto-scaling virtual server based on the selected file transfer protocol in Amazon Web Services. When you make updates to your file transfer protocol-enabled server or when you work with users, use the service-generated <code>ServerId</code> property that is assigned to the newly created server.
* `CreateUser` - Creates a user and associates them with an existing file transfer protocol-enabled server. You can only create and associate users with servers that have the <code>IdentityProviderType</code> set to <code>SERVICE_MANAGED</code>. Using parameters for <code>CreateUser</code>, you can specify the user name, set the home directory, store the user's public key, and assign the user's Amazon Web Services Identity and Access Management (IAM) role. You can also optionally add a session policy, and assign metadata with tags that can be used to group and search for users.
* `CreateWorkflow` -  Allows you to create a workflow with specified steps and step details the workflow invokes after file transfer completes. After creating a workflow, you can associate the workflow created with any transfer servers by specifying the <code>workflow-details</code> field in <code>CreateServer</code> and <code>UpdateServer</code> operations. 
* `DeleteAccess` - Allows you to delete the access specified in the <code>ServerID</code> and <code>ExternalID</code> parameters.
* `DeleteServer` - <p>Deletes the file transfer protocol-enabled server that you specify.</p> <p>No response returns from this operation.</p>
* `DeleteSSHPublicKey` - Deletes a user's Secure Shell (SSH) public key.
* `DeleteUser` - <p>Deletes the user belonging to a file transfer protocol-enabled server you specify.</p> <p>No response returns from this operation.</p> <note> <p>When you delete a user from a server, the user's information is lost.</p> </note>
* `DeleteWorkflow` - Deletes the specified workflow.
* `DescribeAccess` - <p>Describes the access that is assigned to the specific file transfer protocol-enabled server, as identified by its <code>ServerId</code> property and its <code>ExternalID</code>.</p> <p>The response from this call returns the properties of the access that is associated with the <code>ServerId</code> value that was specified.</p>
* `DescribeExecution` - You can use <code>DescribeExecution</code> to check the details of the execution of the specified workflow.
* `DescribeSecurityPolicy` - Describes the security policy that is attached to your file transfer protocol-enabled server. The response contains a description of the security policy's properties. For more information about security policies, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/security-policies.html">Working with security policies</a>.
* `DescribeServer` - <p>Describes a file transfer protocol-enabled server that you specify by passing the <code>ServerId</code> parameter.</p> <p>The response contains a description of a server's properties. When you set <code>EndpointType</code> to VPC, the response will contain the <code>EndpointDetails</code>.</p>
* `DescribeUser` - <p>Describes the user assigned to the specific file transfer protocol-enabled server, as identified by its <code>ServerId</code> property.</p> <p>The response from this call returns the properties of the user associated with the <code>ServerId</code> value that was specified.</p>
* `DescribeWorkflow` - Describes the specified workflow.
* `ImportSSHPublicKey` - <p>Adds a Secure Shell (SSH) public key to a user account identified by a <code>UserName</code> value assigned to the specific file transfer protocol-enabled server, identified by <code>ServerId</code>.</p> <p>The response returns the <code>UserName</code> value, the <code>ServerId</code> value, and the name of the <code>SshPublicKeyId</code>.</p>
* `ListAccesses` - Lists the details for all the accesses you have on your server.
* `ListExecutions` - Lists all executions for the specified workflow.
* `ListSecurityPolicies` - Lists the security policies that are attached to your file transfer protocol-enabled servers.
* `ListServers` - Lists the file transfer protocol-enabled servers that are associated with your Amazon Web Services account.
* `ListTagsForResource` - Lists all of the tags associated with the Amazon Resource Name (ARN) that you specify. The resource can be a user, server, or role.
* `ListUsers` - Lists the users for a file transfer protocol-enabled server that you specify by passing the <code>ServerId</code> parameter.
* `ListWorkflows` - Lists all of your workflows.
* `SendWorkflowStepState` - <p>Sends a callback for asynchronous custom steps.</p> <p> The <code>ExecutionId</code>, <code>WorkflowId</code>, and <code>Token</code> are passed to the target resource during execution of a custom step of a workflow. You must include those with their callback as well as providing a status. </p>
* `StartServer` - <p>Changes the state of a file transfer protocol-enabled server from <code>OFFLINE</code> to <code>ONLINE</code>. It has no impact on a server that is already <code>ONLINE</code>. An <code>ONLINE</code> server can accept and process file transfer jobs.</p> <p>The state of <code>STARTING</code> indicates that the server is in an intermediate state, either not fully able to respond, or not fully online. The values of <code>START_FAILED</code> can indicate an error condition.</p> <p>No response is returned from this call.</p>
* `StopServer` - <p>Changes the state of a file transfer protocol-enabled server from <code>ONLINE</code> to <code>OFFLINE</code>. An <code>OFFLINE</code> server cannot accept and process file transfer jobs. Information tied to your server, such as server and user properties, are not affected by stopping your server.</p> <note> <p>Stopping the server will not reduce or impact your file transfer protocol endpoint billing; you must delete the server to stop being billed.</p> </note> <p>The state of <code>STOPPING</code> indicates that the server is in an intermediate state, either not fully able to respond, or not fully offline. The values of <code>STOP_FAILED</code> can indicate an error condition.</p> <p>No response is returned from this call.</p>
* `TagResource` - <p>Attaches a key-value pair to a resource, as identified by its Amazon Resource Name (ARN). Resources are users, servers, roles, and other entities.</p> <p>There is no response returned from this call.</p>
* `TestIdentityProvider` - <p>If the <code>IdentityProviderType</code> of a file transfer protocol-enabled server is <code>AWS_DIRECTORY_SERVICE</code> or <code>API_Gateway</code>, tests whether your identity provider is set up successfully. We highly recommend that you call this operation to test your authentication method as soon as you create your server. By doing so, you can troubleshoot issues with the identity provider integration to ensure that your users can successfully use the service.</p> <p> The <code>ServerId</code> and <code>UserName</code> parameters are required. The <code>ServerProtocol</code>, <code>SourceIp</code>, and <code>UserPassword</code> are all optional. </p> <note> <p> You cannot use <code>TestIdentityProvider</code> if the <code>IdentityProviderType</code> of your server is <code>SERVICE_MANAGED</code>. </p> </note> <ul> <li> <p> If you provide any incorrect values for any parameters, the <code>Response</code> field is empty. </p> </li> <li> <p> If you provide a server ID for a server that uses service-managed users, you get an error: </p> <p> <code> An error occurred (InvalidRequestException) when calling the TestIdentityProvider operation: s-<i>server-ID</i> not configured for external auth </code> </p> </li> <li> <p> If you enter a Server ID for the <code>--server-id</code> parameter that does not identify an actual Transfer server, you receive the following error: </p> <p> <code>An error occurred (ResourceNotFoundException) when calling the TestIdentityProvider operation: Unknown server</code> </p> </li> </ul>
* `UntagResource` - <p>Detaches a key-value pair from a resource, as identified by its Amazon Resource Name (ARN). Resources are users, servers, roles, and other entities.</p> <p>No response is returned from this call.</p>
* `UpdateAccess` - Allows you to update parameters for the access specified in the <code>ServerID</code> and <code>ExternalID</code> parameters.
* `UpdateServer` - <p>Updates the file transfer protocol-enabled server's properties after that server has been created.</p> <p>The <code>UpdateServer</code> call returns the <code>ServerId</code> of the server you updated.</p>
* `UpdateUser` - <p>Assigns new properties to a user. Parameters you pass modify any or all of the following: the home directory, role, and policy for the <code>UserName</code> and <code>ServerId</code> you specify.</p> <p>The response returns the <code>ServerId</code> and the <code>UserName</code> for the updated user.</p>

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
