import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBotPathParams extends SpeakeasyBase {
    name: string;
    versionoralias: string;
}
export declare class GetBotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetBotRequest extends SpeakeasyBase {
    pathParams: GetBotPathParams;
    headers: GetBotHeaders;
}
export declare class GetBotResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getBotResponse?: shared.GetBotResponse;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
}
