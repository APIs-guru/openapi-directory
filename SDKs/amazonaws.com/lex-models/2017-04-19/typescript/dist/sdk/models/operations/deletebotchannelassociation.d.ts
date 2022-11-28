import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteBotChannelAssociationPathParams extends SpeakeasyBase {
    aliasName: string;
    botName: string;
    name: string;
}
export declare class DeleteBotChannelAssociationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteBotChannelAssociationRequest extends SpeakeasyBase {
    pathParams: DeleteBotChannelAssociationPathParams;
    headers: DeleteBotChannelAssociationHeaders;
}
export declare class DeleteBotChannelAssociationResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
}
