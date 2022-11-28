import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTextTranslationJobsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListTextTranslationJobsXAmzTargetEnum {
    AwsShineFrontendService20170701ListTextTranslationJobs = "AWSShineFrontendService_20170701.ListTextTranslationJobs"
}
export declare class ListTextTranslationJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTextTranslationJobsXAmzTargetEnum;
}
export declare class ListTextTranslationJobsRequest extends SpeakeasyBase {
    queryParams: ListTextTranslationJobsQueryParams;
    headers: ListTextTranslationJobsHeaders;
    request: shared.ListTextTranslationJobsRequest;
}
export declare class ListTextTranslationJobsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidFilterException?: any;
    invalidRequestException?: any;
    listTextTranslationJobsResponse?: shared.ListTextTranslationJobsResponse;
    statusCode: number;
    tooManyRequestsException?: any;
}
