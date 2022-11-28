import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://servicequotas.{region}.amazonaws.com", "https://servicequotas.{region}.amazonaws.com", "http://servicequotas.{region}.amazonaws.com.cn", "https://servicequotas.{region}.amazonaws.com.cn"];
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
     * associateServiceQuotaTemplate - Associates your quota request template with your organization. When a new account is created in your organization, the quota increase requests in the template are automatically applied to the account. You can add a quota increase request for any adjustable quota to your template.
    **/
    associateServiceQuotaTemplate(req: operations.AssociateServiceQuotaTemplateRequest, config?: AxiosRequestConfig): Promise<operations.AssociateServiceQuotaTemplateResponse>;
    /**
     * deleteServiceQuotaIncreaseRequestFromTemplate - Deletes the quota increase request for the specified quota from your quota request template.
    **/
    deleteServiceQuotaIncreaseRequestFromTemplate(req: operations.DeleteServiceQuotaIncreaseRequestFromTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteServiceQuotaIncreaseRequestFromTemplateResponse>;
    /**
     * disassociateServiceQuotaTemplate - Disables your quota request template. After a template is disabled, the quota increase requests in the template are not applied to new accounts in your organization. Disabling a quota request template does not apply its quota increase requests.
    **/
    disassociateServiceQuotaTemplate(req: operations.DisassociateServiceQuotaTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateServiceQuotaTemplateResponse>;
    /**
     * getAwsDefaultServiceQuota - Retrieves the default value for the specified quota. The default value does not reflect any quota increases.
    **/
    getAwsDefaultServiceQuota(req: operations.GetAwsDefaultServiceQuotaRequest, config?: AxiosRequestConfig): Promise<operations.GetAwsDefaultServiceQuotaResponse>;
    /**
     * getAssociationForServiceQuotaTemplate - Retrieves the status of the association for the quota request template.
    **/
    getAssociationForServiceQuotaTemplate(req: operations.GetAssociationForServiceQuotaTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetAssociationForServiceQuotaTemplateResponse>;
    /**
     * getRequestedServiceQuotaChange - Retrieves information about the specified quota increase request.
    **/
    getRequestedServiceQuotaChange(req: operations.GetRequestedServiceQuotaChangeRequest, config?: AxiosRequestConfig): Promise<operations.GetRequestedServiceQuotaChangeResponse>;
    /**
     * getServiceQuota - Retrieves the applied quota value for the specified quota. For some quotas, only the default values are available. If the applied quota value is not available for a quota, the quota is not retrieved.
    **/
    getServiceQuota(req: operations.GetServiceQuotaRequest, config?: AxiosRequestConfig): Promise<operations.GetServiceQuotaResponse>;
    /**
     * getServiceQuotaIncreaseRequestFromTemplate - Retrieves information about the specified quota increase request in your quota request template.
    **/
    getServiceQuotaIncreaseRequestFromTemplate(req: operations.GetServiceQuotaIncreaseRequestFromTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetServiceQuotaIncreaseRequestFromTemplateResponse>;
    /**
     * listAwsDefaultServiceQuotas - Lists the default values for the quotas for the specified AWS service. A default value does not reflect any quota increases.
    **/
    listAwsDefaultServiceQuotas(req: operations.ListAwsDefaultServiceQuotasRequest, config?: AxiosRequestConfig): Promise<operations.ListAwsDefaultServiceQuotasResponse>;
    /**
     * listRequestedServiceQuotaChangeHistory - Retrieves the quota increase requests for the specified service.
    **/
    listRequestedServiceQuotaChangeHistory(req: operations.ListRequestedServiceQuotaChangeHistoryRequest, config?: AxiosRequestConfig): Promise<operations.ListRequestedServiceQuotaChangeHistoryResponse>;
    /**
     * listRequestedServiceQuotaChangeHistoryByQuota - Retrieves the quota increase requests for the specified quota.
    **/
    listRequestedServiceQuotaChangeHistoryByQuota(req: operations.ListRequestedServiceQuotaChangeHistoryByQuotaRequest, config?: AxiosRequestConfig): Promise<operations.ListRequestedServiceQuotaChangeHistoryByQuotaResponse>;
    /**
     * listServiceQuotaIncreaseRequestsInTemplate - Lists the quota increase requests in the specified quota request template.
    **/
    listServiceQuotaIncreaseRequestsInTemplate(req: operations.ListServiceQuotaIncreaseRequestsInTemplateRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceQuotaIncreaseRequestsInTemplateResponse>;
    /**
     * listServiceQuotas - Lists the applied quota values for the specified AWS service. For some quotas, only the default values are available. If the applied quota value is not available for a quota, the quota is not retrieved.
    **/
    listServiceQuotas(req: operations.ListServiceQuotasRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceQuotasResponse>;
    /**
     * listServices - Lists the names and codes for the services integrated with Service Quotas.
    **/
    listServices(req: operations.ListServicesRequest, config?: AxiosRequestConfig): Promise<operations.ListServicesResponse>;
    /**
     * listTagsForResource - Returns a list of the tags assigned to the specified applied quota.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * putServiceQuotaIncreaseRequestIntoTemplate - Adds a quota increase request to your quota request template.
    **/
    putServiceQuotaIncreaseRequestIntoTemplate(req: operations.PutServiceQuotaIncreaseRequestIntoTemplateRequest, config?: AxiosRequestConfig): Promise<operations.PutServiceQuotaIncreaseRequestIntoTemplateResponse>;
    /**
     * requestServiceQuotaIncrease - Submits a quota increase request for the specified quota.
    **/
    requestServiceQuotaIncrease(req: operations.RequestServiceQuotaIncreaseRequest, config?: AxiosRequestConfig): Promise<operations.RequestServiceQuotaIncreaseResponse>;
    /**
     * tagResource - Adds tags to the specified applied quota. You can include one or more tags to add to the quota.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Removes tags from the specified applied quota. You can specify one or more tags to remove.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
}
export {};
