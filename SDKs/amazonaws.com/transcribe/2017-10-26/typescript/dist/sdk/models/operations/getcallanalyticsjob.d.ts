import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetCallAnalyticsJobXAmzTargetEnum {
    TranscribeGetCallAnalyticsJob = "Transcribe.GetCallAnalyticsJob"
}
export declare class GetCallAnalyticsJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCallAnalyticsJobXAmzTargetEnum;
}
export declare class GetCallAnalyticsJobRequest extends SpeakeasyBase {
    headers: GetCallAnalyticsJobHeaders;
    request: shared.GetCallAnalyticsJobRequest;
}
export declare class GetCallAnalyticsJobResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getCallAnalyticsJobResponse?: shared.GetCallAnalyticsJobResponse;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
}
