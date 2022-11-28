import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateSignalingChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum CreateSignalingChannelRequestBodyChannelTypeEnum {
    SingleMaster = "SINGLE_MASTER"
}
/**
 * A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type.
**/
export declare class CreateSignalingChannelRequestBodySingleMasterConfiguration extends SpeakeasyBase {
    messageTtlSeconds?: number;
}
export declare class CreateSignalingChannelRequestBody extends SpeakeasyBase {
    channelName: string;
    channelType?: CreateSignalingChannelRequestBodyChannelTypeEnum;
    singleMasterConfiguration?: CreateSignalingChannelRequestBodySingleMasterConfiguration;
    tags?: shared.Tag[];
}
export declare class CreateSignalingChannelRequest extends SpeakeasyBase {
    headers: CreateSignalingChannelHeaders;
    request: CreateSignalingChannelRequestBody;
}
export declare class CreateSignalingChannelResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountChannelLimitExceededException?: any;
    clientLimitExceededException?: any;
    contentType: string;
    createSignalingChannelOutput?: shared.CreateSignalingChannelOutput;
    invalidArgumentException?: any;
    resourceInUseException?: any;
    statusCode: number;
    tagsPerResourceExceededLimitException?: any;
}
