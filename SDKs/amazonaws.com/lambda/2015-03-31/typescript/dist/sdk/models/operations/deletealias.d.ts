import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteAliasPathParams extends SpeakeasyBase {
    functionName: string;
    name: string;
}
export declare class DeleteAliasHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteAliasRequest extends SpeakeasyBase {
    pathParams: DeleteAliasPathParams;
    headers: DeleteAliasHeaders;
}
export declare class DeleteAliasResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    resourceConflictException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
