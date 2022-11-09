import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetRequestedServiceQuotaChangeXAmzTargetEnum {
    ServiceQuotasV20190624GetRequestedServiceQuotaChange = "ServiceQuotasV20190624.GetRequestedServiceQuotaChange"
}
export declare class GetRequestedServiceQuotaChangeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRequestedServiceQuotaChangeXAmzTargetEnum;
}
export declare class GetRequestedServiceQuotaChangeRequest extends SpeakeasyBase {
    headers: GetRequestedServiceQuotaChangeHeaders;
    request: shared.GetRequestedServiceQuotaChangeRequest;
}
export declare class GetRequestedServiceQuotaChangeResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getRequestedServiceQuotaChangeResponse?: shared.GetRequestedServiceQuotaChangeResponse;
    illegalArgumentException?: any;
    noSuchResourceException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
