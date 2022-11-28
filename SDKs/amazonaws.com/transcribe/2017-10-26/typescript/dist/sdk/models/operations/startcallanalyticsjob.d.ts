import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartCallAnalyticsJobXAmzTargetEnum {
    TranscribeStartCallAnalyticsJob = "Transcribe.StartCallAnalyticsJob"
}
export declare class StartCallAnalyticsJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartCallAnalyticsJobXAmzTargetEnum;
}
export declare class StartCallAnalyticsJobRequest extends SpeakeasyBase {
    headers: StartCallAnalyticsJobHeaders;
    request: shared.StartCallAnalyticsJobRequest;
}
export declare class StartCallAnalyticsJobResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    internalFailureException?: any;
    limitExceededException?: any;
    startCallAnalyticsJobResponse?: shared.StartCallAnalyticsJobResponse;
    statusCode: number;
}
