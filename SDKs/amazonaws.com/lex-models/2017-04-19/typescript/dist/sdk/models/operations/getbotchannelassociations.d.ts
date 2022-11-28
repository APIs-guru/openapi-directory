import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBotChannelAssociationsPathParams extends SpeakeasyBase {
    aliasName: string;
    botName: string;
}
export declare class GetBotChannelAssociationsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nameContains?: string;
    nextToken?: string;
}
export declare class GetBotChannelAssociationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetBotChannelAssociationsRequest extends SpeakeasyBase {
    pathParams: GetBotChannelAssociationsPathParams;
    queryParams: GetBotChannelAssociationsQueryParams;
    headers: GetBotChannelAssociationsHeaders;
}
export declare class GetBotChannelAssociationsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getBotChannelAssociationsResponse?: shared.GetBotChannelAssociationsResponse;
    internalFailureException?: any;
    limitExceededException?: any;
    statusCode: number;
}
