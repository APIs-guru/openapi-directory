import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteSlotTypePathParams extends SpeakeasyBase {
    botId: string;
    botVersion: string;
    localeId: string;
    slotTypeId: string;
}
export declare class DeleteSlotTypeQueryParams extends SpeakeasyBase {
    skipResourceInUseCheck?: boolean;
}
export declare class DeleteSlotTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteSlotTypeRequest extends SpeakeasyBase {
    pathParams: DeleteSlotTypePathParams;
    queryParams: DeleteSlotTypeQueryParams;
    headers: DeleteSlotTypeHeaders;
}
export declare class DeleteSlotTypeResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    preconditionFailedException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
