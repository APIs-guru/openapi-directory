import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteBotAliasPathParams extends SpeakeasyBase {
    botName: string;
    name: string;
}
export declare class DeleteBotAliasHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteBotAliasRequest extends SpeakeasyBase {
    pathParams: DeleteBotAliasPathParams;
    headers: DeleteBotAliasHeaders;
}
export declare class DeleteBotAliasResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    resourceInUseException?: any;
    statusCode: number;
}
