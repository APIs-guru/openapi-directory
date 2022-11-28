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
    
req = operations.AcceptPortfolioShareRequest(
    headers=operations.AcceptPortfolioShareHeaders(
        x_amz_algorithm="facilis",
        x_amz_content_sha256="rerum",
        x_amz_credential="commodi",
        x_amz_date="non",
        x_amz_security_token="rerum",
        x_amz_signature="at",
        x_amz_signed_headers="debitis",
        x_amz_target="AWS242ServiceCatalogService.AcceptPortfolioShare",
    ),
    request=shared.AcceptPortfolioShareInput(
        accept_language="dolorum",
        portfolio_id="saepe",
        portfolio_share_type="AWS_SERVICECATALOG",
    ),
)
    
res = s.sdk.accept_portfolio_share(req)

if res.accept_portfolio_share_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `accept_portfolio_share` - Accepts an offer to share the specified portfolio.
* `associate_budget_with_resource` - Associates the specified budget with the specified resource.
* `associate_principal_with_portfolio` - Associates the specified principal ARN with the specified portfolio.
* `associate_product_with_portfolio` - <p>Associates the specified product with the specified portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>
* `associate_service_action_with_provisioning_artifact` - Associates a self-service action with a provisioning artifact.
* `associate_tag_option_with_resource` - Associate the specified TagOption with the specified portfolio or product.
* `batch_associate_service_action_with_provisioning_artifact` - Associates multiple self-service actions with provisioning artifacts.
* `batch_disassociate_service_action_from_provisioning_artifact` - Disassociates a batch of self-service actions from the specified provisioning artifact.
* `copy_product` - <p>Copies the specified source product to the specified target product or a new product.</p> <p>You can copy a product to the same account or another account. You can copy a product to the same region or another region.</p> <p>This operation is performed asynchronously. To track the progress of the operation, use <a>DescribeCopyProductStatus</a>.</p>
* `create_constraint` - <p>Creates a constraint.</p> <p>A delegated admin is authorized to invoke this command.</p>
* `create_portfolio` - <p>Creates a portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>
* `create_portfolio_share` - <p>Shares the specified portfolio with the specified account or organization node. Shares to an organization node can only be created by the management account of an organization or by a delegated administrator. You can share portfolios to an organization, an organizational unit, or a specific account.</p> <p>Note that if a delegated admin is de-registered, they can no longer create portfolio shares.</p> <p> <code>AWSOrganizationsAccess</code> must be enabled in order to create a portfolio share to an organization node.</p> <p>You can't share a shared resource, including portfolios that contain a shared product.</p> <p>If the portfolio share with the specified account or organization node already exists, this action will have no effect and will not return an error. To update an existing share, you must use the <code> UpdatePortfolioShare</code> API instead.</p>
* `create_product` - <p>Creates a product.</p> <p>A delegated admin is authorized to invoke this command.</p> <p>The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code> IAM policy permission. This policy permission is required when using the <code>ImportFromPhysicalId</code> template source in the information data section.</p>
* `create_provisioned_product_plan` - <p>Creates a plan. A plan includes the list of resources to be created (when provisioning a new product) or modified (when updating a provisioned product) when the plan is executed.</p> <p>You can create one plan per provisioned product. To create a plan for an existing provisioned product, the product status must be AVAILBLE or TAINTED.</p> <p>To view the resource changes in the change set, use <a>DescribeProvisionedProductPlan</a>. To create or modify the provisioned product, use <a>ExecuteProvisionedProductPlan</a>.</p>
* `create_provisioning_artifact` - <p>Creates a provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot create a provisioning artifact for a product that was shared with you.</p> <p>The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code> IAM policy permission. This policy permission is required when using the <code>ImportFromPhysicalId</code> template source in the information data section.</p>
* `create_service_action` - Creates a self-service action.
* `create_tag_option` - Creates a TagOption.
* `delete_constraint` - <p>Deletes the specified constraint.</p> <p>A delegated admin is authorized to invoke this command.</p>
* `delete_portfolio` - <p>Deletes the specified portfolio.</p> <p>You cannot delete a portfolio if it was shared with you or if it has associated products, users, constraints, or shared accounts.</p> <p>A delegated admin is authorized to invoke this command.</p>
* `delete_portfolio_share` - <p>Stops sharing the specified portfolio with the specified account or organization node. Shares to an organization node can only be deleted by the management account of an organization or by a delegated administrator.</p> <p>Note that if a delegated admin is de-registered, portfolio shares created from that account are removed.</p>
* `delete_product` - <p>Deletes the specified product.</p> <p>You cannot delete a product if it was shared with you or is associated with a portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>
* `delete_provisioned_product_plan` - Deletes the specified plan.
* `delete_provisioning_artifact` - <p>Deletes the specified provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot delete a provisioning artifact associated with a product that was shared with you. You cannot delete the last provisioning artifact for a product, because a product must have at least one provisioning artifact.</p>
* `delete_service_action` - Deletes a self-service action.
* `delete_tag_option` - <p>Deletes the specified TagOption.</p> <p>You cannot delete a TagOption if it is associated with a product or portfolio.</p>
* `describe_constraint` - Gets information about the specified constraint.
* `describe_copy_product_status` - Gets the status of the specified copy product operation.
* `describe_portfolio` - <p>Gets information about the specified portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>
* `describe_portfolio_share_status` - Gets the status of the specified portfolio share operation. This API can only be called by the management account in the organization or by a delegated admin.
* `describe_portfolio_shares` - <p>Returns a summary of each of the portfolio shares that were created for the specified portfolio.</p> <p>You can use this API to determine which accounts or organizational nodes this portfolio have been shared, whether the recipient entity has imported the share, and whether TagOptions are included with the share.</p> <p>The <code>PortfolioId</code> and <code>Type</code> parameters are both required.</p>
* `describe_product` - Gets information about the specified product.
* `describe_product_as_admin` - Gets information about the specified product. This operation is run with administrator access.
* `describe_product_view` - Gets information about the specified product.
* `describe_provisioned_product` - Gets information about the specified provisioned product.
* `describe_provisioned_product_plan` - Gets information about the resource changes for the specified plan.
* `describe_provisioning_artifact` - Gets information about the specified provisioning artifact (also known as a version) for the specified product.
* `describe_provisioning_parameters` - <p>Gets information about the configuration required to provision the specified product using the specified provisioning artifact.</p> <p>If the output contains a TagOption key with an empty list of values, there is a TagOption conflict for that key. The end user cannot take action to fix the conflict, and launch is not blocked. In subsequent calls to <a>ProvisionProduct</a>, do not include conflicted TagOption keys as tags, or this causes the error "Parameter validation failed: Missing required parameter in Tags[<i>N</i>]:<i>Value</i>". Tag the provisioned product with the value <code>sc-tagoption-conflict-portfolioId-productId</code>.</p>
* `describe_record` - <p>Gets information about the specified request operation.</p> <p>Use this operation after calling a request operation (for example, <a>ProvisionProduct</a>, <a>TerminateProvisionedProduct</a>, or <a>UpdateProvisionedProduct</a>). </p> <note> <p>If a provisioned product was transferred to a new owner using <a>UpdateProvisionedProductProperties</a>, the new owner will be able to describe all past records for that product. The previous owner will no longer be able to describe the records, but will be able to use <a>ListRecordHistory</a> to see the product's history from when he was the owner.</p> </note>
* `describe_service_action` - Describes a self-service action.
* `describe_service_action_execution_parameters` - Finds the default parameters for a specific self-service action on a specific provisioned product and returns a map of the results to the user.
* `describe_tag_option` - Gets information about the specified TagOption.
* `disable_aws_organizations_access` - <p>Disable portfolio sharing through AWS Organizations feature. This feature will not delete your current shares but it will prevent you from creating new shares throughout your organization. Current shares will not be in sync with your organization structure if it changes after calling this API. This API can only be called by the management account in the organization.</p> <p>This API can't be invoked if there are active delegated administrators in the organization.</p> <p>Note that a delegated administrator is not authorized to invoke <code>DisableAWSOrganizationsAccess</code>.</p>
* `disassociate_budget_from_resource` - Disassociates the specified budget from the specified resource.
* `disassociate_principal_from_portfolio` - Disassociates a previously associated principal ARN from a specified portfolio.
* `disassociate_product_from_portfolio` - <p>Disassociates the specified product from the specified portfolio. </p> <p>A delegated admin is authorized to invoke this command.</p>
* `disassociate_service_action_from_provisioning_artifact` - Disassociates the specified self-service action association from the specified provisioning artifact.
* `disassociate_tag_option_from_resource` - Disassociates the specified TagOption from the specified resource.
* `enable_aws_organizations_access` - <p>Enable portfolio sharing feature through AWS Organizations. This API will allow Service Catalog to receive updates on your organization in order to sync your shares with the current structure. This API can only be called by the management account in the organization.</p> <p>By calling this API Service Catalog will make a call to organizations:EnableAWSServiceAccess on your behalf so that your shares can be in sync with any changes in your AWS Organizations structure.</p> <p>Note that a delegated administrator is not authorized to invoke <code>EnableAWSOrganizationsAccess</code>.</p>
* `execute_provisioned_product_plan` - Provisions or modifies a product based on the resource changes for the specified plan.
* `execute_provisioned_product_service_action` - Executes a self-service action against a provisioned product.
* `get_aws_organizations_access_status` - Get the Access Status for AWS Organization portfolio share feature. This API can only be called by the management account in the organization or by a delegated admin.
* `get_provisioned_product_outputs` - This API takes either a <code>ProvisonedProductId</code> or a <code>ProvisionedProductName</code>, along with a list of one or more output keys, and responds with the key/value pairs of those outputs.
* `import_as_provisioned_product` - <p>Requests the import of a resource as a Service Catalog provisioned product that is associated to a Service Catalog product and provisioning artifact. Once imported, all supported Service Catalog governance actions are supported on the provisioned product.</p> <p>Resource import only supports CloudFormation stack ARNs. CloudFormation StackSets and non-root nested stacks are not supported.</p> <p>The CloudFormation stack must have one of the following statuses to be imported: <code>CREATE_COMPLETE</code>, <code>UPDATE_COMPLETE</code>, <code>UPDATE_ROLLBACK_COMPLETE</code>, <code>IMPORT_COMPLETE</code>, <code>IMPORT_ROLLBACK_COMPLETE</code>.</p> <p>Import of the resource requires that the CloudFormation stack template matches the associated Service Catalog product provisioning artifact. </p> <p>The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code> and <code>cloudformation:DescribeStacks</code> IAM policy permissions. </p>
* `list_accepted_portfolio_shares` - Lists all portfolios for which sharing was accepted by this account.
* `list_budgets_for_resource` - Lists all the budgets associated to the specified resource.
* `list_constraints_for_portfolio` - Lists the constraints for the specified portfolio and product.
* `list_launch_paths` - Lists the paths to the specified product. A path is how the user has access to a specified product, and is necessary when provisioning a product. A path also determines the constraints put on the product.
* `list_organization_portfolio_access` - <p>Lists the organization nodes that have access to the specified portfolio. This API can only be called by the management account in the organization or by a delegated admin.</p> <p>If a delegated admin is de-registered, they can no longer perform this operation.</p>
* `list_portfolio_access` - <p>Lists the account IDs that have access to the specified portfolio.</p> <p>A delegated admin can list the accounts that have access to the shared portfolio. Note that if a delegated admin is de-registered, they can no longer perform this operation.</p>
* `list_portfolios` - Lists all portfolios in the catalog.
* `list_portfolios_for_product` - Lists all portfolios that the specified product is associated with.
* `list_principals_for_portfolio` - Lists all principal ARNs associated with the specified portfolio.
* `list_provisioned_product_plans` - Lists the plans for the specified provisioned product or all plans to which the user has access.
* `list_provisioning_artifacts` - Lists all provisioning artifacts (also known as versions) for the specified product.
* `list_provisioning_artifacts_for_service_action` - Lists all provisioning artifacts (also known as versions) for the specified self-service action.
* `list_record_history` - Lists the specified requests or all performed requests.
* `list_resources_for_tag_option` - Lists the resources associated with the specified TagOption.
* `list_service_actions` - Lists all self-service actions.
* `list_service_actions_for_provisioning_artifact` - Returns a paginated list of self-service actions associated with the specified Product ID and Provisioning Artifact ID.
* `list_stack_instances_for_provisioned_product` - Returns summary information about stack instances that are associated with the specified <code>CFN_STACKSET</code> type provisioned product. You can filter for stack instances that are associated with a specific AWS account name or region. 
* `list_tag_options` - Lists the specified TagOptions or all TagOptions.
* `provision_product` - <p>Provisions the specified product.</p> <p>A provisioned product is a resourced instance of a product. For example, provisioning a product based on a CloudFormation template launches a CloudFormation stack and its underlying resources. You can check the status of this request using <a>DescribeRecord</a>.</p> <p>If the request contains a tag key with an empty list of values, there is a tag conflict for that key. Do not include conflicted keys as tags, or this causes the error "Parameter validation failed: Missing required parameter in Tags[<i>N</i>]:<i>Value</i>".</p>
* `reject_portfolio_share` - Rejects an offer to share the specified portfolio.
* `scan_provisioned_products` - <p>Lists the provisioned products that are available (not terminated).</p> <p>To use additional filtering, see <a>SearchProvisionedProducts</a>.</p>
* `search_products` - Gets information about the products to which the caller has access.
* `search_products_as_admin` - Gets information about the products for the specified portfolio or all products.
* `search_provisioned_products` - Gets information about the provisioned products that meet the specified criteria.
* `terminate_provisioned_product` - <p>Terminates the specified provisioned product.</p> <p>This operation does not delete any records associated with the provisioned product.</p> <p>You can check the status of this request using <a>DescribeRecord</a>.</p>
* `update_constraint` - Updates the specified constraint.
* `update_portfolio` - <p>Updates the specified portfolio.</p> <p>You cannot update a product that was shared with you.</p>
* `update_portfolio_share` - <p>Updates the specified portfolio share. You can use this API to enable or disable TagOptions sharing for an existing portfolio share. </p> <p>The portfolio share cannot be updated if the <code> CreatePortfolioShare</code> operation is <code>IN_PROGRESS</code>, as the share is not available to recipient entities. In this case, you must wait for the portfolio share to be COMPLETED.</p> <p>You must provide the <code>accountId</code> or organization node in the input, but not both.</p> <p>If the portfolio is shared to both an external account and an organization node, and both shares need to be updated, you must invoke <code>UpdatePortfolioShare</code> separately for each share type. </p> <p>This API cannot be used for removing the portfolio share. You must use <code>DeletePortfolioShare</code> API for that action. </p>
* `update_product` - Updates the specified product.
* `update_provisioned_product` - <p>Requests updates to the configuration of the specified provisioned product.</p> <p>If there are tags associated with the object, they cannot be updated or added. Depending on the specific updates requested, this operation can update with no interruption, with some interruption, or replace the provisioned product entirely.</p> <p>You can check the status of this request using <a>DescribeRecord</a>.</p>
* `update_provisioned_product_properties` - Requests updates to the properties of the specified provisioned product.
* `update_provisioning_artifact` - <p>Updates the specified provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot update a provisioning artifact for a product that was shared with you.</p>
* `update_service_action` - Updates a self-service action.
* `update_tag_option` - Updates the specified TagOption.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
