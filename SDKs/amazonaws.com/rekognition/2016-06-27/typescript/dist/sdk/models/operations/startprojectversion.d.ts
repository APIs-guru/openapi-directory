import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartProjectVersionXAmzTargetEnum {
    RekognitionServiceStartProjectVersion = "RekognitionService.StartProjectVersion"
}
export declare class StartProjectVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartProjectVersionXAmzTargetEnum;
}
export declare class StartProjectVersionRequest extends SpeakeasyBase {
    headers: StartProjectVersionHeaders;
    request: shared.StartProjectVersionRequest;
}
export declare class StartProjectVersionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerError?: any;
    invalidParameterException?: any;
    limitExceededException?: any;
    provisionedThroughputExceededException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    startProjectVersionResponse?: shared.StartProjectVersionResponse;
    statusCode: number;
    throttlingException?: any;
}
