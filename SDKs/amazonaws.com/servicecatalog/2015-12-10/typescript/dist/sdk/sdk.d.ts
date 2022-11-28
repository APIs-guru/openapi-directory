import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://servicecatalog.{region}.amazonaws.com", "https://servicecatalog.{region}.amazonaws.com", "http://servicecatalog.{region}.amazonaws.com.cn", "https://servicecatalog.{region}.amazonaws.com.cn"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * acceptPortfolioShare - Accepts an offer to share the specified portfolio.
    **/
    acceptPortfolioShare(req: operations.AcceptPortfolioShareRequest, config?: AxiosRequestConfig): Promise<operations.AcceptPortfolioShareResponse>;
    /**
     * associateBudgetWithResource - Associates the specified budget with the specified resource.
    **/
    associateBudgetWithResource(req: operations.AssociateBudgetWithResourceRequest, config?: AxiosRequestConfig): Promise<operations.AssociateBudgetWithResourceResponse>;
    /**
     * associatePrincipalWithPortfolio - Associates the specified principal ARN with the specified portfolio.
    **/
    associatePrincipalWithPortfolio(req: operations.AssociatePrincipalWithPortfolioRequest, config?: AxiosRequestConfig): Promise<operations.AssociatePrincipalWithPortfolioResponse>;
    /**
     * associateProductWithPortfolio - <p>Associates the specified product with the specified portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>
    **/
    associateProductWithPortfolio(req: operations.AssociateProductWithPortfolioRequest, config?: AxiosRequestConfig): Promise<operations.AssociateProductWithPortfolioResponse>;
    /**
     * associateServiceActionWithProvisioningArtifact - Associates a self-service action with a provisioning artifact.
    **/
    associateServiceActionWithProvisioningArtifact(req: operations.AssociateServiceActionWithProvisioningArtifactRequest, config?: AxiosRequestConfig): Promise<operations.AssociateServiceActionWithProvisioningArtifactResponse>;
    /**
     * associateTagOptionWithResource - Associate the specified TagOption with the specified portfolio or product.
    **/
    associateTagOptionWithResource(req: operations.AssociateTagOptionWithResourceRequest, config?: AxiosRequestConfig): Promise<operations.AssociateTagOptionWithResourceResponse>;
    /**
     * batchAssociateServiceActionWithProvisioningArtifact - Associates multiple self-service actions with provisioning artifacts.
    **/
    batchAssociateServiceActionWithProvisioningArtifact(req: operations.BatchAssociateServiceActionWithProvisioningArtifactRequest, config?: AxiosRequestConfig): Promise<operations.BatchAssociateServiceActionWithProvisioningArtifactResponse>;
    /**
     * batchDisassociateServiceActionFromProvisioningArtifact - Disassociates a batch of self-service actions from the specified provisioning artifact.
    **/
    batchDisassociateServiceActionFromProvisioningArtifact(req: operations.BatchDisassociateServiceActionFromProvisioningArtifactRequest, config?: AxiosRequestConfig): Promise<operations.BatchDisassociateServiceActionFromProvisioningArtifactResponse>;
    /**
     * copyProduct - <p>Copies the specified source product to the specified target product or a new product.</p> <p>You can copy a product to the same account or another account. You can copy a product to the same region or another region.</p> <p>This operation is performed asynchronously. To track the progress of the operation, use <a>DescribeCopyProductStatus</a>.</p>
    **/
    copyProduct(req: operations.CopyProductRequest, config?: AxiosRequestConfig): Promise<operations.CopyProductResponse>;
    /**
     * createConstraint - <p>Creates a constraint.</p> <p>A delegated admin is authorized to invoke this command.</p>
    **/
    createConstraint(req: operations.CreateConstraintRequest, config?: AxiosRequestConfig): Promise<operations.CreateConstraintResponse>;
    /**
     * createPortfolio - <p>Creates a portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>
    **/
    createPortfolio(req: operations.CreatePortfolioRequest, config?: AxiosRequestConfig): Promise<operations.CreatePortfolioResponse>;
    /**
     * createPortfolioShare - <p>Shares the specified portfolio with the specified account or organization node. Shares to an organization node can only be created by the management account of an organization or by a delegated administrator. You can share portfolios to an organization, an organizational unit, or a specific account.</p> <p>Note that if a delegated admin is de-registered, they can no longer create portfolio shares.</p> <p> <code>AWSOrganizationsAccess</code> must be enabled in order to create a portfolio share to an organization node.</p> <p>You can't share a shared resource, including portfolios that contain a shared product.</p> <p>If the portfolio share with the specified account or organization node already exists, this action will have no effect and will not return an error. To update an existing share, you must use the <code> UpdatePortfolioShare</code> API instead.</p>
    **/
    createPortfolioShare(req: operations.CreatePortfolioShareRequest, config?: AxiosRequestConfig): Promise<operations.CreatePortfolioShareResponse>;
    /**
     * createProduct - <p>Creates a product.</p> <p>A delegated admin is authorized to invoke this command.</p> <p>The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code> IAM policy permission. This policy permission is required when using the <code>ImportFromPhysicalId</code> template source in the information data section.</p>
    **/
    createProduct(req: operations.CreateProductRequest, config?: AxiosRequestConfig): Promise<operations.CreateProductResponse>;
    /**
     * createProvisionedProductPlan - <p>Creates a plan. A plan includes the list of resources to be created (when provisioning a new product) or modified (when updating a provisioned product) when the plan is executed.</p> <p>You can create one plan per provisioned product. To create a plan for an existing provisioned product, the product status must be AVAILBLE or TAINTED.</p> <p>To view the resource changes in the change set, use <a>DescribeProvisionedProductPlan</a>. To create or modify the provisioned product, use <a>ExecuteProvisionedProductPlan</a>.</p>
    **/
    createProvisionedProductPlan(req: operations.CreateProvisionedProductPlanRequest, config?: AxiosRequestConfig): Promise<operations.CreateProvisionedProductPlanResponse>;
    /**
     * createProvisioningArtifact - <p>Creates a provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot create a provisioning artifact for a product that was shared with you.</p> <p>The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code> IAM policy permission. This policy permission is required when using the <code>ImportFromPhysicalId</code> template source in the information data section.</p>
    **/
    createProvisioningArtifact(req: operations.CreateProvisioningArtifactRequest, config?: AxiosRequestConfig): Promise<operations.CreateProvisioningArtifactResponse>;
    /**
     * createServiceAction - Creates a self-service action.
    **/
    createServiceAction(req: operations.CreateServiceActionRequest, config?: AxiosRequestConfig): Promise<operations.CreateServiceActionResponse>;
    /**
     * createTagOption - Creates a TagOption.
    **/
    createTagOption(req: operations.CreateTagOptionRequest, config?: AxiosRequestConfig): Promise<operations.CreateTagOptionResponse>;
    /**
     * deleteConstraint - <p>Deletes the specified constraint.</p> <p>A delegated admin is authorized to invoke this command.</p>
    **/
    deleteConstraint(req: operations.DeleteConstraintRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConstraintResponse>;
    /**
     * deletePortfolio - <p>Deletes the specified portfolio.</p> <p>You cannot delete a portfolio if it was shared with you or if it has associated products, users, constraints, or shared accounts.</p> <p>A delegated admin is authorized to invoke this command.</p>
    **/
    deletePortfolio(req: operations.DeletePortfolioRequest, config?: AxiosRequestConfig): Promise<operations.DeletePortfolioResponse>;
    /**
     * deletePortfolioShare - <p>Stops sharing the specified portfolio with the specified account or organization node. Shares to an organization node can only be deleted by the management account of an organization or by a delegated administrator.</p> <p>Note that if a delegated admin is de-registered, portfolio shares created from that account are removed.</p>
    **/
    deletePortfolioShare(req: operations.DeletePortfolioShareRequest, config?: AxiosRequestConfig): Promise<operations.DeletePortfolioShareResponse>;
    /**
     * deleteProduct - <p>Deletes the specified product.</p> <p>You cannot delete a product if it was shared with you or is associated with a portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>
    **/
    deleteProduct(req: operations.DeleteProductRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProductResponse>;
    /**
     * deleteProvisionedProductPlan - Deletes the specified plan.
    **/
    deleteProvisionedProductPlan(req: operations.DeleteProvisionedProductPlanRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProvisionedProductPlanResponse>;
    /**
     * deleteProvisioningArtifact - <p>Deletes the specified provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot delete a provisioning artifact associated with a product that was shared with you. You cannot delete the last provisioning artifact for a product, because a product must have at least one provisioning artifact.</p>
    **/
    deleteProvisioningArtifact(req: operations.DeleteProvisioningArtifactRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProvisioningArtifactResponse>;
    /**
     * deleteServiceAction - Deletes a self-service action.
    **/
    deleteServiceAction(req: operations.DeleteServiceActionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteServiceActionResponse>;
    /**
     * deleteTagOption - <p>Deletes the specified TagOption.</p> <p>You cannot delete a TagOption if it is associated with a product or portfolio.</p>
    **/
    deleteTagOption(req: operations.DeleteTagOptionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTagOptionResponse>;
    /**
     * describeConstraint - Gets information about the specified constraint.
    **/
    describeConstraint(req: operations.DescribeConstraintRequest, config?: AxiosRequestConfig): Promise<operations.DescribeConstraintResponse>;
    /**
     * describeCopyProductStatus - Gets the status of the specified copy product operation.
    **/
    describeCopyProductStatus(req: operations.DescribeCopyProductStatusRequest, config?: AxiosRequestConfig): Promise<operations.DescribeCopyProductStatusResponse>;
    /**
     * describePortfolio - <p>Gets information about the specified portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>
    **/
    describePortfolio(req: operations.DescribePortfolioRequest, config?: AxiosRequestConfig): Promise<operations.DescribePortfolioResponse>;
    /**
     * describePortfolioShareStatus - Gets the status of the specified portfolio share operation. This API can only be called by the management account in the organization or by a delegated admin.
    **/
    describePortfolioShareStatus(req: operations.DescribePortfolioShareStatusRequest, config?: AxiosRequestConfig): Promise<operations.DescribePortfolioShareStatusResponse>;
    /**
     * describePortfolioShares - <p>Returns a summary of each of the portfolio shares that were created for the specified portfolio.</p> <p>You can use this API to determine which accounts or organizational nodes this portfolio have been shared, whether the recipient entity has imported the share, and whether TagOptions are included with the share.</p> <p>The <code>PortfolioId</code> and <code>Type</code> parameters are both required.</p>
    **/
    describePortfolioShares(req: operations.DescribePortfolioSharesRequest, config?: AxiosRequestConfig): Promise<operations.DescribePortfolioSharesResponse>;
    /**
     * describeProduct - Gets information about the specified product.
    **/
    describeProduct(req: operations.DescribeProductRequest, config?: AxiosRequestConfig): Promise<operations.DescribeProductResponse>;
    /**
     * describeProductAsAdmin - Gets information about the specified product. This operation is run with administrator access.
    **/
    describeProductAsAdmin(req: operations.DescribeProductAsAdminRequest, config?: AxiosRequestConfig): Promise<operations.DescribeProductAsAdminResponse>;
    /**
     * describeProductView - Gets information about the specified product.
    **/
    describeProductView(req: operations.DescribeProductViewRequest, config?: AxiosRequestConfig): Promise<operations.DescribeProductViewResponse>;
    /**
     * describeProvisionedProduct - Gets information about the specified provisioned product.
    **/
    describeProvisionedProduct(req: operations.DescribeProvisionedProductRequest, config?: AxiosRequestConfig): Promise<operations.DescribeProvisionedProductResponse>;
    /**
     * describeProvisionedProductPlan - Gets information about the resource changes for the specified plan.
    **/
    describeProvisionedProductPlan(req: operations.DescribeProvisionedProductPlanRequest, config?: AxiosRequestConfig): Promise<operations.DescribeProvisionedProductPlanResponse>;
    /**
     * describeProvisioningArtifact - Gets information about the specified provisioning artifact (also known as a version) for the specified product.
    **/
    describeProvisioningArtifact(req: operations.DescribeProvisioningArtifactRequest, config?: AxiosRequestConfig): Promise<operations.DescribeProvisioningArtifactResponse>;
    /**
     * describeProvisioningParameters - <p>Gets information about the configuration required to provision the specified product using the specified provisioning artifact.</p> <p>If the output contains a TagOption key with an empty list of values, there is a TagOption conflict for that key. The end user cannot take action to fix the conflict, and launch is not blocked. In subsequent calls to <a>ProvisionProduct</a>, do not include conflicted TagOption keys as tags, or this causes the error "Parameter validation failed: Missing required parameter in Tags[<i>N</i>]:<i>Value</i>". Tag the provisioned product with the value <code>sc-tagoption-conflict-portfolioId-productId</code>.</p>
    **/
    describeProvisioningParameters(req: operations.DescribeProvisioningParametersRequest, config?: AxiosRequestConfig): Promise<operations.DescribeProvisioningParametersResponse>;
    /**
     * describeRecord - <p>Gets information about the specified request operation.</p> <p>Use this operation after calling a request operation (for example, <a>ProvisionProduct</a>, <a>TerminateProvisionedProduct</a>, or <a>UpdateProvisionedProduct</a>). </p> <note> <p>If a provisioned product was transferred to a new owner using <a>UpdateProvisionedProductProperties</a>, the new owner will be able to describe all past records for that product. The previous owner will no longer be able to describe the records, but will be able to use <a>ListRecordHistory</a> to see the product's history from when he was the owner.</p> </note>
    **/
    describeRecord(req: operations.DescribeRecordRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRecordResponse>;
    /**
     * describeServiceAction - Describes a self-service action.
    **/
    describeServiceAction(req: operations.DescribeServiceActionRequest, config?: AxiosRequestConfig): Promise<operations.DescribeServiceActionResponse>;
    /**
     * describeServiceActionExecutionParameters - Finds the default parameters for a specific self-service action on a specific provisioned product and returns a map of the results to the user.
    **/
    describeServiceActionExecutionParameters(req: operations.DescribeServiceActionExecutionParametersRequest, config?: AxiosRequestConfig): Promise<operations.DescribeServiceActionExecutionParametersResponse>;
    /**
     * describeTagOption - Gets information about the specified TagOption.
    **/
    describeTagOption(req: operations.DescribeTagOptionRequest, config?: AxiosRequestConfig): Promise<operations.DescribeTagOptionResponse>;
    /**
     * disableAwsOrganizationsAccess - <p>Disable portfolio sharing through AWS Organizations feature. This feature will not delete your current shares but it will prevent you from creating new shares throughout your organization. Current shares will not be in sync with your organization structure if it changes after calling this API. This API can only be called by the management account in the organization.</p> <p>This API can't be invoked if there are active delegated administrators in the organization.</p> <p>Note that a delegated administrator is not authorized to invoke <code>DisableAWSOrganizationsAccess</code>.</p>
    **/
    disableAwsOrganizationsAccess(req: operations.DisableAwsOrganizationsAccessRequest, config?: AxiosRequestConfig): Promise<operations.DisableAwsOrganizationsAccessResponse>;
    /**
     * disassociateBudgetFromResource - Disassociates the specified budget from the specified resource.
    **/
    disassociateBudgetFromResource(req: operations.DisassociateBudgetFromResourceRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateBudgetFromResourceResponse>;
    /**
     * disassociatePrincipalFromPortfolio - Disassociates a previously associated principal ARN from a specified portfolio.
    **/
    disassociatePrincipalFromPortfolio(req: operations.DisassociatePrincipalFromPortfolioRequest, config?: AxiosRequestConfig): Promise<operations.DisassociatePrincipalFromPortfolioResponse>;
    /**
     * disassociateProductFromPortfolio - <p>Disassociates the specified product from the specified portfolio. </p> <p>A delegated admin is authorized to invoke this command.</p>
    **/
    disassociateProductFromPortfolio(req: operations.DisassociateProductFromPortfolioRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateProductFromPortfolioResponse>;
    /**
     * disassociateServiceActionFromProvisioningArtifact - Disassociates the specified self-service action association from the specified provisioning artifact.
    **/
    disassociateServiceActionFromProvisioningArtifact(req: operations.DisassociateServiceActionFromProvisioningArtifactRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateServiceActionFromProvisioningArtifactResponse>;
    /**
     * disassociateTagOptionFromResource - Disassociates the specified TagOption from the specified resource.
    **/
    disassociateTagOptionFromResource(req: operations.DisassociateTagOptionFromResourceRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateTagOptionFromResourceResponse>;
    /**
     * enableAwsOrganizationsAccess - <p>Enable portfolio sharing feature through AWS Organizations. This API will allow Service Catalog to receive updates on your organization in order to sync your shares with the current structure. This API can only be called by the management account in the organization.</p> <p>By calling this API Service Catalog will make a call to organizations:EnableAWSServiceAccess on your behalf so that your shares can be in sync with any changes in your AWS Organizations structure.</p> <p>Note that a delegated administrator is not authorized to invoke <code>EnableAWSOrganizationsAccess</code>.</p>
    **/
    enableAwsOrganizationsAccess(req: operations.EnableAwsOrganizationsAccessRequest, config?: AxiosRequestConfig): Promise<operations.EnableAwsOrganizationsAccessResponse>;
    /**
     * executeProvisionedProductPlan - Provisions or modifies a product based on the resource changes for the specified plan.
    **/
    executeProvisionedProductPlan(req: operations.ExecuteProvisionedProductPlanRequest, config?: AxiosRequestConfig): Promise<operations.ExecuteProvisionedProductPlanResponse>;
    /**
     * executeProvisionedProductServiceAction - Executes a self-service action against a provisioned product.
    **/
    executeProvisionedProductServiceAction(req: operations.ExecuteProvisionedProductServiceActionRequest, config?: AxiosRequestConfig): Promise<operations.ExecuteProvisionedProductServiceActionResponse>;
    /**
     * getAwsOrganizationsAccessStatus - Get the Access Status for AWS Organization portfolio share feature. This API can only be called by the management account in the organization or by a delegated admin.
    **/
    getAwsOrganizationsAccessStatus(req: operations.GetAwsOrganizationsAccessStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetAwsOrganizationsAccessStatusResponse>;
    /**
     * getProvisionedProductOutputs - This API takes either a <code>ProvisonedProductId</code> or a <code>ProvisionedProductName</code>, along with a list of one or more output keys, and responds with the key/value pairs of those outputs.
    **/
    getProvisionedProductOutputs(req: operations.GetProvisionedProductOutputsRequest, config?: AxiosRequestConfig): Promise<operations.GetProvisionedProductOutputsResponse>;
    /**
     * importAsProvisionedProduct - <p>Requests the import of a resource as a Service Catalog provisioned product that is associated to a Service Catalog product and provisioning artifact. Once imported, all supported Service Catalog governance actions are supported on the provisioned product.</p> <p>Resource import only supports CloudFormation stack ARNs. CloudFormation StackSets and non-root nested stacks are not supported.</p> <p>The CloudFormation stack must have one of the following statuses to be imported: <code>CREATE_COMPLETE</code>, <code>UPDATE_COMPLETE</code>, <code>UPDATE_ROLLBACK_COMPLETE</code>, <code>IMPORT_COMPLETE</code>, <code>IMPORT_ROLLBACK_COMPLETE</code>.</p> <p>Import of the resource requires that the CloudFormation stack template matches the associated Service Catalog product provisioning artifact. </p> <p>The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code> and <code>cloudformation:DescribeStacks</code> IAM policy permissions. </p>
    **/
    importAsProvisionedProduct(req: operations.ImportAsProvisionedProductRequest, config?: AxiosRequestConfig): Promise<operations.ImportAsProvisionedProductResponse>;
    /**
     * listAcceptedPortfolioShares - Lists all portfolios for which sharing was accepted by this account.
    **/
    listAcceptedPortfolioShares(req: operations.ListAcceptedPortfolioSharesRequest, config?: AxiosRequestConfig): Promise<operations.ListAcceptedPortfolioSharesResponse>;
    /**
     * listBudgetsForResource - Lists all the budgets associated to the specified resource.
    **/
    listBudgetsForResource(req: operations.ListBudgetsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListBudgetsForResourceResponse>;
    /**
     * listConstraintsForPortfolio - Lists the constraints for the specified portfolio and product.
    **/
    listConstraintsForPortfolio(req: operations.ListConstraintsForPortfolioRequest, config?: AxiosRequestConfig): Promise<operations.ListConstraintsForPortfolioResponse>;
    /**
     * listLaunchPaths - Lists the paths to the specified product. A path is how the user has access to a specified product, and is necessary when provisioning a product. A path also determines the constraints put on the product.
    **/
    listLaunchPaths(req: operations.ListLaunchPathsRequest, config?: AxiosRequestConfig): Promise<operations.ListLaunchPathsResponse>;
    /**
     * listOrganizationPortfolioAccess - <p>Lists the organization nodes that have access to the specified portfolio. This API can only be called by the management account in the organization or by a delegated admin.</p> <p>If a delegated admin is de-registered, they can no longer perform this operation.</p>
    **/
    listOrganizationPortfolioAccess(req: operations.ListOrganizationPortfolioAccessRequest, config?: AxiosRequestConfig): Promise<operations.ListOrganizationPortfolioAccessResponse>;
    /**
     * listPortfolioAccess - <p>Lists the account IDs that have access to the specified portfolio.</p> <p>A delegated admin can list the accounts that have access to the shared portfolio. Note that if a delegated admin is de-registered, they can no longer perform this operation.</p>
    **/
    listPortfolioAccess(req: operations.ListPortfolioAccessRequest, config?: AxiosRequestConfig): Promise<operations.ListPortfolioAccessResponse>;
    /**
     * listPortfolios - Lists all portfolios in the catalog.
    **/
    listPortfolios(req: operations.ListPortfoliosRequest, config?: AxiosRequestConfig): Promise<operations.ListPortfoliosResponse>;
    /**
     * listPortfoliosForProduct - Lists all portfolios that the specified product is associated with.
    **/
    listPortfoliosForProduct(req: operations.ListPortfoliosForProductRequest, config?: AxiosRequestConfig): Promise<operations.ListPortfoliosForProductResponse>;
    /**
     * listPrincipalsForPortfolio - Lists all principal ARNs associated with the specified portfolio.
    **/
    listPrincipalsForPortfolio(req: operations.ListPrincipalsForPortfolioRequest, config?: AxiosRequestConfig): Promise<operations.ListPrincipalsForPortfolioResponse>;
    /**
     * listProvisionedProductPlans - Lists the plans for the specified provisioned product or all plans to which the user has access.
    **/
    listProvisionedProductPlans(req: operations.ListProvisionedProductPlansRequest, config?: AxiosRequestConfig): Promise<operations.ListProvisionedProductPlansResponse>;
    /**
     * listProvisioningArtifacts - Lists all provisioning artifacts (also known as versions) for the specified product.
    **/
    listProvisioningArtifacts(req: operations.ListProvisioningArtifactsRequest, config?: AxiosRequestConfig): Promise<operations.ListProvisioningArtifactsResponse>;
    /**
     * listProvisioningArtifactsForServiceAction - Lists all provisioning artifacts (also known as versions) for the specified self-service action.
    **/
    listProvisioningArtifactsForServiceAction(req: operations.ListProvisioningArtifactsForServiceActionRequest, config?: AxiosRequestConfig): Promise<operations.ListProvisioningArtifactsForServiceActionResponse>;
    /**
     * listRecordHistory - Lists the specified requests or all performed requests.
    **/
    listRecordHistory(req: operations.ListRecordHistoryRequest, config?: AxiosRequestConfig): Promise<operations.ListRecordHistoryResponse>;
    /**
     * listResourcesForTagOption - Lists the resources associated with the specified TagOption.
    **/
    listResourcesForTagOption(req: operations.ListResourcesForTagOptionRequest, config?: AxiosRequestConfig): Promise<operations.ListResourcesForTagOptionResponse>;
    /**
     * listServiceActions - Lists all self-service actions.
    **/
    listServiceActions(req: operations.ListServiceActionsRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceActionsResponse>;
    /**
     * listServiceActionsForProvisioningArtifact - Returns a paginated list of self-service actions associated with the specified Product ID and Provisioning Artifact ID.
    **/
    listServiceActionsForProvisioningArtifact(req: operations.ListServiceActionsForProvisioningArtifactRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceActionsForProvisioningArtifactResponse>;
    /**
     * listStackInstancesForProvisionedProduct - Returns summary information about stack instances that are associated with the specified <code>CFN_STACKSET</code> type provisioned product. You can filter for stack instances that are associated with a specific AWS account name or region.
    **/
    listStackInstancesForProvisionedProduct(req: operations.ListStackInstancesForProvisionedProductRequest, config?: AxiosRequestConfig): Promise<operations.ListStackInstancesForProvisionedProductResponse>;
    /**
     * listTagOptions - Lists the specified TagOptions or all TagOptions.
    **/
    listTagOptions(req: operations.ListTagOptionsRequest, config?: AxiosRequestConfig): Promise<operations.ListTagOptionsResponse>;
    /**
     * provisionProduct - <p>Provisions the specified product.</p> <p>A provisioned product is a resourced instance of a product. For example, provisioning a product based on a CloudFormation template launches a CloudFormation stack and its underlying resources. You can check the status of this request using <a>DescribeRecord</a>.</p> <p>If the request contains a tag key with an empty list of values, there is a tag conflict for that key. Do not include conflicted keys as tags, or this causes the error "Parameter validation failed: Missing required parameter in Tags[<i>N</i>]:<i>Value</i>".</p>
    **/
    provisionProduct(req: operations.ProvisionProductRequest, config?: AxiosRequestConfig): Promise<operations.ProvisionProductResponse>;
    /**
     * rejectPortfolioShare - Rejects an offer to share the specified portfolio.
    **/
    rejectPortfolioShare(req: operations.RejectPortfolioShareRequest, config?: AxiosRequestConfig): Promise<operations.RejectPortfolioShareResponse>;
    /**
     * scanProvisionedProducts - <p>Lists the provisioned products that are available (not terminated).</p> <p>To use additional filtering, see <a>SearchProvisionedProducts</a>.</p>
    **/
    scanProvisionedProducts(req: operations.ScanProvisionedProductsRequest, config?: AxiosRequestConfig): Promise<operations.ScanProvisionedProductsResponse>;
    /**
     * searchProducts - Gets information about the products to which the caller has access.
    **/
    searchProducts(req: operations.SearchProductsRequest, config?: AxiosRequestConfig): Promise<operations.SearchProductsResponse>;
    /**
     * searchProductsAsAdmin - Gets information about the products for the specified portfolio or all products.
    **/
    searchProductsAsAdmin(req: operations.SearchProductsAsAdminRequest, config?: AxiosRequestConfig): Promise<operations.SearchProductsAsAdminResponse>;
    /**
     * searchProvisionedProducts - Gets information about the provisioned products that meet the specified criteria.
    **/
    searchProvisionedProducts(req: operations.SearchProvisionedProductsRequest, config?: AxiosRequestConfig): Promise<operations.SearchProvisionedProductsResponse>;
    /**
     * terminateProvisionedProduct - <p>Terminates the specified provisioned product.</p> <p>This operation does not delete any records associated with the provisioned product.</p> <p>You can check the status of this request using <a>DescribeRecord</a>.</p>
    **/
    terminateProvisionedProduct(req: operations.TerminateProvisionedProductRequest, config?: AxiosRequestConfig): Promise<operations.TerminateProvisionedProductResponse>;
    /**
     * updateConstraint - Updates the specified constraint.
    **/
    updateConstraint(req: operations.UpdateConstraintRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConstraintResponse>;
    /**
     * updatePortfolio - <p>Updates the specified portfolio.</p> <p>You cannot update a product that was shared with you.</p>
    **/
    updatePortfolio(req: operations.UpdatePortfolioRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePortfolioResponse>;
    /**
     * updatePortfolioShare - <p>Updates the specified portfolio share. You can use this API to enable or disable TagOptions sharing for an existing portfolio share. </p> <p>The portfolio share cannot be updated if the <code> CreatePortfolioShare</code> operation is <code>IN_PROGRESS</code>, as the share is not available to recipient entities. In this case, you must wait for the portfolio share to be COMPLETED.</p> <p>You must provide the <code>accountId</code> or organization node in the input, but not both.</p> <p>If the portfolio is shared to both an external account and an organization node, and both shares need to be updated, you must invoke <code>UpdatePortfolioShare</code> separately for each share type. </p> <p>This API cannot be used for removing the portfolio share. You must use <code>DeletePortfolioShare</code> API for that action. </p>
    **/
    updatePortfolioShare(req: operations.UpdatePortfolioShareRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePortfolioShareResponse>;
    /**
     * updateProduct - Updates the specified product.
    **/
    updateProduct(req: operations.UpdateProductRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProductResponse>;
    /**
     * updateProvisionedProduct - <p>Requests updates to the configuration of the specified provisioned product.</p> <p>If there are tags associated with the object, they cannot be updated or added. Depending on the specific updates requested, this operation can update with no interruption, with some interruption, or replace the provisioned product entirely.</p> <p>You can check the status of this request using <a>DescribeRecord</a>.</p>
    **/
    updateProvisionedProduct(req: operations.UpdateProvisionedProductRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProvisionedProductResponse>;
    /**
     * updateProvisionedProductProperties - Requests updates to the properties of the specified provisioned product.
    **/
    updateProvisionedProductProperties(req: operations.UpdateProvisionedProductPropertiesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProvisionedProductPropertiesResponse>;
    /**
     * updateProvisioningArtifact - <p>Updates the specified provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot update a provisioning artifact for a product that was shared with you.</p>
    **/
    updateProvisioningArtifact(req: operations.UpdateProvisioningArtifactRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProvisioningArtifactResponse>;
    /**
     * updateServiceAction - Updates a self-service action.
    **/
    updateServiceAction(req: operations.UpdateServiceActionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateServiceActionResponse>;
    /**
     * updateTagOption - Updates the specified TagOption.
    **/
    updateTagOption(req: operations.UpdateTagOptionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTagOptionResponse>;
}
export {};
