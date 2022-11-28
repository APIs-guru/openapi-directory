import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopTextTranslationJobXAmzTargetEnum {
    AwsShineFrontendService20170701StopTextTranslationJob = "AWSShineFrontendService_20170701.StopTextTranslationJob"
}
export declare class StopTextTranslationJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopTextTranslationJobXAmzTargetEnum;
}
export declare class StopTextTranslationJobRequest extends SpeakeasyBase {
    headers: StopTextTranslationJobHeaders;
    request: shared.StopTextTranslationJobRequest;
}
export declare class StopTextTranslationJobResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    stopTextTranslationJobResponse?: shared.StopTextTranslationJobResponse;
    tooManyRequestsException?: any;
}
