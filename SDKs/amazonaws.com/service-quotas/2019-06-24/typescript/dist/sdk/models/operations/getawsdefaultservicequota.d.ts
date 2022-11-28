import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetAwsDefaultServiceQuotaXAmzTargetEnum {
    ServiceQuotasV20190624GetAwsDefaultServiceQuota = "ServiceQuotasV20190624.GetAWSDefaultServiceQuota"
}
export declare class GetAwsDefaultServiceQuotaHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAwsDefaultServiceQuotaXAmzTargetEnum;
}
export declare class GetAwsDefaultServiceQuotaRequest extends SpeakeasyBase {
    headers: GetAwsDefaultServiceQuotaHeaders;
    request: shared.GetAwsDefaultServiceQuotaRequest;
}
export declare class GetAwsDefaultServiceQuotaResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getAwsDefaultServiceQuotaResponse?: shared.GetAwsDefaultServiceQuotaResponse;
    illegalArgumentException?: any;
    noSuchResourceException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
