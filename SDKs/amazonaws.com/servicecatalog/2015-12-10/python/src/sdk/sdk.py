
__doc__ = """ SDK Documentation: https://docs.aws.amazon.com/servicecatalog/ - Amazon Web Services documentation"""
import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"http://servicecatalog.{region}.amazonaws.com",
	"https://servicecatalog.{region}.amazonaws.com",
	"http://servicecatalog.{region}.amazonaws.com.cn",
	"https://servicecatalog.{region}.amazonaws.com.cn",
]


class SDK:
    r"""SDK Documentation: https://docs.aws.amazon.com/servicecatalog/ - Amazon Web Services documentation"""

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
        
    
    
    
    def accept_portfolio_share(self, request: operations.AcceptPortfolioShareRequest) -> operations.AcceptPortfolioShareResponse:
        r"""Accepts an offer to share the specified portfolio.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.AcceptPortfolioShare"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AcceptPortfolioShareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.accept_portfolio_share_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.limit_exceeded_exception = out

        return res

    
    def associate_budget_with_resource(self, request: operations.AssociateBudgetWithResourceRequest) -> operations.AssociateBudgetWithResourceResponse:
        r"""Associates the specified budget with the specified resource.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.AssociateBudgetWithResource"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AssociateBudgetWithResourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.associate_budget_with_resource_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.duplicate_resource_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.limit_exceeded_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def associate_principal_with_portfolio(self, request: operations.AssociatePrincipalWithPortfolioRequest) -> operations.AssociatePrincipalWithPortfolioResponse:
        r"""Associates the specified principal ARN with the specified portfolio.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.AssociatePrincipalWithPortfolio"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AssociatePrincipalWithPortfolioResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.associate_principal_with_portfolio_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.limit_exceeded_exception = out

        return res

    
    def associate_product_with_portfolio(self, request: operations.AssociateProductWithPortfolioRequest) -> operations.AssociateProductWithPortfolioResponse:
        r"""<p>Associates the specified product with the specified portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.AssociateProductWithPortfolio"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AssociateProductWithPortfolioResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.associate_product_with_portfolio_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.limit_exceeded_exception = out

        return res

    
    def associate_service_action_with_provisioning_artifact(self, request: operations.AssociateServiceActionWithProvisioningArtifactRequest) -> operations.AssociateServiceActionWithProvisioningArtifactResponse:
        r"""Associates a self-service action with a provisioning artifact.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.AssociateServiceActionWithProvisioningArtifact"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AssociateServiceActionWithProvisioningArtifactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.associate_service_action_with_provisioning_artifact_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.duplicate_resource_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.limit_exceeded_exception = out

        return res

    
    def associate_tag_option_with_resource(self, request: operations.AssociateTagOptionWithResourceRequest) -> operations.AssociateTagOptionWithResourceResponse:
        r"""Associate the specified TagOption with the specified portfolio or product.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.AssociateTagOptionWithResource"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AssociateTagOptionWithResourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.associate_tag_option_with_resource_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.tag_option_not_migrated_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.limit_exceeded_exception = out
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.duplicate_resource_exception = out
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_state_exception = out

        return res

    
    def batch_associate_service_action_with_provisioning_artifact(self, request: operations.BatchAssociateServiceActionWithProvisioningArtifactRequest) -> operations.BatchAssociateServiceActionWithProvisioningArtifactResponse:
        r"""Associates multiple self-service actions with provisioning artifacts.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.BatchAssociateServiceActionWithProvisioningArtifact"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BatchAssociateServiceActionWithProvisioningArtifactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchAssociateServiceActionWithProvisioningArtifactOutput])
                res.batch_associate_service_action_with_provisioning_artifact_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out

        return res

    
    def batch_disassociate_service_action_from_provisioning_artifact(self, request: operations.BatchDisassociateServiceActionFromProvisioningArtifactRequest) -> operations.BatchDisassociateServiceActionFromProvisioningArtifactResponse:
        r"""Disassociates a batch of self-service actions from the specified provisioning artifact.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.BatchDisassociateServiceActionFromProvisioningArtifact"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BatchDisassociateServiceActionFromProvisioningArtifactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchDisassociateServiceActionFromProvisioningArtifactOutput])
                res.batch_disassociate_service_action_from_provisioning_artifact_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out

        return res

    
    def copy_product(self, request: operations.CopyProductRequest) -> operations.CopyProductResponse:
        r"""<p>Copies the specified source product to the specified target product or a new product.</p> <p>You can copy a product to the same account or another account. You can copy a product to the same region or another region.</p> <p>This operation is performed asynchronously. To track the progress of the operation, use <a>DescribeCopyProductStatus</a>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.CopyProduct"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CopyProductResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CopyProductOutput])
                res.copy_product_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out

        return res

    
    def create_constraint(self, request: operations.CreateConstraintRequest) -> operations.CreateConstraintResponse:
        r"""<p>Creates a constraint.</p> <p>A delegated admin is authorized to invoke this command.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.CreateConstraint"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateConstraintResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateConstraintOutput])
                res.create_constraint_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.limit_exceeded_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.duplicate_resource_exception = out

        return res

    
    def create_portfolio(self, request: operations.CreatePortfolioRequest) -> operations.CreatePortfolioResponse:
        r"""<p>Creates a portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolio"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreatePortfolioResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreatePortfolioOutput])
                res.create_portfolio_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.limit_exceeded_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.tag_option_not_migrated_exception = out

        return res

    
    def create_portfolio_share(self, request: operations.CreatePortfolioShareRequest) -> operations.CreatePortfolioShareResponse:
        r"""<p>Shares the specified portfolio with the specified account or organization node. Shares to an organization node can only be created by the management account of an organization or by a delegated administrator. You can share portfolios to an organization, an organizational unit, or a specific account.</p> <p>Note that if a delegated admin is de-registered, they can no longer create portfolio shares.</p> <p> <code>AWSOrganizationsAccess</code> must be enabled in order to create a portfolio share to an organization node.</p> <p>You can't share a shared resource, including portfolios that contain a shared product.</p> <p>If the portfolio share with the specified account or organization node already exists, this action will have no effect and will not return an error. To update an existing share, you must use the <code> UpdatePortfolioShare</code> API instead.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolioShare"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreatePortfolioShareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreatePortfolioShareOutput])
                res.create_portfolio_share_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.limit_exceeded_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.operation_not_supported_exception = out
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_state_exception = out

        return res

    
    def create_product(self, request: operations.CreateProductRequest) -> operations.CreateProductResponse:
        r"""<p>Creates a product.</p> <p>A delegated admin is authorized to invoke this command.</p> <p>The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code> IAM policy permission. This policy permission is required when using the <code>ImportFromPhysicalId</code> template source in the information data section.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.CreateProduct"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateProductResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateProductOutput])
                res.create_product_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.limit_exceeded_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.tag_option_not_migrated_exception = out

        return res

    
    def create_provisioned_product_plan(self, request: operations.CreateProvisionedProductPlanRequest) -> operations.CreateProvisionedProductPlanResponse:
        r"""<p>Creates a plan. A plan includes the list of resources to be created (when provisioning a new product) or modified (when updating a provisioned product) when the plan is executed.</p> <p>You can create one plan per provisioned product. To create a plan for an existing provisioned product, the product status must be AVAILBLE or TAINTED.</p> <p>To view the resource changes in the change set, use <a>DescribeProvisionedProductPlan</a>. To create or modify the provisioned product, use <a>ExecuteProvisionedProductPlan</a>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisionedProductPlan"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateProvisionedProductPlanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateProvisionedProductPlanOutput])
                res.create_provisioned_product_plan_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_state_exception = out

        return res

    
    def create_provisioning_artifact(self, request: operations.CreateProvisioningArtifactRequest) -> operations.CreateProvisioningArtifactResponse:
        r"""<p>Creates a provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot create a provisioning artifact for a product that was shared with you.</p> <p>The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code> IAM policy permission. This policy permission is required when using the <code>ImportFromPhysicalId</code> template source in the information data section.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisioningArtifact"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateProvisioningArtifactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateProvisioningArtifactOutput])
                res.create_provisioning_artifact_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.limit_exceeded_exception = out

        return res

    
    def create_service_action(self, request: operations.CreateServiceActionRequest) -> operations.CreateServiceActionResponse:
        r"""Creates a self-service action.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.CreateServiceAction"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateServiceActionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateServiceActionOutput])
                res.create_service_action_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.limit_exceeded_exception = out

        return res

    
    def create_tag_option(self, request: operations.CreateTagOptionRequest) -> operations.CreateTagOptionResponse:
        r"""Creates a TagOption.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.CreateTagOption"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateTagOptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateTagOptionOutput])
                res.create_tag_option_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.tag_option_not_migrated_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.duplicate_resource_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.limit_exceeded_exception = out

        return res

    
    def delete_constraint(self, request: operations.DeleteConstraintRequest) -> operations.DeleteConstraintResponse:
        r"""<p>Deletes the specified constraint.</p> <p>A delegated admin is authorized to invoke this command.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.DeleteConstraint"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteConstraintResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_constraint_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out

        return res

    
    def delete_portfolio(self, request: operations.DeletePortfolioRequest) -> operations.DeletePortfolioResponse:
        r"""<p>Deletes the specified portfolio.</p> <p>You cannot delete a portfolio if it was shared with you or if it has associated products, users, constraints, or shared accounts.</p> <p>A delegated admin is authorized to invoke this command.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolio"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePortfolioResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_portfolio_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_in_use_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.tag_option_not_migrated_exception = out

        return res

    
    def delete_portfolio_share(self, request: operations.DeletePortfolioShareRequest) -> operations.DeletePortfolioShareResponse:
        r"""<p>Stops sharing the specified portfolio with the specified account or organization node. Shares to an organization node can only be deleted by the management account of an organization or by a delegated administrator.</p> <p>Note that if a delegated admin is de-registered, portfolio shares created from that account are removed.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolioShare"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePortfolioShareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeletePortfolioShareOutput])
                res.delete_portfolio_share_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.operation_not_supported_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_state_exception = out

        return res

    
    def delete_product(self, request: operations.DeleteProductRequest) -> operations.DeleteProductResponse:
        r"""<p>Deletes the specified product.</p> <p>You cannot delete a product if it was shared with you or is associated with a portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.DeleteProduct"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteProductResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_product_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_in_use_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.tag_option_not_migrated_exception = out

        return res

    
    def delete_provisioned_product_plan(self, request: operations.DeleteProvisionedProductPlanRequest) -> operations.DeleteProvisionedProductPlanResponse:
        r"""Deletes the specified plan.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisionedProductPlan"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteProvisionedProductPlanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_provisioned_product_plan_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def delete_provisioning_artifact(self, request: operations.DeleteProvisioningArtifactRequest) -> operations.DeleteProvisioningArtifactResponse:
        r"""<p>Deletes the specified provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot delete a provisioning artifact associated with a product that was shared with you. You cannot delete the last provisioning artifact for a product, because a product must have at least one provisioning artifact.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisioningArtifact"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteProvisioningArtifactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_provisioning_artifact_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_in_use_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out

        return res

    
    def delete_service_action(self, request: operations.DeleteServiceActionRequest) -> operations.DeleteServiceActionResponse:
        r"""Deletes a self-service action.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.DeleteServiceAction"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteServiceActionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_service_action_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_in_use_exception = out

        return res

    
    def delete_tag_option(self, request: operations.DeleteTagOptionRequest) -> operations.DeleteTagOptionResponse:
        r"""<p>Deletes the specified TagOption.</p> <p>You cannot delete a TagOption if it is associated with a product or portfolio.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.DeleteTagOption"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteTagOptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_tag_option_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.tag_option_not_migrated_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_in_use_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def describe_constraint(self, request: operations.DescribeConstraintRequest) -> operations.DescribeConstraintResponse:
        r"""Gets information about the specified constraint.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.DescribeConstraint"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeConstraintResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeConstraintOutput])
                res.describe_constraint_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def describe_copy_product_status(self, request: operations.DescribeCopyProductStatusRequest) -> operations.DescribeCopyProductStatusResponse:
        r"""Gets the status of the specified copy product operation.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.DescribeCopyProductStatus"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeCopyProductStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeCopyProductStatusOutput])
                res.describe_copy_product_status_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def describe_portfolio(self, request: operations.DescribePortfolioRequest) -> operations.DescribePortfolioResponse:
        r"""<p>Gets information about the specified portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolio"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribePortfolioResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribePortfolioOutput])
                res.describe_portfolio_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def describe_portfolio_share_status(self, request: operations.DescribePortfolioShareStatusRequest) -> operations.DescribePortfolioShareStatusResponse:
        r"""Gets the status of the specified portfolio share operation. This API can only be called by the management account in the organization or by a delegated admin.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolioShareStatus"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribePortfolioShareStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribePortfolioShareStatusOutput])
                res.describe_portfolio_share_status_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.operation_not_supported_exception = out

        return res

    
    def describe_portfolio_shares(self, request: operations.DescribePortfolioSharesRequest) -> operations.DescribePortfolioSharesResponse:
        r"""<p>Returns a summary of each of the portfolio shares that were created for the specified portfolio.</p> <p>You can use this API to determine which accounts or organizational nodes this portfolio have been shared, whether the recipient entity has imported the share, and whether TagOptions are included with the share.</p> <p>The <code>PortfolioId</code> and <code>Type</code> parameters are both required.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolioShares"
        
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

        res = operations.DescribePortfolioSharesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribePortfolioSharesOutput])
                res.describe_portfolio_shares_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out

        return res

    
    def describe_product(self, request: operations.DescribeProductRequest) -> operations.DescribeProductResponse:
        r"""Gets information about the specified product.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProduct"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeProductResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeProductOutput])
                res.describe_product_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out

        return res

    
    def describe_product_as_admin(self, request: operations.DescribeProductAsAdminRequest) -> operations.DescribeProductAsAdminResponse:
        r"""Gets information about the specified product. This operation is run with administrator access.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductAsAdmin"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeProductAsAdminResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeProductAsAdminOutput])
                res.describe_product_as_admin_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out

        return res

    
    def describe_product_view(self, request: operations.DescribeProductViewRequest) -> operations.DescribeProductViewResponse:
        r"""Gets information about the specified product.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductView"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeProductViewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeProductViewOutput])
                res.describe_product_view_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out

        return res

    
    def describe_provisioned_product(self, request: operations.DescribeProvisionedProductRequest) -> operations.DescribeProvisionedProductResponse:
        r"""Gets information about the specified provisioned product.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProduct"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeProvisionedProductResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeProvisionedProductOutput])
                res.describe_provisioned_product_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out

        return res

    
    def describe_provisioned_product_plan(self, request: operations.DescribeProvisionedProductPlanRequest) -> operations.DescribeProvisionedProductPlanResponse:
        r"""Gets information about the resource changes for the specified plan.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProductPlan"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeProvisionedProductPlanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeProvisionedProductPlanOutput])
                res.describe_provisioned_product_plan_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out

        return res

    
    def describe_provisioning_artifact(self, request: operations.DescribeProvisioningArtifactRequest) -> operations.DescribeProvisioningArtifactResponse:
        r"""Gets information about the specified provisioning artifact (also known as a version) for the specified product.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningArtifact"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeProvisioningArtifactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeProvisioningArtifactOutput])
                res.describe_provisioning_artifact_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out

        return res

    
    def describe_provisioning_parameters(self, request: operations.DescribeProvisioningParametersRequest) -> operations.DescribeProvisioningParametersResponse:
        r"""<p>Gets information about the configuration required to provision the specified product using the specified provisioning artifact.</p> <p>If the output contains a TagOption key with an empty list of values, there is a TagOption conflict for that key. The end user cannot take action to fix the conflict, and launch is not blocked. In subsequent calls to <a>ProvisionProduct</a>, do not include conflicted TagOption keys as tags, or this causes the error \"Parameter validation failed: Missing required parameter in Tags[<i>N</i>]:<i>Value</i>\". Tag the provisioned product with the value <code>sc-tagoption-conflict-portfolioId-productId</code>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningParameters"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeProvisioningParametersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeProvisioningParametersOutput])
                res.describe_provisioning_parameters_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def describe_record(self, request: operations.DescribeRecordRequest) -> operations.DescribeRecordResponse:
        r"""<p>Gets information about the specified request operation.</p> <p>Use this operation after calling a request operation (for example, <a>ProvisionProduct</a>, <a>TerminateProvisionedProduct</a>, or <a>UpdateProvisionedProduct</a>). </p> <note> <p>If a provisioned product was transferred to a new owner using <a>UpdateProvisionedProductProperties</a>, the new owner will be able to describe all past records for that product. The previous owner will no longer be able to describe the records, but will be able to use <a>ListRecordHistory</a> to see the product's history from when he was the owner.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.DescribeRecord"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeRecordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeRecordOutput])
                res.describe_record_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def describe_service_action(self, request: operations.DescribeServiceActionRequest) -> operations.DescribeServiceActionResponse:
        r"""Describes a self-service action.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceAction"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeServiceActionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeServiceActionOutput])
                res.describe_service_action_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def describe_service_action_execution_parameters(self, request: operations.DescribeServiceActionExecutionParametersRequest) -> operations.DescribeServiceActionExecutionParametersResponse:
        r"""Finds the default parameters for a specific self-service action on a specific provisioned product and returns a map of the results to the user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceActionExecutionParameters"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeServiceActionExecutionParametersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeServiceActionExecutionParametersOutput])
                res.describe_service_action_execution_parameters_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def describe_tag_option(self, request: operations.DescribeTagOptionRequest) -> operations.DescribeTagOptionResponse:
        r"""Gets information about the specified TagOption.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.DescribeTagOption"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeTagOptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeTagOptionOutput])
                res.describe_tag_option_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.tag_option_not_migrated_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def disable_aws_organizations_access(self, request: operations.DisableAwsOrganizationsAccessRequest) -> operations.DisableAwsOrganizationsAccessResponse:
        r"""<p>Disable portfolio sharing through AWS Organizations feature. This feature will not delete your current shares but it will prevent you from creating new shares throughout your organization. Current shares will not be in sync with your organization structure if it changes after calling this API. This API can only be called by the management account in the organization.</p> <p>This API can't be invoked if there are active delegated administrators in the organization.</p> <p>Note that a delegated administrator is not authorized to invoke <code>DisableAWSOrganizationsAccess</code>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.DisableAWSOrganizationsAccess"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisableAwsOrganizationsAccessResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.disable_aws_organizations_access_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_state_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.operation_not_supported_exception = out

        return res

    
    def disassociate_budget_from_resource(self, request: operations.DisassociateBudgetFromResourceRequest) -> operations.DisassociateBudgetFromResourceResponse:
        r"""Disassociates the specified budget from the specified resource.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.DisassociateBudgetFromResource"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisassociateBudgetFromResourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.disassociate_budget_from_resource_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def disassociate_principal_from_portfolio(self, request: operations.DisassociatePrincipalFromPortfolioRequest) -> operations.DisassociatePrincipalFromPortfolioResponse:
        r"""Disassociates a previously associated principal ARN from a specified portfolio.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.DisassociatePrincipalFromPortfolio"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisassociatePrincipalFromPortfolioResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.disassociate_principal_from_portfolio_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def disassociate_product_from_portfolio(self, request: operations.DisassociateProductFromPortfolioRequest) -> operations.DisassociateProductFromPortfolioResponse:
        r"""<p>Disassociates the specified product from the specified portfolio. </p> <p>A delegated admin is authorized to invoke this command.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.DisassociateProductFromPortfolio"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisassociateProductFromPortfolioResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.disassociate_product_from_portfolio_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_in_use_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out

        return res

    
    def disassociate_service_action_from_provisioning_artifact(self, request: operations.DisassociateServiceActionFromProvisioningArtifactRequest) -> operations.DisassociateServiceActionFromProvisioningArtifactResponse:
        r"""Disassociates the specified self-service action association from the specified provisioning artifact.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.DisassociateServiceActionFromProvisioningArtifact"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisassociateServiceActionFromProvisioningArtifactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.disassociate_service_action_from_provisioning_artifact_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def disassociate_tag_option_from_resource(self, request: operations.DisassociateTagOptionFromResourceRequest) -> operations.DisassociateTagOptionFromResourceResponse:
        r"""Disassociates the specified TagOption from the specified resource.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.DisassociateTagOptionFromResource"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisassociateTagOptionFromResourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.disassociate_tag_option_from_resource_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.tag_option_not_migrated_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def enable_aws_organizations_access(self, request: operations.EnableAwsOrganizationsAccessRequest) -> operations.EnableAwsOrganizationsAccessResponse:
        r"""<p>Enable portfolio sharing feature through AWS Organizations. This API will allow Service Catalog to receive updates on your organization in order to sync your shares with the current structure. This API can only be called by the management account in the organization.</p> <p>By calling this API Service Catalog will make a call to organizations:EnableAWSServiceAccess on your behalf so that your shares can be in sync with any changes in your AWS Organizations structure.</p> <p>Note that a delegated administrator is not authorized to invoke <code>EnableAWSOrganizationsAccess</code>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.EnableAWSOrganizationsAccess"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EnableAwsOrganizationsAccessResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.enable_aws_organizations_access_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_state_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.operation_not_supported_exception = out

        return res

    
    def execute_provisioned_product_plan(self, request: operations.ExecuteProvisionedProductPlanRequest) -> operations.ExecuteProvisionedProductPlanResponse:
        r"""Provisions or modifies a product based on the resource changes for the specified plan.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductPlan"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExecuteProvisionedProductPlanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ExecuteProvisionedProductPlanOutput])
                res.execute_provisioned_product_plan_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_state_exception = out

        return res

    
    def execute_provisioned_product_service_action(self, request: operations.ExecuteProvisionedProductServiceActionRequest) -> operations.ExecuteProvisionedProductServiceActionResponse:
        r"""Executes a self-service action against a provisioned product.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductServiceAction"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExecuteProvisionedProductServiceActionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ExecuteProvisionedProductServiceActionOutput])
                res.execute_provisioned_product_service_action_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_state_exception = out

        return res

    
    def get_aws_organizations_access_status(self, request: operations.GetAwsOrganizationsAccessStatusRequest) -> operations.GetAwsOrganizationsAccessStatusResponse:
        r"""Get the Access Status for AWS Organization portfolio share feature. This API can only be called by the management account in the organization or by a delegated admin.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.GetAWSOrganizationsAccessStatus"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAwsOrganizationsAccessStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetAwsOrganizationsAccessStatusOutput])
                res.get_aws_organizations_access_status_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.operation_not_supported_exception = out

        return res

    
    def get_provisioned_product_outputs(self, request: operations.GetProvisionedProductOutputsRequest) -> operations.GetProvisionedProductOutputsResponse:
        r"""This API takes either a <code>ProvisonedProductId</code> or a <code>ProvisionedProductName</code>, along with a list of one or more output keys, and responds with the key/value pairs of those outputs.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.GetProvisionedProductOutputs"
        
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

        res = operations.GetProvisionedProductOutputsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetProvisionedProductOutputsOutput])
                res.get_provisioned_product_outputs_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def import_as_provisioned_product(self, request: operations.ImportAsProvisionedProductRequest) -> operations.ImportAsProvisionedProductResponse:
        r"""<p>Requests the import of a resource as a Service Catalog provisioned product that is associated to a Service Catalog product and provisioning artifact. Once imported, all supported Service Catalog governance actions are supported on the provisioned product.</p> <p>Resource import only supports CloudFormation stack ARNs. CloudFormation StackSets and non-root nested stacks are not supported.</p> <p>The CloudFormation stack must have one of the following statuses to be imported: <code>CREATE_COMPLETE</code>, <code>UPDATE_COMPLETE</code>, <code>UPDATE_ROLLBACK_COMPLETE</code>, <code>IMPORT_COMPLETE</code>, <code>IMPORT_ROLLBACK_COMPLETE</code>.</p> <p>Import of the resource requires that the CloudFormation stack template matches the associated Service Catalog product provisioning artifact. </p> <p>The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code> and <code>cloudformation:DescribeStacks</code> IAM policy permissions. </p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.ImportAsProvisionedProduct"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ImportAsProvisionedProductResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImportAsProvisionedProductOutput])
                res.import_as_provisioned_product_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.duplicate_resource_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_state_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out

        return res

    
    def list_accepted_portfolio_shares(self, request: operations.ListAcceptedPortfolioSharesRequest) -> operations.ListAcceptedPortfolioSharesResponse:
        r"""Lists all portfolios for which sharing was accepted by this account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.ListAcceptedPortfolioShares"
        
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

        res = operations.ListAcceptedPortfolioSharesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAcceptedPortfolioSharesOutput])
                res.list_accepted_portfolio_shares_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.operation_not_supported_exception = out

        return res

    
    def list_budgets_for_resource(self, request: operations.ListBudgetsForResourceRequest) -> operations.ListBudgetsForResourceResponse:
        r"""Lists all the budgets associated to the specified resource.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.ListBudgetsForResource"
        
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

        res = operations.ListBudgetsForResourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListBudgetsForResourceOutput])
                res.list_budgets_for_resource_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out

        return res

    
    def list_constraints_for_portfolio(self, request: operations.ListConstraintsForPortfolioRequest) -> operations.ListConstraintsForPortfolioResponse:
        r"""Lists the constraints for the specified portfolio and product.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.ListConstraintsForPortfolio"
        
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

        res = operations.ListConstraintsForPortfolioResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListConstraintsForPortfolioOutput])
                res.list_constraints_for_portfolio_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out

        return res

    
    def list_launch_paths(self, request: operations.ListLaunchPathsRequest) -> operations.ListLaunchPathsResponse:
        r"""Lists the paths to the specified product. A path is how the user has access to a specified product, and is necessary when provisioning a product. A path also determines the constraints put on the product.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.ListLaunchPaths"
        
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

        res = operations.ListLaunchPathsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListLaunchPathsOutput])
                res.list_launch_paths_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def list_organization_portfolio_access(self, request: operations.ListOrganizationPortfolioAccessRequest) -> operations.ListOrganizationPortfolioAccessResponse:
        r"""<p>Lists the organization nodes that have access to the specified portfolio. This API can only be called by the management account in the organization or by a delegated admin.</p> <p>If a delegated admin is de-registered, they can no longer perform this operation.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.ListOrganizationPortfolioAccess"
        
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

        res = operations.ListOrganizationPortfolioAccessResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListOrganizationPortfolioAccessOutput])
                res.list_organization_portfolio_access_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.operation_not_supported_exception = out

        return res

    
    def list_portfolio_access(self, request: operations.ListPortfolioAccessRequest) -> operations.ListPortfolioAccessResponse:
        r"""<p>Lists the account IDs that have access to the specified portfolio.</p> <p>A delegated admin can list the accounts that have access to the shared portfolio. Note that if a delegated admin is de-registered, they can no longer perform this operation.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolioAccess"
        
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

        res = operations.ListPortfolioAccessResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListPortfolioAccessOutput])
                res.list_portfolio_access_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out

        return res

    
    def list_portfolios(self, request: operations.ListPortfoliosRequest) -> operations.ListPortfoliosResponse:
        r"""Lists all portfolios in the catalog.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolios"
        
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

        res = operations.ListPortfoliosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListPortfoliosOutput])
                res.list_portfolios_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out

        return res

    
    def list_portfolios_for_product(self, request: operations.ListPortfoliosForProductRequest) -> operations.ListPortfoliosForProductResponse:
        r"""Lists all portfolios that the specified product is associated with.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.ListPortfoliosForProduct"
        
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

        res = operations.ListPortfoliosForProductResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListPortfoliosForProductOutput])
                res.list_portfolios_for_product_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def list_principals_for_portfolio(self, request: operations.ListPrincipalsForPortfolioRequest) -> operations.ListPrincipalsForPortfolioResponse:
        r"""Lists all principal ARNs associated with the specified portfolio.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.ListPrincipalsForPortfolio"
        
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

        res = operations.ListPrincipalsForPortfolioResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListPrincipalsForPortfolioOutput])
                res.list_principals_for_portfolio_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out

        return res

    
    def list_provisioned_product_plans(self, request: operations.ListProvisionedProductPlansRequest) -> operations.ListProvisionedProductPlansResponse:
        r"""Lists the plans for the specified provisioned product or all plans to which the user has access.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.ListProvisionedProductPlans"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ListProvisionedProductPlansResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListProvisionedProductPlansOutput])
                res.list_provisioned_product_plans_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out

        return res

    
    def list_provisioning_artifacts(self, request: operations.ListProvisioningArtifactsRequest) -> operations.ListProvisioningArtifactsResponse:
        r"""Lists all provisioning artifacts (also known as versions) for the specified product.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifacts"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ListProvisioningArtifactsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListProvisioningArtifactsOutput])
                res.list_provisioning_artifacts_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out

        return res

    
    def list_provisioning_artifacts_for_service_action(self, request: operations.ListProvisioningArtifactsForServiceActionRequest) -> operations.ListProvisioningArtifactsForServiceActionResponse:
        r"""Lists all provisioning artifacts (also known as versions) for the specified self-service action.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifactsForServiceAction"
        
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

        res = operations.ListProvisioningArtifactsForServiceActionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListProvisioningArtifactsForServiceActionOutput])
                res.list_provisioning_artifacts_for_service_action_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out

        return res

    
    def list_record_history(self, request: operations.ListRecordHistoryRequest) -> operations.ListRecordHistoryResponse:
        r"""Lists the specified requests or all performed requests.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.ListRecordHistory"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ListRecordHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListRecordHistoryOutput])
                res.list_record_history_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out

        return res

    
    def list_resources_for_tag_option(self, request: operations.ListResourcesForTagOptionRequest) -> operations.ListResourcesForTagOptionResponse:
        r"""Lists the resources associated with the specified TagOption.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.ListResourcesForTagOption"
        
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

        res = operations.ListResourcesForTagOptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListResourcesForTagOptionOutput])
                res.list_resources_for_tag_option_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.tag_option_not_migrated_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out

        return res

    
    def list_service_actions(self, request: operations.ListServiceActionsRequest) -> operations.ListServiceActionsResponse:
        r"""Lists all self-service actions.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActions"
        
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

        res = operations.ListServiceActionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListServiceActionsOutput])
                res.list_service_actions_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out

        return res

    
    def list_service_actions_for_provisioning_artifact(self, request: operations.ListServiceActionsForProvisioningArtifactRequest) -> operations.ListServiceActionsForProvisioningArtifactResponse:
        r"""Returns a paginated list of self-service actions associated with the specified Product ID and Provisioning Artifact ID.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActionsForProvisioningArtifact"
        
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

        res = operations.ListServiceActionsForProvisioningArtifactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListServiceActionsForProvisioningArtifactOutput])
                res.list_service_actions_for_provisioning_artifact_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out

        return res

    
    def list_stack_instances_for_provisioned_product(self, request: operations.ListStackInstancesForProvisionedProductRequest) -> operations.ListStackInstancesForProvisionedProductResponse:
        r"""Returns summary information about stack instances that are associated with the specified <code>CFN_STACKSET</code> type provisioned product. You can filter for stack instances that are associated with a specific AWS account name or region. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.ListStackInstancesForProvisionedProduct"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ListStackInstancesForProvisionedProductResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListStackInstancesForProvisionedProductOutput])
                res.list_stack_instances_for_provisioned_product_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def list_tag_options(self, request: operations.ListTagOptionsRequest) -> operations.ListTagOptionsResponse:
        r"""Lists the specified TagOptions or all TagOptions.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.ListTagOptions"
        
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

        res = operations.ListTagOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTagOptionsOutput])
                res.list_tag_options_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.tag_option_not_migrated_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out

        return res

    
    def provision_product(self, request: operations.ProvisionProductRequest) -> operations.ProvisionProductResponse:
        r"""<p>Provisions the specified product.</p> <p>A provisioned product is a resourced instance of a product. For example, provisioning a product based on a CloudFormation template launches a CloudFormation stack and its underlying resources. You can check the status of this request using <a>DescribeRecord</a>.</p> <p>If the request contains a tag key with an empty list of values, there is a tag conflict for that key. Do not include conflicted keys as tags, or this causes the error \"Parameter validation failed: Missing required parameter in Tags[<i>N</i>]:<i>Value</i>\".</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.ProvisionProduct"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProvisionProductResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProvisionProductOutput])
                res.provision_product_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.duplicate_resource_exception = out

        return res

    
    def reject_portfolio_share(self, request: operations.RejectPortfolioShareRequest) -> operations.RejectPortfolioShareResponse:
        r"""Rejects an offer to share the specified portfolio.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.RejectPortfolioShare"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RejectPortfolioShareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.reject_portfolio_share_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def scan_provisioned_products(self, request: operations.ScanProvisionedProductsRequest) -> operations.ScanProvisionedProductsResponse:
        r"""<p>Lists the provisioned products that are available (not terminated).</p> <p>To use additional filtering, see <a>SearchProvisionedProducts</a>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.ScanProvisionedProducts"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ScanProvisionedProductsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScanProvisionedProductsOutput])
                res.scan_provisioned_products_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out

        return res

    
    def search_products(self, request: operations.SearchProductsRequest) -> operations.SearchProductsResponse:
        r"""Gets information about the products to which the caller has access.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.SearchProducts"
        
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

        res = operations.SearchProductsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchProductsOutput])
                res.search_products_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out

        return res

    
    def search_products_as_admin(self, request: operations.SearchProductsAsAdminRequest) -> operations.SearchProductsAsAdminResponse:
        r"""Gets information about the products for the specified portfolio or all products.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.SearchProductsAsAdmin"
        
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

        res = operations.SearchProductsAsAdminResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchProductsAsAdminOutput])
                res.search_products_as_admin_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out

        return res

    
    def search_provisioned_products(self, request: operations.SearchProvisionedProductsRequest) -> operations.SearchProvisionedProductsResponse:
        r"""Gets information about the provisioned products that meet the specified criteria.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.SearchProvisionedProducts"
        
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

        res = operations.SearchProvisionedProductsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchProvisionedProductsOutput])
                res.search_provisioned_products_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out

        return res

    
    def terminate_provisioned_product(self, request: operations.TerminateProvisionedProductRequest) -> operations.TerminateProvisionedProductResponse:
        r"""<p>Terminates the specified provisioned product.</p> <p>This operation does not delete any records associated with the provisioned product.</p> <p>You can check the status of this request using <a>DescribeRecord</a>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.TerminateProvisionedProduct"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TerminateProvisionedProductResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TerminateProvisionedProductOutput])
                res.terminate_provisioned_product_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def update_constraint(self, request: operations.UpdateConstraintRequest) -> operations.UpdateConstraintResponse:
        r"""Updates the specified constraint.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.UpdateConstraint"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateConstraintResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateConstraintOutput])
                res.update_constraint_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out

        return res

    
    def update_portfolio(self, request: operations.UpdatePortfolioRequest) -> operations.UpdatePortfolioResponse:
        r"""<p>Updates the specified portfolio.</p> <p>You cannot update a product that was shared with you.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.UpdatePortfolio"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdatePortfolioResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdatePortfolioOutput])
                res.update_portfolio_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.limit_exceeded_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.tag_option_not_migrated_exception = out

        return res

    
    def update_portfolio_share(self, request: operations.UpdatePortfolioShareRequest) -> operations.UpdatePortfolioShareResponse:
        r"""<p>Updates the specified portfolio share. You can use this API to enable or disable TagOptions sharing for an existing portfolio share. </p> <p>The portfolio share cannot be updated if the <code> CreatePortfolioShare</code> operation is <code>IN_PROGRESS</code>, as the share is not available to recipient entities. In this case, you must wait for the portfolio share to be COMPLETED.</p> <p>You must provide the <code>accountId</code> or organization node in the input, but not both.</p> <p>If the portfolio is shared to both an external account and an organization node, and both shares need to be updated, you must invoke <code>UpdatePortfolioShare</code> separately for each share type. </p> <p>This API cannot be used for removing the portfolio share. You must use <code>DeletePortfolioShare</code> API for that action. </p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.UpdatePortfolioShare"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdatePortfolioShareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdatePortfolioShareOutput])
                res.update_portfolio_share_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.operation_not_supported_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_state_exception = out

        return res

    
    def update_product(self, request: operations.UpdateProductRequest) -> operations.UpdateProductResponse:
        r"""Updates the specified product.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.UpdateProduct"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateProductResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateProductOutput])
                res.update_product_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.tag_option_not_migrated_exception = out

        return res

    
    def update_provisioned_product(self, request: operations.UpdateProvisionedProductRequest) -> operations.UpdateProvisionedProductResponse:
        r"""<p>Requests updates to the configuration of the specified provisioned product.</p> <p>If there are tags associated with the object, they cannot be updated or added. Depending on the specific updates requested, this operation can update with no interruption, with some interruption, or replace the provisioned product entirely.</p> <p>You can check the status of this request using <a>DescribeRecord</a>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProduct"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateProvisionedProductResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateProvisionedProductOutput])
                res.update_provisioned_product_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def update_provisioned_product_properties(self, request: operations.UpdateProvisionedProductPropertiesRequest) -> operations.UpdateProvisionedProductPropertiesResponse:
        r"""Requests updates to the properties of the specified provisioned product.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProductProperties"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateProvisionedProductPropertiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateProvisionedProductPropertiesOutput])
                res.update_provisioned_product_properties_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_state_exception = out

        return res

    
    def update_provisioning_artifact(self, request: operations.UpdateProvisioningArtifactRequest) -> operations.UpdateProvisioningArtifactResponse:
        r"""<p>Updates the specified provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot update a provisioning artifact for a product that was shared with you.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisioningArtifact"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateProvisioningArtifactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateProvisioningArtifactOutput])
                res.update_provisioning_artifact_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out

        return res

    
    def update_service_action(self, request: operations.UpdateServiceActionRequest) -> operations.UpdateServiceActionResponse:
        r"""Updates a self-service action.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.UpdateServiceAction"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateServiceActionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateServiceActionOutput])
                res.update_service_action_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out

        return res

    
    def update_tag_option(self, request: operations.UpdateTagOptionRequest) -> operations.UpdateTagOptionResponse:
        r"""Updates the specified TagOption.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWS242ServiceCatalogService.UpdateTagOption"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateTagOptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateTagOptionOutput])
                res.update_tag_option_output = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.tag_option_not_migrated_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.duplicate_resource_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_parameters_exception = out

        return res

    