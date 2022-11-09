import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetServiceQuotaXAmzTargetEnum {
    ServiceQuotasV20190624GetServiceQuota = "ServiceQuotasV20190624.GetServiceQuota"
}
export declare class GetServiceQuotaHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetServiceQuotaXAmzTargetEnum;
}
export declare class GetServiceQuotaRequest extends SpeakeasyBase {
    headers: GetServiceQuotaHeaders;
    request: shared.GetServiceQuotaRequest;
}
export declare class GetServiceQuotaResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getServiceQuotaResponse?: shared.GetServiceQuotaResponse;
    illegalArgumentException?: any;
    noSuchResourceException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
