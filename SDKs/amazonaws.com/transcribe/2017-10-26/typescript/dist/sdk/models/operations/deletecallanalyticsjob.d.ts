import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteCallAnalyticsJobXAmzTargetEnum {
    TranscribeDeleteCallAnalyticsJob = "Transcribe.DeleteCallAnalyticsJob"
}
export declare class DeleteCallAnalyticsJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteCallAnalyticsJobXAmzTargetEnum;
}
export declare class DeleteCallAnalyticsJobRequest extends SpeakeasyBase {
    headers: DeleteCallAnalyticsJobHeaders;
    request: shared.DeleteCallAnalyticsJobRequest;
}
export declare class DeleteCallAnalyticsJobResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteCallAnalyticsJobResponse?: Map<string, any>;
    internalFailureException?: any;
    limitExceededException?: any;
    statusCode: number;
}
