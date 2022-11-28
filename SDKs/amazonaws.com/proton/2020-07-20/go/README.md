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
    
    req := operations.AcceptEnvironmentAccountConnectionRequest{
        Headers: operations.AcceptEnvironmentAccountConnectionHeaders{
            XAmzAlgorithm: "numquam",
            XAmzContentSha256: "quod",
            XAmzCredential: "quisquam",
            XAmzDate: "ex",
            XAmzSecurityToken: "id",
            XAmzSignature: "ea",
            XAmzSignedHeaders: "non",
            XAmzTarget: "AwsProton20200720.AcceptEnvironmentAccountConnection",
        },
        Request: shared.AcceptEnvironmentAccountConnectionInput{
            ID: "quam",
        },
    }
    
    res, err := s.Sdk.AcceptEnvironmentAccountConnection(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptEnvironmentAccountConnectionOutput != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `AcceptEnvironmentAccountConnection` - <p>In a management account, an environment account connection request is accepted. When the environment account connection request is accepted, AWS Proton can use the associated IAM role to provision environment infrastructure resources in the associated environment account.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/adminguide/ag-env-account-connections.html">Environment account connections</a> in the <i>AWS Proton Administrator guide</i>.</p>
* `CancelEnvironmentDeployment` - <p>Attempts to cancel an environment deployment on an <a>UpdateEnvironment</a> action, if the deployment is <code>IN_PROGRESS</code>. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/adminguide/ag-env-update.html">Update an environment</a> in the <i>AWS Proton Administrator guide</i>.</p> <p>The following list includes potential cancellation scenarios.</p> <ul> <li> <p>If the cancellation attempt succeeds, the resulting deployment state is <code>CANCELLED</code>.</p> </li> <li> <p>If the cancellation attempt fails, the resulting deployment state is <code>FAILED</code>.</p> </li> <li> <p>If the current <a>UpdateEnvironment</a> action succeeds before the cancellation attempt starts, the resulting deployment state is <code>SUCCEEDED</code> and the cancellation attempt has no effect.</p> </li> </ul>
* `CancelServiceInstanceDeployment` - <p>Attempts to cancel a service instance deployment on an <a>UpdateServiceInstance</a> action, if the deployment is <code>IN_PROGRESS</code>. For more information, see <i>Update a service instance</i> in the <a href="https://docs.aws.amazon.com/proton/latest/adminguide/ag-svc-instance-update.html">AWS Proton Administrator guide</a> or the <a href="https://docs.aws.amazon.com/proton/latest/userguide/ug-svc-instance-update.html">AWS Proton User guide</a>.</p> <p>The following list includes potential cancellation scenarios.</p> <ul> <li> <p>If the cancellation attempt succeeds, the resulting deployment state is <code>CANCELLED</code>.</p> </li> <li> <p>If the cancellation attempt fails, the resulting deployment state is <code>FAILED</code>.</p> </li> <li> <p>If the current <a>UpdateServiceInstance</a> action succeeds before the cancellation attempt starts, the resulting deployment state is <code>SUCCEEDED</code> and the cancellation attempt has no effect.</p> </li> </ul>
* `CancelServicePipelineDeployment` - <p>Attempts to cancel a service pipeline deployment on an <a>UpdateServicePipeline</a> action, if the deployment is <code>IN_PROGRESS</code>. For more information, see <i>Update a service pipeline</i> in the <a href="https://docs.aws.amazon.com/proton/latest/adminguide/ag-svc-pipeline-update.html">AWS Proton Administrator guide</a> or the <a href="https://docs.aws.amazon.com/proton/latest/userguide/ug-svc-pipeline-update.html">AWS Proton User guide</a>.</p> <p>The following list includes potential cancellation scenarios.</p> <ul> <li> <p>If the cancellation attempt succeeds, the resulting deployment state is <code>CANCELLED</code>.</p> </li> <li> <p>If the cancellation attempt fails, the resulting deployment state is <code>FAILED</code>.</p> </li> <li> <p>If the current <a>UpdateServicePipeline</a> action succeeds before the cancellation attempt starts, the resulting deployment state is <code>SUCCEEDED</code> and the cancellation attempt has no effect.</p> </li> </ul>
* `CreateEnvironment` - Deploy a new environment. An AWS Proton environment is created from an environment template that defines infrastructure and resources that can be shared across services. For more information, see the <a href="https://docs.aws.amazon.com/proton/latest/adminguide/ag-environments.html">Environments</a> in the <i>AWS Proton Administrator Guide.</i> 
* `CreateEnvironmentAccountConnection` - <p>Create an environment account connection in an environment account so that environment infrastructure resources can be provisioned in the environment account from a management account.</p> <p>An environment account connection is a secure bi-directional connection between a <i>management account</i> and an <i>environment account</i> that maintains authorization and permissions. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/adminguide/ag-env-account-connections.html">Environment account connections</a> in the <i>AWS Proton Administrator guide</i>.</p>
* `CreateEnvironmentTemplate` - <p>Create an environment template for AWS Proton. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/adminguide/ag-templates.html">Environment Templates</a> in the <i>AWS Proton Administrator Guide</i>.</p> <p>You can create an environment template in one of the two following ways:</p> <ul> <li> <p>Register and publish a <i>standard</i> environment template that instructs AWS Proton to deploy and manage environment infrastructure.</p> </li> <li> <p>Register and publish a <i>customer managed</i> environment template that connects AWS Proton to your existing provisioned infrastructure that you manage. AWS Proton <i>doesn't</i> manage your existing provisioned infrastructure. To create an environment template for customer provisioned and managed infrastructure, include the <code>provisioning</code> parameter and set the value to <code>CUSTOMER_MANAGED</code>. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/adminguide/template-create.html">Register and publish an environment template</a> in the <i>AWS Proton Administrator Guide</i>.</p> </li> </ul>
* `CreateEnvironmentTemplateVersion` - Create a new major or minor version of an environment template. A major version of an environment template is a version that <i>isn't</i> backwards compatible. A minor version of an environment template is a version that's backwards compatible within its major version.
* `CreateService` - Create an AWS Proton service. An AWS Proton service is an instantiation of a service template and often includes several service instances and pipeline. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/adminguide/ag-services.html">Services</a> in the <i>AWS Proton Administrator Guide</i> and <a href="https://docs.aws.amazon.com/proton/latest/userguide/ug-service.html">Services</a> in the <i>AWS Proton User Guide</i>.
* `CreateServiceTemplate` - Create a service template. The administrator creates a service template to define standardized infrastructure and an optional CICD service pipeline. Developers, in turn, select the service template from AWS Proton. If the selected service template includes a service pipeline definition, they provide a link to their source code repository. AWS Proton then deploys and manages the infrastructure defined by the selected service template. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/adminguide/managing-svc-templates.html">Service Templates</a> in the <i>AWS Proton Administrator Guide</i>.
* `CreateServiceTemplateVersion` - Create a new major or minor version of a service template. A major version of a service template is a version that <i>isn't</i> backwards compatible. A minor version of a service template is a version that's backwards compatible within its major version.
* `DeleteEnvironment` - Delete an environment.
* `DeleteEnvironmentAccountConnection` - <p>In an environment account, delete an environment account connection.</p> <p>After you delete an environment account connection that’s in use by an AWS Proton environment, AWS Proton <i>can’t</i> manage the environment infrastructure resources until a new environment account connection is accepted for the environment account and associated environment. You're responsible for cleaning up provisioned resources that remain without an environment connection.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/adminguide/ag-env-account-connections.html">Environment account connections</a> in the <i>AWS Proton Administrator guide</i>.</p>
* `DeleteEnvironmentTemplate` - If no other major or minor versions of an environment template exist, delete the environment template.
* `DeleteEnvironmentTemplateVersion` - <p>If no other minor versions of an environment template exist, delete a major version of the environment template if it's not the <code>Recommended</code> version. Delete the <code>Recommended</code> version of the environment template if no other major versions or minor versions of the environment template exist. A major version of an environment template is a version that's not backwards compatible.</p> <p>Delete a minor version of an environment template if it <i>isn't</i> the <code>Recommended</code> version. Delete a <code>Recommended</code> minor version of the environment template if no other minor versions of the environment template exist. A minor version of an environment template is a version that's backwards compatible.</p>
* `DeleteService` - Delete a service.
* `DeleteServiceTemplate` - If no other major or minor versions of the service template exist, delete the service template.
* `DeleteServiceTemplateVersion` - <p>If no other minor versions of a service template exist, delete a major version of the service template if it's not the <code>Recommended</code> version. Delete the <code>Recommended</code> version of the service template if no other major versions or minor versions of the service template exist. A major version of a service template is a version that <i>isn't</i> backwards compatible.</p> <p>Delete a minor version of a service template if it's not the <code>Recommended</code> version. Delete a <code>Recommended</code> minor version of the service template if no other minor versions of the service template exist. A minor version of a service template is a version that's backwards compatible.</p>
* `GetAccountSettings` - Get detail data for the AWS Proton pipeline service role.
* `GetEnvironment` - Get detail data for an environment.
* `GetEnvironmentAccountConnection` - <p>In an environment account, view the detail data for an environment account connection.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/adminguide/ag-env-account-connections.html">Environment account connections</a> in the <i>AWS Proton Administrator guide</i>.</p>
* `GetEnvironmentTemplate` - Get detail data for an environment template.
* `GetEnvironmentTemplateVersion` - View detail data for a major or minor version of an environment template.
* `GetService` - Get detail data for a service.
* `GetServiceInstance` - Get detail data for a service instance. A service instance is an instantiation of service template, which is running in a specific environment.
* `GetServiceTemplate` - Get detail data for a service template.
* `GetServiceTemplateVersion` - View detail data for a major or minor version of a service template.
* `ListEnvironmentAccountConnections` - <p>View a list of environment account connections.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/adminguide/ag-env-account-connections.html">Environment account connections</a> in the <i>AWS Proton Administrator guide</i>.</p>
* `ListEnvironmentTemplateVersions` - List major or minor versions of an environment template with detail data.
* `ListEnvironmentTemplates` - List environment templates.
* `ListEnvironments` - List environments with detail data summaries.
* `ListServiceInstances` - List service instances with summaries of detail data.
* `ListServiceTemplateVersions` - List major or minor versions of a service template with detail data.
* `ListServiceTemplates` - List service templates with detail data.
* `ListServices` - List services with summaries of detail data.
* `ListTagsForResource` - List tags for a resource. For more information, see <i>AWS Proton resources and tagging</i> in the <a href="https://docs.aws.amazon.com/proton/latest/adminguide/resources.html">AWS Proton Administrator Guide</a> or <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">AWS Proton User Guide</a>.
* `RejectEnvironmentAccountConnection` - <p>In a management account, reject an environment account connection from another environment account.</p> <p>After you reject an environment account connection request, you <i>won’t</i> be able to accept or use the rejected environment account connection.</p> <p>You <i>can’t</i> reject an environment account connection that is connected to an environment.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/adminguide/ag-env-account-connections.html">Environment account connections</a> in the <i>AWS Proton Administrator guide</i>.</p>
* `TagResource` - Tag a resource. For more information, see <i>AWS Proton resources and tagging</i> in the <a href="https://docs.aws.amazon.com/proton/latest/adminguide/resources.html">AWS Proton Administrator Guide</a> or <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">AWS Proton User Guide</a>.
* `UntagResource` - Remove a tag from a resource. For more information, see <i>AWS Proton resources and tagging</i> in the <a href="https://docs.aws.amazon.com/proton/latest/adminguide/resources.html">AWS Proton Administrator Guide</a> or <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">AWS Proton User Guide</a>.
* `UpdateAccountSettings` - Update the AWS Proton pipeline service account settings.
* `UpdateEnvironment` - <p>Update an environment.</p> <p>If the environment is associated with an environment account connection, <i>don't</i> update or include the <code>protonServiceRoleArn</code> parameter to update or connect to an environment account connection. </p> <p>You can only update to a new environment account connection if it was created in the same environment account that the current environment account connection was created in and is associated with the current environment.</p> <p>If the environment <i>isn't</i> associated with an environment account connection, <i>don't</i> update or include the <code>environmentAccountConnectionId</code> parameter to update or connect to an environment account connection.</p> <p>You can update either the <code>environmentAccountConnectionId</code> or <code>protonServiceRoleArn</code> parameter and value. You can’t update both.</p> <p>There are four modes for updating an environment as described in the following. The <code>deploymentType</code> field defines the mode.</p> <dl> <dt/> <dd> <p> <code>NONE</code> </p> <p>In this mode, a deployment <i>doesn't</i> occur. Only the requested metadata parameters are updated.</p> </dd> <dt/> <dd> <p> <code>CURRENT_VERSION</code> </p> <p>In this mode, the environment is deployed and updated with the new spec that you provide. Only requested parameters are updated. <i>Don’t</i> include minor or major version parameters when you use this <code>deployment-type</code>.</p> </dd> <dt/> <dd> <p> <code>MINOR_VERSION</code> </p> <p>In this mode, the environment is deployed and updated with the published, recommended (latest) minor version of the current major version in use, by default. You can also specify a different minor version of the current major version in use.</p> </dd> <dt/> <dd> <p> <code>MAJOR_VERSION</code> </p> <p>In this mode, the environment is deployed and updated with the published, recommended (latest) major and minor version of the current template, by default. You can also specify a different major version that's higher than the major version in use and a minor version (optional).</p> </dd> </dl>
* `UpdateEnvironmentAccountConnection` - <p>In an environment account, update an environment account connection to use a new IAM role.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/adminguide/ag-env-account-connections.html">Environment account connections</a> in the <i>AWS Proton Administrator guide</i>.</p>
* `UpdateEnvironmentTemplate` - Update an environment template.
* `UpdateEnvironmentTemplateVersion` - Update a major or minor version of an environment template.
* `UpdateService` - <p>Edit a service description or use a spec to add and delete service instances.</p> <note> <p>Existing service instances and the service pipeline <i>can't</i> be edited using this API. They can only be deleted.</p> </note> <p>Use the <code>description</code> parameter to modify the description.</p> <p>Edit the <code>spec</code> parameter to add or delete instances.</p>
* `UpdateServiceInstance` - <p>Update a service instance.</p> <p>There are four modes for updating a service instance as described in the following. The <code>deploymentType</code> field defines the mode.</p> <dl> <dt/> <dd> <p> <code>NONE</code> </p> <p>In this mode, a deployment <i>doesn't</i> occur. Only the requested metadata parameters are updated.</p> </dd> <dt/> <dd> <p> <code>CURRENT_VERSION</code> </p> <p>In this mode, the service instance is deployed and updated with the new spec that you provide. Only requested parameters are updated. <i>Don’t</i> include minor or major version parameters when you use this <code>deployment-type</code>.</p> </dd> <dt/> <dd> <p> <code>MINOR_VERSION</code> </p> <p>In this mode, the service instance is deployed and updated with the published, recommended (latest) minor version of the current major version in use, by default. You can also specify a different minor version of the current major version in use.</p> </dd> <dt/> <dd> <p> <code>MAJOR_VERSION</code> </p> <p>In this mode, the service instance is deployed and updated with the published, recommended (latest) major and minor version of the current template, by default. You can also specify a different major version that is higher than the major version in use and a minor version (optional).</p> </dd> </dl>
* `UpdateServicePipeline` - <p>Update the service pipeline.</p> <p>There are four modes for updating a service pipeline as described in the following. The <code>deploymentType</code> field defines the mode.</p> <dl> <dt/> <dd> <p> <code>NONE</code> </p> <p>In this mode, a deployment <i>doesn't</i> occur. Only the requested metadata parameters are updated.</p> </dd> <dt/> <dd> <p> <code>CURRENT_VERSION</code> </p> <p>In this mode, the service pipeline is deployed and updated with the new spec that you provide. Only requested parameters are updated. <i>Don’t</i> include minor or major version parameters when you use this <code>deployment-type</code>.</p> </dd> <dt/> <dd> <p> <code>MINOR_VERSION</code> </p> <p>In this mode, the service pipeline is deployed and updated with the published, recommended (latest) minor version of the current major version in use, by default. You can also specify a different minor version of the current major version in use.</p> </dd> <dt/> <dd> <p> <code>MAJOR_VERSION</code> </p> <p>In this mode, the service pipeline is deployed and updated with the published, recommended (latest) major and minor version of the current template by default. You can also specify a different major version that is higher than the major version in use and a minor version (optional).</p> </dd> </dl>
* `UpdateServiceTemplate` - Update a service template.
* `UpdateServiceTemplateVersion` - Update a major or minor version of a service template.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
