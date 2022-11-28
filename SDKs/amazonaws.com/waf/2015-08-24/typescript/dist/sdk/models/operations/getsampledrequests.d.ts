import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetSampledRequestsXAmzTargetEnum {
    Awswaf20150824GetSampledRequests = "AWSWAF_20150824.GetSampledRequests"
}
export declare class GetSampledRequestsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSampledRequestsXAmzTargetEnum;
}
export declare class GetSampledRequestsRequest extends SpeakeasyBase {
    headers: GetSampledRequestsHeaders;
    request: shared.GetSampledRequestsRequest;
}
export declare class GetSampledRequestsResponse extends SpeakeasyBase {
    contentType: string;
    getSampledRequestsResponse?: shared.GetSampledRequestsResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafNonexistentItemException?: any;
}
