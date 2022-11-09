import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class StopHumanLoopHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StopHumanLoopRequestBody extends SpeakeasyBase {
    humanLoopName: string;
}
export declare class StopHumanLoopRequest extends SpeakeasyBase {
    headers: StopHumanLoopHeaders;
    request: StopHumanLoopRequestBody;
}
export declare class StopHumanLoopResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    stopHumanLoopResponse?: Map<string, any>;
    throttlingException?: any;
    validationException?: any;
}
