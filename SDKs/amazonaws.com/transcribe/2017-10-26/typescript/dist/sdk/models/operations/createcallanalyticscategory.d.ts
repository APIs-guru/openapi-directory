import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateCallAnalyticsCategoryXAmzTargetEnum {
    TranscribeCreateCallAnalyticsCategory = "Transcribe.CreateCallAnalyticsCategory"
}
export declare class CreateCallAnalyticsCategoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateCallAnalyticsCategoryXAmzTargetEnum;
}
export declare class CreateCallAnalyticsCategoryRequest extends SpeakeasyBase {
    headers: CreateCallAnalyticsCategoryHeaders;
    request: shared.CreateCallAnalyticsCategoryRequest;
}
export declare class CreateCallAnalyticsCategoryResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    createCallAnalyticsCategoryResponse?: shared.CreateCallAnalyticsCategoryResponse;
    internalFailureException?: any;
    limitExceededException?: any;
    statusCode: number;
}
