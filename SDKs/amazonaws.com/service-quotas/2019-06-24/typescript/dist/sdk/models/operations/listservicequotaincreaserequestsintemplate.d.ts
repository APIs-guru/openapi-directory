import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListServiceQuotaIncreaseRequestsInTemplateQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListServiceQuotaIncreaseRequestsInTemplateXAmzTargetEnum {
    ServiceQuotasV20190624ListServiceQuotaIncreaseRequestsInTemplate = "ServiceQuotasV20190624.ListServiceQuotaIncreaseRequestsInTemplate"
}
export declare class ListServiceQuotaIncreaseRequestsInTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListServiceQuotaIncreaseRequestsInTemplateXAmzTargetEnum;
}
export declare class ListServiceQuotaIncreaseRequestsInTemplateRequest extends SpeakeasyBase {
    queryParams: ListServiceQuotaIncreaseRequestsInTemplateQueryParams;
    headers: ListServiceQuotaIncreaseRequestsInTemplateHeaders;
    request: shared.ListServiceQuotaIncreaseRequestsInTemplateRequest;
}
export declare class ListServiceQuotaIncreaseRequestsInTemplateResponse extends SpeakeasyBase {
    awsServiceAccessNotEnabledException?: any;
    accessDeniedException?: any;
    contentType: string;
    dependencyAccessDeniedException?: any;
    illegalArgumentException?: any;
    listServiceQuotaIncreaseRequestsInTemplateResponse?: shared.ListServiceQuotaIncreaseRequestsInTemplateResponse;
    noAvailableOrganizationException?: any;
    serviceException?: any;
    statusCode: number;
    templatesNotAvailableInRegionException?: any;
    tooManyRequestsException?: any;
}
