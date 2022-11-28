import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteCallAnalyticsCategoryXAmzTargetEnum {
    TranscribeDeleteCallAnalyticsCategory = "Transcribe.DeleteCallAnalyticsCategory"
}
export declare class DeleteCallAnalyticsCategoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteCallAnalyticsCategoryXAmzTargetEnum;
}
export declare class DeleteCallAnalyticsCategoryRequest extends SpeakeasyBase {
    headers: DeleteCallAnalyticsCategoryHeaders;
    request: shared.DeleteCallAnalyticsCategoryRequest;
}
export declare class DeleteCallAnalyticsCategoryResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteCallAnalyticsCategoryResponse?: Map<string, any>;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
}
