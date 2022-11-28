import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteIntentPathParams extends SpeakeasyBase {
    name: string;
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
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    resourceInUseException?: any;
    statusCode: number;
}
