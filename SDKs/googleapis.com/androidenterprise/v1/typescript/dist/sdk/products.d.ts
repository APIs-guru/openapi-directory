import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Products {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * androidenterpriseProductsApprove -  Approves the specified product and the relevant app permissions, if any. The maximum number of products that you can approve per enterprise customer is 1,000. To learn how to use managed Google Play to design and create a store layout to display approved products to your users, see Store Layout Design. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
    **/
    androidenterpriseProductsApprove(req: operations.AndroidenterpriseProductsApproveRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseProductsApproveResponse>;
    /**
     * androidenterpriseProductsGenerateApprovalUrl - Generates a URL that can be rendered in an iframe to display the permissions (if any) of a product. An enterprise admin must view these permissions and accept them on behalf of their organization in order to approve that product. Admins should accept the displayed permissions by interacting with a separate UI element in the EMM console, which in turn should trigger the use of this URL as the approvalUrlInfo.approvalUrl property in a Products.approve call to approve the product. This URL can only be used to display permissions for up to 1 day. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
    **/
    androidenterpriseProductsGenerateApprovalUrl(req: operations.AndroidenterpriseProductsGenerateApprovalUrlRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseProductsGenerateApprovalUrlResponse>;
    /**
     * androidenterpriseProductsGet - Retrieves details of a product for display to an enterprise admin.
    **/
    androidenterpriseProductsGet(req: operations.AndroidenterpriseProductsGetRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseProductsGetResponse>;
    /**
     * androidenterpriseProductsGetAppRestrictionsSchema - Retrieves the schema that defines the configurable properties for this product. All products have a schema, but this schema may be empty if no managed configurations have been defined. This schema can be used to populate a UI that allows an admin to configure the product. To apply a managed configuration based on the schema obtained using this API, see Managed Configurations through Play.
    **/
    androidenterpriseProductsGetAppRestrictionsSchema(req: operations.AndroidenterpriseProductsGetAppRestrictionsSchemaRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseProductsGetAppRestrictionsSchemaResponse>;
    /**
     * androidenterpriseProductsGetPermissions - Retrieves the Android app permissions required by this app.
    **/
    androidenterpriseProductsGetPermissions(req: operations.AndroidenterpriseProductsGetPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseProductsGetPermissionsResponse>;
    /**
     * androidenterpriseProductsList - Finds approved products that match a query, or all approved products if there is no query. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
    **/
    androidenterpriseProductsList(req: operations.AndroidenterpriseProductsListRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseProductsListResponse>;
    /**
     * androidenterpriseProductsUnapprove - Unapproves the specified product (and the relevant app permissions, if any) **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
    **/
    androidenterpriseProductsUnapprove(req: operations.AndroidenterpriseProductsUnapproveRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseProductsUnapproveResponse>;
}
