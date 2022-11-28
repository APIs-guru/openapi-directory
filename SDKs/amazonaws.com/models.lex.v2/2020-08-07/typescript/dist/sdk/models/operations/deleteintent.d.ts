import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteIntentPathParams extends SpeakeasyBase {
    botId: string;
    botVersion: string;
    intentId: string;
    localeId: string;
}
export declare class DeleteIntentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteIntentRequest extends SpeakeasyBase {
    pathParams: DeleteIntentPathParams;
    headers: DeleteIntentHeaders;
}
export declare class DeleteIntentResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    preconditionFailedException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
