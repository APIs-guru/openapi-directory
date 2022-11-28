import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateStreamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateStreamRequestBody extends SpeakeasyBase {
    currentVersion: string;
    deviceName?: string;
    mediaType?: string;
    streamArn?: string;
    streamName?: string;
}
export declare class UpdateStreamRequest extends SpeakeasyBase {
    headers: UpdateStreamHeaders;
    request: UpdateStreamRequestBody;
}
export declare class UpdateStreamResponse extends SpeakeasyBase {
    clientLimitExceededException?: any;
    contentType: string;
    invalidArgumentException?: any;
    notAuthorizedException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateStreamOutput?: Map<string, any>;
    versionMismatchException?: any;
}
