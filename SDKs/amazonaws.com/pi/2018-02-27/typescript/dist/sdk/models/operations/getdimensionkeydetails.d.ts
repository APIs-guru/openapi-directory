import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDimensionKeyDetailsXAmzTargetEnum {
    PerformanceInsightsv20180227GetDimensionKeyDetails = "PerformanceInsightsv20180227.GetDimensionKeyDetails"
}
export declare class GetDimensionKeyDetailsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDimensionKeyDetailsXAmzTargetEnum;
}
export declare class GetDimensionKeyDetailsRequest extends SpeakeasyBase {
    headers: GetDimensionKeyDetailsHeaders;
    request: shared.GetDimensionKeyDetailsRequest;
}
export declare class GetDimensionKeyDetailsResponse extends SpeakeasyBase {
    contentType: string;
    getDimensionKeyDetailsResponse?: shared.GetDimensionKeyDetailsResponse;
    internalServiceError?: any;
    invalidArgumentException?: any;
    notAuthorizedException?: any;
    statusCode: number;
}
