import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetServiceQuotaIncreaseRequestFromTemplateXAmzTargetEnum {
    ServiceQuotasV20190624GetServiceQuotaIncreaseRequestFromTemplate = "ServiceQuotasV20190624.GetServiceQuotaIncreaseRequestFromTemplate"
}
export declare class GetServiceQuotaIncreaseRequestFromTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetServiceQuotaIncreaseRequestFromTemplateXAmzTargetEnum;
}
export declare class GetServiceQuotaIncreaseRequestFromTemplateRequest extends SpeakeasyBase {
    headers: GetServiceQuotaIncreaseRequestFromTemplateHeaders;
    request: shared.GetServiceQuotaIncreaseRequestFromTemplateRequest;
}
export declare class GetServiceQuotaIncreaseRequestFromTemplateResponse extends SpeakeasyBase {
    awsServiceAccessNotEnabledException?: any;
    accessDeniedException?: any;
    contentType: string;
    dependencyAccessDeniedException?: any;
    getServiceQuotaIncreaseRequestFromTemplateResponse?: shared.GetServiceQuotaIncreaseRequestFromTemplateResponse;
    illegalArgumentException?: any;
    noAvailableOrganizationException?: any;
    noSuchResourceException?: any;
    serviceException?: any;
    statusCode: number;
    templatesNotAvailableInRegionException?: any;
    tooManyRequestsException?: any;
}
