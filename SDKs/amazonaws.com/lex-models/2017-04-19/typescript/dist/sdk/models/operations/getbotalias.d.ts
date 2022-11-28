import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBotAliasPathParams extends SpeakeasyBase {
    botName: string;
    name: string;
}
export declare class GetBotAliasHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetBotAliasRequest extends SpeakeasyBase {
    pathParams: GetBotAliasPathParams;
    headers: GetBotAliasHeaders;
}
export declare class GetBotAliasResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getBotAliasResponse?: shared.GetBotAliasResponse;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
}
