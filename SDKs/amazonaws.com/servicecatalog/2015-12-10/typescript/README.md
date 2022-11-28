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
import { AcceptPortfolioShareRequest, AcceptPortfolioShareResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AcceptPortfolioShareRequest = {
  headers: {
    xAmzAlgorithm: "facilis",
    xAmzContentSha256: "rerum",
    xAmzCredential: "commodi",
    xAmzDate: "non",
    xAmzSecurityToken: "rerum",
    xAmzSignature: "at",
    xAmzSignedHeaders: "debitis",
    xAmzTarget: "AWS242ServiceCatalogService.AcceptPortfolioShare",
  },
  request: {
    acceptLanguage: "dolorum",
    portfolioId: "saepe",
    portfolioShareType: "AWS_SERVICECATALOG",
  },
};

sdk.sdk.acceptPortfolioShare(req).then((res: AcceptPortfolioShareResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `acceptPortfolioShare` - Accepts an offer to share the specified portfolio.
* `associateBudgetWithResource` - Associates the specified budget with the specified resource.
* `associatePrincipalWithPortfolio` - Associates the specified principal ARN with the specified portfolio.
* `associateProductWithPortfolio` - <p>Associates the specified product with the specified portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>
* `associateServiceActionWithProvisioningArtifact` - Associates a self-service action with a provisioning artifact.
* `associateTagOptionWithResource` - Associate the specified TagOption with the specified portfolio or product.
* `batchAssociateServiceActionWithProvisioningArtifact` - Associates multiple self-service actions with provisioning artifacts.
* `batchDisassociateServiceActionFromProvisioningArtifact` - Disassociates a batch of self-service actions from the specified provisioning artifact.
* `copyProduct` - <p>Copies the specified source product to the specified target product or a new product.</p> <p>You can copy a product to the same account or another account. You can copy a product to the same region or another region.</p> <p>This operation is performed asynchronously. To track the progress of the operation, use <a>DescribeCopyProductStatus</a>.</p>
* `createConstraint` - <p>Creates a constraint.</p> <p>A delegated admin is authorized to invoke this command.</p>
* `createPortfolio` - <p>Creates a portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>
* `createPortfolioShare` - <p>Shares the specified portfolio with the specified account or organization node. Shares to an organization node can only be created by the management account of an organization or by a delegated administrator. You can share portfolios to an organization, an organizational unit, or a specific account.</p> <p>Note that if a delegated admin is de-registered, they can no longer create portfolio shares.</p> <p> <code>AWSOrganizationsAccess</code> must be enabled in order to create a portfolio share to an organization node.</p> <p>You can't share a shared resource, including portfolios that contain a shared product.</p> <p>If the portfolio share with the specified account or organization node already exists, this action will have no effect and will not return an error. To update an existing share, you must use the <code> UpdatePortfolioShare</code> API instead.</p>
* `createProduct` - <p>Creates a product.</p> <p>A delegated admin is authorized to invoke this command.</p> <p>The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code> IAM policy permission. This policy permission is required when using the <code>ImportFromPhysicalId</code> template source in the information data section.</p>
* `createProvisionedProductPlan` - <p>Creates a plan. A plan includes the list of resources to be created (when provisioning a new product) or modified (when updating a provisioned product) when the plan is executed.</p> <p>You can create one plan per provisioned product. To create a plan for an existing provisioned product, the product status must be AVAILBLE or TAINTED.</p> <p>To view the resource changes in the change set, use <a>DescribeProvisionedProductPlan</a>. To create or modify the provisioned product, use <a>ExecuteProvisionedProductPlan</a>.</p>
* `createProvisioningArtifact` - <p>Creates a provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot create a provisioning artifact for a product that was shared with you.</p> <p>The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code> IAM policy permission. This policy permission is required when using the <code>ImportFromPhysicalId</code> template source in the information data section.</p>
* `createServiceAction` - Creates a self-service action.
* `createTagOption` - Creates a TagOption.
* `deleteConstraint` - <p>Deletes the specified constraint.</p> <p>A delegated admin is authorized to invoke this command.</p>
* `deletePortfolio` - <p>Deletes the specified portfolio.</p> <p>You cannot delete a portfolio if it was shared with you or if it has associated products, users, constraints, or shared accounts.</p> <p>A delegated admin is authorized to invoke this command.</p>
* `deletePortfolioShare` - <p>Stops sharing the specified portfolio with the specified account or organization node. Shares to an organization node can only be deleted by the management account of an organization or by a delegated administrator.</p> <p>Note that if a delegated admin is de-registered, portfolio shares created from that account are removed.</p>
* `deleteProduct` - <p>Deletes the specified product.</p> <p>You cannot delete a product if it was shared with you or is associated with a portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>
* `deleteProvisionedProductPlan` - Deletes the specified plan.
* `deleteProvisioningArtifact` - <p>Deletes the specified provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot delete a provisioning artifact associated with a product that was shared with you. You cannot delete the last provisioning artifact for a product, because a product must have at least one provisioning artifact.</p>
* `deleteServiceAction` - Deletes a self-service action.
* `deleteTagOption` - <p>Deletes the specified TagOption.</p> <p>You cannot delete a TagOption if it is associated with a product or portfolio.</p>
* `describeConstraint` - Gets information about the specified constraint.
* `describeCopyProductStatus` - Gets the status of the specified copy product operation.
* `describePortfolio` - <p>Gets information about the specified portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>
* `describePortfolioShareStatus` - Gets the status of the specified portfolio share operation. This API can only be called by the management account in the organization or by a delegated admin.
* `describePortfolioShares` - <p>Returns a summary of each of the portfolio shares that were created for the specified portfolio.</p> <p>You can use this API to determine which accounts or organizational nodes this portfolio have been shared, whether the recipient entity has imported the share, and whether TagOptions are included with the share.</p> <p>The <code>PortfolioId</code> and <code>Type</code> parameters are both required.</p>
* `describeProduct` - Gets information about the specified product.
* `describeProductAsAdmin` - Gets information about the specified product. This operation is run with administrator access.
* `describeProductView` - Gets information about the specified product.
* `describeProvisionedProduct` - Gets information about the specified provisioned product.
* `describeProvisionedProductPlan` - Gets information about the resource changes for the specified plan.
* `describeProvisioningArtifact` - Gets information about the specified provisioning artifact (also known as a version) for the specified product.
* `describeProvisioningParameters` - <p>Gets information about the configuration required to provision the specified product using the specified provisioning artifact.</p> <p>If the output contains a TagOption key with an empty list of values, there is a TagOption conflict for that key. The end user cannot take action to fix the conflict, and launch is not blocked. In subsequent calls to <a>ProvisionProduct</a>, do not include conflicted TagOption keys as tags, or this causes the error "Parameter validation failed: Missing required parameter in Tags[<i>N</i>]:<i>Value</i>". Tag the provisioned product with the value <code>sc-tagoption-conflict-portfolioId-productId</code>.</p>
* `describeRecord` - <p>Gets information about the specified request operation.</p> <p>Use this operation after calling a request operation (for example, <a>ProvisionProduct</a>, <a>TerminateProvisionedProduct</a>, or <a>UpdateProvisionedProduct</a>). </p> <note> <p>If a provisioned product was transferred to a new owner using <a>UpdateProvisionedProductProperties</a>, the new owner will be able to describe all past records for that product. The previous owner will no longer be able to describe the records, but will be able to use <a>ListRecordHistory</a> to see the product's history from when he was the owner.</p> </note>
* `describeServiceAction` - Describes a self-service action.
* `describeServiceActionExecutionParameters` - Finds the default parameters for a specific self-service action on a specific provisioned product and returns a map of the results to the user.
* `describeTagOption` - Gets information about the specified TagOption.
* `disableAwsOrganizationsAccess` - <p>Disable portfolio sharing through AWS Organizations feature. This feature will not delete your current shares but it will prevent you from creating new shares throughout your organization. Current shares will not be in sync with your organization structure if it changes after calling this API. This API can only be called by the management account in the organization.</p> <p>This API can't be invoked if there are active delegated administrators in the organization.</p> <p>Note that a delegated administrator is not authorized to invoke <code>DisableAWSOrganizationsAccess</code>.</p>
* `disassociateBudgetFromResource` - Disassociates the specified budget from the specified resource.
* `disassociatePrincipalFromPortfolio` - Disassociates a previously associated principal ARN from a specified portfolio.
* `disassociateProductFromPortfolio` - <p>Disassociates the specified product from the specified portfolio. </p> <p>A delegated admin is authorized to invoke this command.</p>
* `disassociateServiceActionFromProvisioningArtifact` - Disassociates the specified self-service action association from the specified provisioning artifact.
* `disassociateTagOptionFromResource` - Disassociates the specified TagOption from the specified resource.
* `enableAwsOrganizationsAccess` - <p>Enable portfolio sharing feature through AWS Organizations. This API will allow Service Catalog to receive updates on your organization in order to sync your shares with the current structure. This API can only be called by the management account in the organization.</p> <p>By calling this API Service Catalog will make a call to organizations:EnableAWSServiceAccess on your behalf so that your shares can be in sync with any changes in your AWS Organizations structure.</p> <p>Note that a delegated administrator is not authorized to invoke <code>EnableAWSOrganizationsAccess</code>.</p>
* `executeProvisionedProductPlan` - Provisions or modifies a product based on the resource changes for the specified plan.
* `executeProvisionedProductServiceAction` - Executes a self-service action against a provisioned product.
* `getAwsOrganizationsAccessStatus` - Get the Access Status for AWS Organization portfolio share feature. This API can only be called by the management account in the organization or by a delegated admin.
* `getProvisionedProductOutputs` - This API takes either a <code>ProvisonedProductId</code> or a <code>ProvisionedProductName</code>, along with a list of one or more output keys, and responds with the key/value pairs of those outputs.
* `importAsProvisionedProduct` - <p>Requests the import of a resource as a Service Catalog provisioned product that is associated to a Service Catalog product and provisioning artifact. Once imported, all supported Service Catalog governance actions are supported on the provisioned product.</p> <p>Resource import only supports CloudFormation stack ARNs. CloudFormation StackSets and non-root nested stacks are not supported.</p> <p>The CloudFormation stack must have one of the following statuses to be imported: <code>CREATE_COMPLETE</code>, <code>UPDATE_COMPLETE</code>, <code>UPDATE_ROLLBACK_COMPLETE</code>, <code>IMPORT_COMPLETE</code>, <code>IMPORT_ROLLBACK_COMPLETE</code>.</p> <p>Import of the resource requires that the CloudFormation stack template matches the associated Service Catalog product provisioning artifact. </p> <p>The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code> and <code>cloudformation:DescribeStacks</code> IAM policy permissions. </p>
* `listAcceptedPortfolioShares` - Lists all portfolios for which sharing was accepted by this account.
* `listBudgetsForResource` - Lists all the budgets associated to the specified resource.
* `listConstraintsForPortfolio` - Lists the constraints for the specified portfolio and product.
* `listLaunchPaths` - Lists the paths to the specified product. A path is how the user has access to a specified product, and is necessary when provisioning a product. A path also determines the constraints put on the product.
* `listOrganizationPortfolioAccess` - <p>Lists the organization nodes that have access to the specified portfolio. This API can only be called by the management account in the organization or by a delegated admin.</p> <p>If a delegated admin is de-registered, they can no longer perform this operation.</p>
* `listPortfolioAccess` - <p>Lists the account IDs that have access to the specified portfolio.</p> <p>A delegated admin can list the accounts that have access to the shared portfolio. Note that if a delegated admin is de-registered, they can no longer perform this operation.</p>
* `listPortfolios` - Lists all portfolios in the catalog.
* `listPortfoliosForProduct` - Lists all portfolios that the specified product is associated with.
* `listPrincipalsForPortfolio` - Lists all principal ARNs associated with the specified portfolio.
* `listProvisionedProductPlans` - Lists the plans for the specified provisioned product or all plans to which the user has access.
* `listProvisioningArtifacts` - Lists all provisioning artifacts (also known as versions) for the specified product.
* `listProvisioningArtifactsForServiceAction` - Lists all provisioning artifacts (also known as versions) for the specified self-service action.
* `listRecordHistory` - Lists the specified requests or all performed requests.
* `listResourcesForTagOption` - Lists the resources associated with the specified TagOption.
* `listServiceActions` - Lists all self-service actions.
* `listServiceActionsForProvisioningArtifact` - Returns a paginated list of self-service actions associated with the specified Product ID and Provisioning Artifact ID.
* `listStackInstancesForProvisionedProduct` - Returns summary information about stack instances that are associated with the specified <code>CFN_STACKSET</code> type provisioned product. You can filter for stack instances that are associated with a specific AWS account name or region. 
* `listTagOptions` - Lists the specified TagOptions or all TagOptions.
* `provisionProduct` - <p>Provisions the specified product.</p> <p>A provisioned product is a resourced instance of a product. For example, provisioning a product based on a CloudFormation template launches a CloudFormation stack and its underlying resources. You can check the status of this request using <a>DescribeRecord</a>.</p> <p>If the request contains a tag key with an empty list of values, there is a tag conflict for that key. Do not include conflicted keys as tags, or this causes the error "Parameter validation failed: Missing required parameter in Tags[<i>N</i>]:<i>Value</i>".</p>
* `rejectPortfolioShare` - Rejects an offer to share the specified portfolio.
* `scanProvisionedProducts` - <p>Lists the provisioned products that are available (not terminated).</p> <p>To use additional filtering, see <a>SearchProvisionedProducts</a>.</p>
* `searchProducts` - Gets information about the products to which the caller has access.
* `searchProductsAsAdmin` - Gets information about the products for the specified portfolio or all products.
* `searchProvisionedProducts` - Gets information about the provisioned products that meet the specified criteria.
* `terminateProvisionedProduct` - <p>Terminates the specified provisioned product.</p> <p>This operation does not delete any records associated with the provisioned product.</p> <p>You can check the status of this request using <a>DescribeRecord</a>.</p>
* `updateConstraint` - Updates the specified constraint.
* `updatePortfolio` - <p>Updates the specified portfolio.</p> <p>You cannot update a product that was shared with you.</p>
* `updatePortfolioShare` - <p>Updates the specified portfolio share. You can use this API to enable or disable TagOptions sharing for an existing portfolio share. </p> <p>The portfolio share cannot be updated if the <code> CreatePortfolioShare</code> operation is <code>IN_PROGRESS</code>, as the share is not available to recipient entities. In this case, you must wait for the portfolio share to be COMPLETED.</p> <p>You must provide the <code>accountId</code> or organization node in the input, but not both.</p> <p>If the portfolio is shared to both an external account and an organization node, and both shares need to be updated, you must invoke <code>UpdatePortfolioShare</code> separately for each share type. </p> <p>This API cannot be used for removing the portfolio share. You must use <code>DeletePortfolioShare</code> API for that action. </p>
* `updateProduct` - Updates the specified product.
* `updateProvisionedProduct` - <p>Requests updates to the configuration of the specified provisioned product.</p> <p>If there are tags associated with the object, they cannot be updated or added. Depending on the specific updates requested, this operation can update with no interruption, with some interruption, or replace the provisioned product entirely.</p> <p>You can check the status of this request using <a>DescribeRecord</a>.</p>
* `updateProvisionedProductProperties` - Requests updates to the properties of the specified provisioned product.
* `updateProvisioningArtifact` - <p>Updates the specified provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot update a provisioning artifact for a product that was shared with you.</p>
* `updateServiceAction` - Updates a self-service action.
* `updateTagOption` - Updates the specified TagOption.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
