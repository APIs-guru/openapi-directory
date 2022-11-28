import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetCallAnalyticsCategoryXAmzTargetEnum {
    TranscribeGetCallAnalyticsCategory = "Transcribe.GetCallAnalyticsCategory"
}
export declare class GetCallAnalyticsCategoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCallAnalyticsCategoryXAmzTargetEnum;
}
export declare class GetCallAnalyticsCategoryRequest extends SpeakeasyBase {
    headers: GetCallAnalyticsCategoryHeaders;
    request: shared.GetCallAnalyticsCategoryRequest;
}
export declare class GetCallAnalyticsCategoryResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getCallAnalyticsCategoryResponse?: shared.GetCallAnalyticsCategoryResponse;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
}
