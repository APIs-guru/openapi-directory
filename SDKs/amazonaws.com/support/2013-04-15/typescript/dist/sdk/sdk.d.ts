import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    AddAttachmentsToSet(req: operations.AddAttachmentsToSetRequest, config?: AxiosRequestConfig): Promise<operations.AddAttachmentsToSetResponse>;
    AddCommunicationToCase(req: operations.AddCommunicationToCaseRequest, config?: AxiosRequestConfig): Promise<operations.AddCommunicationToCaseResponse>;
    CreateCase(req: operations.CreateCaseRequest, config?: AxiosRequestConfig): Promise<operations.CreateCaseResponse>;
    DescribeAttachment(req: operations.DescribeAttachmentRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAttachmentResponse>;
    DescribeCases(req: operations.DescribeCasesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeCasesResponse>;
    DescribeCommunications(req: operations.DescribeCommunicationsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeCommunicationsResponse>;
    DescribeServices(req: operations.DescribeServicesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeServicesResponse>;
    DescribeSeverityLevels(req: operations.DescribeSeverityLevelsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSeverityLevelsResponse>;
    DescribeTrustedAdvisorCheckRefreshStatuses(req: operations.DescribeTrustedAdvisorCheckRefreshStatusesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeTrustedAdvisorCheckRefreshStatusesResponse>;
    DescribeTrustedAdvisorCheckResult(req: operations.DescribeTrustedAdvisorCheckResultRequest, config?: AxiosRequestConfig): Promise<operations.DescribeTrustedAdvisorCheckResultResponse>;
    DescribeTrustedAdvisorCheckSummaries(req: operations.DescribeTrustedAdvisorCheckSummariesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeTrustedAdvisorCheckSummariesResponse>;
    DescribeTrustedAdvisorChecks(req: operations.DescribeTrustedAdvisorChecksRequest, config?: AxiosRequestConfig): Promise<operations.DescribeTrustedAdvisorChecksResponse>;
    RefreshTrustedAdvisorCheck(req: operations.RefreshTrustedAdvisorCheckRequest, config?: AxiosRequestConfig): Promise<operations.RefreshTrustedAdvisorCheckResponse>;
    ResolveCase(req: operations.ResolveCaseRequest, config?: AxiosRequestConfig): Promise<operations.ResolveCaseResponse>;
}
export {};
