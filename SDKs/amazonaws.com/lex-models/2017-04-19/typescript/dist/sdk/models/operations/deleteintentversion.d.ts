import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteIntentVersionPathParams extends SpeakeasyBase {
    name: string;
    version: string;
}
export declare class DeleteIntentVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteIntentVersionRequest extends SpeakeasyBase {
    pathParams: DeleteIntentVersionPathParams;
    headers: DeleteIntentVersionHeaders;
}
export declare class DeleteIntentVersionResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    resourceInUseException?: any;
    statusCode: number;
}
