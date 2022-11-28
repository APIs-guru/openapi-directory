import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutBotAliasPathParams extends SpeakeasyBase {
    botName: string;
    name: string;
}
export declare class PutBotAliasHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Provides the settings needed for conversation logs.
**/
export declare class PutBotAliasRequestBodyConversationLogs extends SpeakeasyBase {
    iamRoleArn?: string;
    logSettings?: shared.LogSettingsRequest[];
}
export declare class PutBotAliasRequestBody extends SpeakeasyBase {
    botVersion: string;
    checksum?: string;
    conversationLogs?: PutBotAliasRequestBodyConversationLogs;
    description?: string;
    tags?: shared.Tag[];
}
export declare class PutBotAliasRequest extends SpeakeasyBase {
    pathParams: PutBotAliasPathParams;
    headers: PutBotAliasHeaders;
    request: PutBotAliasRequestBody;
}
export declare class PutBotAliasResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    internalFailureException?: any;
    limitExceededException?: any;
    preconditionFailedException?: any;
    putBotAliasResponse?: shared.PutBotAliasResponse;
    statusCode: number;
}
