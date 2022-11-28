import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSamplingRulesQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare class GetSamplingRulesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSamplingRulesRequestBody extends SpeakeasyBase {
    nextToken?: string;
}
export declare class GetSamplingRulesRequest extends SpeakeasyBase {
    queryParams: GetSamplingRulesQueryParams;
    headers: GetSamplingRulesHeaders;
    request: GetSamplingRulesRequestBody;
}
export declare class GetSamplingRulesResponse extends SpeakeasyBase {
    contentType: string;
    getSamplingRulesResult?: shared.GetSamplingRulesResult;
    invalidRequestException?: any;
    statusCode: number;
    throttledException?: any;
}
