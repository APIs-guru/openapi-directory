import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopProjectVersionXAmzTargetEnum {
    RekognitionServiceStopProjectVersion = "RekognitionService.StopProjectVersion"
}
export declare class StopProjectVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopProjectVersionXAmzTargetEnum;
}
export declare class StopProjectVersionRequest extends SpeakeasyBase {
    headers: StopProjectVersionHeaders;
    request: shared.StopProjectVersionRequest;
}
export declare class StopProjectVersionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerError?: any;
    invalidParameterException?: any;
    provisionedThroughputExceededException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    stopProjectVersionResponse?: shared.StopProjectVersionResponse;
    throttlingException?: any;
}
