import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBotChannelAssociationPathParams extends SpeakeasyBase {
    aliasName: string;
    botName: string;
    name: string;
}
export declare class GetBotChannelAssociationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetBotChannelAssociationRequest extends SpeakeasyBase {
    pathParams: GetBotChannelAssociationPathParams;
    headers: GetBotChannelAssociationHeaders;
}
export declare class GetBotChannelAssociationResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getBotChannelAssociationResponse?: shared.GetBotChannelAssociationResponse;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
}
