import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateCallAnalyticsCategoryXAmzTargetEnum {
    TranscribeUpdateCallAnalyticsCategory = "Transcribe.UpdateCallAnalyticsCategory"
}
export declare class UpdateCallAnalyticsCategoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateCallAnalyticsCategoryXAmzTargetEnum;
}
export declare class UpdateCallAnalyticsCategoryRequest extends SpeakeasyBase {
    headers: UpdateCallAnalyticsCategoryHeaders;
    request: shared.UpdateCallAnalyticsCategoryRequest;
}
export declare class UpdateCallAnalyticsCategoryResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    updateCallAnalyticsCategoryResponse?: shared.UpdateCallAnalyticsCategoryResponse;
}
