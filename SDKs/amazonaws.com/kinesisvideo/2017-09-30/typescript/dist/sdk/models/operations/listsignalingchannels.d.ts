import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListSignalingChannelsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListSignalingChannelsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * An optional input parameter for the <code>ListSignalingChannels</code> API. When this parameter is specified while invoking <code>ListSignalingChannels</code>, the API returns only the channels that satisfy a condition specified in <code>ChannelNameCondition</code>.
**/
export declare class ListSignalingChannelsRequestBodyChannelNameCondition extends SpeakeasyBase {
    comparisonOperator?: shared.ComparisonOperatorEnum;
    comparisonValue?: string;
}
export declare class ListSignalingChannelsRequestBody extends SpeakeasyBase {
    channelNameCondition?: ListSignalingChannelsRequestBodyChannelNameCondition;
    maxResults?: number;
    nextToken?: string;
}
export declare class ListSignalingChannelsRequest extends SpeakeasyBase {
    queryParams: ListSignalingChannelsQueryParams;
    headers: ListSignalingChannelsHeaders;
    request: ListSignalingChannelsRequestBody;
}
export declare class ListSignalingChannelsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    clientLimitExceededException?: any;
    contentType: string;
    invalidArgumentException?: any;
    listSignalingChannelsOutput?: shared.ListSignalingChannelsOutput;
    statusCode: number;
}
