import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteBotVersionPathParams extends SpeakeasyBase {
    name: string;
    version: string;
}
export declare class DeleteBotVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteBotVersionRequest extends SpeakeasyBase {
    pathParams: DeleteBotVersionPathParams;
    headers: DeleteBotVersionHeaders;
}
export declare class DeleteBotVersionResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    resourceInUseException?: any;
    statusCode: number;
}
