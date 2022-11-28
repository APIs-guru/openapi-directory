import { SpeakeasyBase } from "../../../internal/utils";
export declare class StopStreamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StopStreamRequestBody extends SpeakeasyBase {
    channelArn: string;
}
export declare class StopStreamRequest extends SpeakeasyBase {
    headers: StopStreamHeaders;
    request: StopStreamRequestBody;
}
export declare class StopStreamResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    channelNotBroadcasting?: any;
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
    stopStreamResponse?: Map<string, any>;
    streamUnavailable?: any;
    validationException?: any;
}
