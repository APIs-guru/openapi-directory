import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteSessionPathParams extends SpeakeasyBase {
    botAlias: string;
    botName: string;
    userId: string;
}
export declare class DeleteSessionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteSessionRequest extends SpeakeasyBase {
    pathParams: DeleteSessionPathParams;
    headers: DeleteSessionHeaders;
}
export declare class DeleteSessionResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    deleteSessionResponse?: shared.DeleteSessionResponse;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
}
