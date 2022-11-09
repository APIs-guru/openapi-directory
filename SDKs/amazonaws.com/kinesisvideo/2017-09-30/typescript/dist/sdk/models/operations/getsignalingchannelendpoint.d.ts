import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetSignalingChannelEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * An object that contains the endpoint configuration for the <code>SINGLE_MASTER</code> channel type.
**/
export declare class GetSignalingChannelEndpointRequestBodySingleMasterChannelEndpointConfiguration extends SpeakeasyBase {
    protocols?: shared.ChannelProtocolEnum[];
    role?: shared.ChannelRoleEnum;
}
export declare class GetSignalingChannelEndpointRequestBody extends SpeakeasyBase {
    channelArn: string;
    singleMasterChannelEndpointConfiguration?: GetSignalingChannelEndpointRequestBodySingleMasterChannelEndpointConfiguration;
}
export declare class GetSignalingChannelEndpointRequest extends SpeakeasyBase {
    headers: GetSignalingChannelEndpointHeaders;
    request: GetSignalingChannelEndpointRequestBody;
}
export declare class GetSignalingChannelEndpointResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    clientLimitExceededException?: any;
    contentType: string;
    getSignalingChannelEndpointOutput?: shared.GetSignalingChannelEndpointOutput;
    invalidArgumentException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
