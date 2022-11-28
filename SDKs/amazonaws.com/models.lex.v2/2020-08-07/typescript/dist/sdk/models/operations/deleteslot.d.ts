import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteSlotPathParams extends SpeakeasyBase {
    botId: string;
    botVersion: string;
    intentId: string;
    localeId: string;
    slotId: string;
}
export declare class DeleteSlotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteSlotRequest extends SpeakeasyBase {
    pathParams: DeleteSlotPathParams;
    headers: DeleteSlotHeaders;
}
export declare class DeleteSlotResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    preconditionFailedException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
