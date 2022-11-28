import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum CreateChannelRequestBodyLatencyModeEnum {
    Normal = "NORMAL",
    Low = "LOW"
}
export declare enum CreateChannelRequestBodyTypeEnum {
    Basic = "BASIC",
    Standard = "STANDARD"
}
export declare class CreateChannelRequestBody extends SpeakeasyBase {
    authorized?: boolean;
    latencyMode?: CreateChannelRequestBodyLatencyModeEnum;
    name?: string;
    recordingConfigurationArn?: string;
    tags?: Map<string, string>;
    type?: CreateChannelRequestBodyTypeEnum;
}
export declare class CreateChannelRequest extends SpeakeasyBase {
    headers: CreateChannelHeaders;
    request: CreateChannelRequestBody;
}
export declare class CreateChannelResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createChannelResponse?: shared.CreateChannelResponse;
    pendingVerification?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    validationException?: any;
}
