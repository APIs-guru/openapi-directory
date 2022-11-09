import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum PutServiceQuotaIncreaseRequestIntoTemplateXAmzTargetEnum {
    ServiceQuotasV20190624PutServiceQuotaIncreaseRequestIntoTemplate = "ServiceQuotasV20190624.PutServiceQuotaIncreaseRequestIntoTemplate"
}
export declare class PutServiceQuotaIncreaseRequestIntoTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutServiceQuotaIncreaseRequestIntoTemplateXAmzTargetEnum;
}
export declare class PutServiceQuotaIncreaseRequestIntoTemplateRequest extends SpeakeasyBase {
    headers: PutServiceQuotaIncreaseRequestIntoTemplateHeaders;
    request: shared.PutServiceQuotaIncreaseRequestIntoTemplateRequest;
}
export declare class PutServiceQuotaIncreaseRequestIntoTemplateResponse extends SpeakeasyBase {
    awsServiceAccessNotEnabledException?: any;
    accessDeniedException?: any;
    contentType: string;
    dependencyAccessDeniedException?: any;
    illegalArgumentException?: any;
    noAvailableOrganizationException?: any;
    noSuchResourceException?: any;
    putServiceQuotaIncreaseRequestIntoTemplateResponse?: shared.PutServiceQuotaIncreaseRequestIntoTemplateResponse;
    quotaExceededException?: any;
    serviceException?: any;
    statusCode: number;
    templatesNotAvailableInRegionException?: any;
    tooManyRequestsException?: any;
}
