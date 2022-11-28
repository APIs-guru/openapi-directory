import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteBotPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DeleteBotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteBotRequest extends SpeakeasyBase {
    pathParams: DeleteBotPathParams;
    headers: DeleteBotHeaders;
}
export declare class DeleteBotResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    resourceInUseException?: any;
    statusCode: number;
}
