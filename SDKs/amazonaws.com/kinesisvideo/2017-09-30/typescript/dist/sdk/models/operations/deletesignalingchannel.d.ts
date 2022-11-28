import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteSignalingChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteSignalingChannelRequestBody extends SpeakeasyBase {
    channelArn: string;
    currentVersion?: string;
}
export declare class DeleteSignalingChannelRequest extends SpeakeasyBase {
    headers: DeleteSignalingChannelHeaders;
    request: DeleteSignalingChannelRequestBody;
}
export declare class DeleteSignalingChannelResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    clientLimitExceededException?: any;
    contentType: string;
    deleteSignalingChannelOutput?: Map<string, any>;
    invalidArgumentException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    versionMismatchException?: any;
}
