import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum RequestServiceQuotaIncreaseXAmzTargetEnum {
    ServiceQuotasV20190624RequestServiceQuotaIncrease = "ServiceQuotasV20190624.RequestServiceQuotaIncrease"
}
export declare class RequestServiceQuotaIncreaseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RequestServiceQuotaIncreaseXAmzTargetEnum;
}
export declare class RequestServiceQuotaIncreaseRequest extends SpeakeasyBase {
    headers: RequestServiceQuotaIncreaseHeaders;
    request: shared.RequestServiceQuotaIncreaseRequest;
}
export declare class RequestServiceQuotaIncreaseResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    dependencyAccessDeniedException?: any;
    illegalArgumentException?: any;
    invalidResourceStateException?: any;
    noSuchResourceException?: any;
    quotaExceededException?: any;
    requestServiceQuotaIncreaseResponse?: shared.RequestServiceQuotaIncreaseResponse;
    resourceAlreadyExistsException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
