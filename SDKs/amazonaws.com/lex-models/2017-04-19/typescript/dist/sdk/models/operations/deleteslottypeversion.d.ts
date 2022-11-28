import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteSlotTypeVersionPathParams extends SpeakeasyBase {
    name: string;
    version: string;
}
export declare class DeleteSlotTypeVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteSlotTypeVersionRequest extends SpeakeasyBase {
    pathParams: DeleteSlotTypeVersionPathParams;
    headers: DeleteSlotTypeVersionHeaders;
}
export declare class DeleteSlotTypeVersionResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    resourceInUseException?: any;
    statusCode: number;
}
