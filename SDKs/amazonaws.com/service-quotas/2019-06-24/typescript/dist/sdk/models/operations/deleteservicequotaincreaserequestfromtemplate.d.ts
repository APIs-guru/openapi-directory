import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteServiceQuotaIncreaseRequestFromTemplateXAmzTargetEnum {
    ServiceQuotasV20190624DeleteServiceQuotaIncreaseRequestFromTemplate = "ServiceQuotasV20190624.DeleteServiceQuotaIncreaseRequestFromTemplate"
}
export declare class DeleteServiceQuotaIncreaseRequestFromTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteServiceQuotaIncreaseRequestFromTemplateXAmzTargetEnum;
}
export declare class DeleteServiceQuotaIncreaseRequestFromTemplateRequest extends SpeakeasyBase {
    headers: DeleteServiceQuotaIncreaseRequestFromTemplateHeaders;
    request: shared.DeleteServiceQuotaIncreaseRequestFromTemplateRequest;
}
export declare class DeleteServiceQuotaIncreaseRequestFromTemplateResponse extends SpeakeasyBase {
    awsServiceAccessNotEnabledException?: any;
    accessDeniedException?: any;
    contentType: string;
    deleteServiceQuotaIncreaseRequestFromTemplateResponse?: Map<string, any>;
    dependencyAccessDeniedException?: any;
    illegalArgumentException?: any;
    noAvailableOrganizationException?: any;
    noSuchResourceException?: any;
    serviceException?: any;
    statusCode: number;
    templatesNotAvailableInRegionException?: any;
    tooManyRequestsException?: any;
}
