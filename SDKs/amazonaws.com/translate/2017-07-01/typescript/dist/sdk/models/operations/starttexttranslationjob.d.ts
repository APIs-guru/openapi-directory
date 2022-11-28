import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartTextTranslationJobXAmzTargetEnum {
    AwsShineFrontendService20170701StartTextTranslationJob = "AWSShineFrontendService_20170701.StartTextTranslationJob"
}
export declare class StartTextTranslationJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartTextTranslationJobXAmzTargetEnum;
}
export declare class StartTextTranslationJobRequest extends SpeakeasyBase {
    headers: StartTextTranslationJobHeaders;
    request: shared.StartTextTranslationJobRequest;
}
export declare class StartTextTranslationJobResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    startTextTranslationJobResponse?: shared.StartTextTranslationJobResponse;
    statusCode: number;
    tooManyRequestsException?: any;
    unsupportedLanguagePairException?: any;
}
