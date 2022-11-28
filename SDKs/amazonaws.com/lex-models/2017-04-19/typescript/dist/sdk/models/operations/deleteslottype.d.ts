import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteSlotTypePathParams extends SpeakeasyBase {
    name: string;
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
    headers: DeleteSlotTypeHeaders;
}
export declare class DeleteSlotTypeResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    resourceInUseException?: any;
    statusCode: number;
}
