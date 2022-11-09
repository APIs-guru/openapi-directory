import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class UpdateSignalingChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type.
**/
export declare class UpdateSignalingChannelRequestBodySingleMasterConfiguration extends SpeakeasyBase {
    messageTtlSeconds?: number;
}
export declare class UpdateSignalingChannelRequestBody extends SpeakeasyBase {
    channelArn: string;
    currentVersion: string;
    singleMasterConfiguration?: UpdateSignalingChannelRequestBodySingleMasterConfiguration;
}
export declare class UpdateSignalingChannelRequest extends SpeakeasyBase {
    headers: UpdateSignalingChannelHeaders;
    request: UpdateSignalingChannelRequestBody;
}
export declare class UpdateSignalingChannelResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    clientLimitExceededException?: any;
    contentType: string;
    invalidArgumentException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateSignalingChannelOutput?: Map<string, any>;
    versionMismatchException?: any;
}
