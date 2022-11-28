import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListCallAnalyticsCategoriesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListCallAnalyticsCategoriesXAmzTargetEnum {
    TranscribeListCallAnalyticsCategories = "Transcribe.ListCallAnalyticsCategories"
}
export declare class ListCallAnalyticsCategoriesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListCallAnalyticsCategoriesXAmzTargetEnum;
}
export declare class ListCallAnalyticsCategoriesRequest extends SpeakeasyBase {
    queryParams: ListCallAnalyticsCategoriesQueryParams;
    headers: ListCallAnalyticsCategoriesHeaders;
    request: shared.ListCallAnalyticsCategoriesRequest;
}
export declare class ListCallAnalyticsCategoriesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    internalFailureException?: any;
    limitExceededException?: any;
    listCallAnalyticsCategoriesResponse?: shared.ListCallAnalyticsCategoriesResponse;
    statusCode: number;
}
