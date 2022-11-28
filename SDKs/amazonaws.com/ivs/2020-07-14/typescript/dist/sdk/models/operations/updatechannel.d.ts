import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateChannelRequestBodyLatencyModeEnum {
    Normal = "NORMAL",
    Low = "LOW"
}
export declare enum UpdateChannelRequestBodyTypeEnum {
    Basic = "BASIC",
    Standard = "STANDARD"
}
export declare class UpdateChannelRequestBody extends SpeakeasyBase {
    arn: string;
    authorized?: boolean;
    latencyMode?: UpdateChannelRequestBodyLatencyModeEnum;
    name?: string;
    recordingConfigurationArn?: string;
    type?: UpdateChannelRequestBodyTypeEnum;
}
export declare class UpdateChannelRequest extends SpeakeasyBase {
    headers: UpdateChannelHeaders;
    request: UpdateChannelRequestBody;
}
export declare class UpdateChannelResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    pendingVerification?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateChannelResponse?: shared.UpdateChannelResponse;
    validationException?: any;
}
