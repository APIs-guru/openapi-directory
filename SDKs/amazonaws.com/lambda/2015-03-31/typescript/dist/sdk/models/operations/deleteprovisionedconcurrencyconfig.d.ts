import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteProvisionedConcurrencyConfigPathParams extends SpeakeasyBase {
    functionName: string;
}
export declare class DeleteProvisionedConcurrencyConfigQueryParams extends SpeakeasyBase {
    qualifier: string;
}
export declare class DeleteProvisionedConcurrencyConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteProvisionedConcurrencyConfigRequest extends SpeakeasyBase {
    pathParams: DeleteProvisionedConcurrencyConfigPathParams;
    queryParams: DeleteProvisionedConcurrencyConfigQueryParams;
    headers: DeleteProvisionedConcurrencyConfigHeaders;
}
export declare class DeleteProvisionedConcurrencyConfigResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    resourceConflictException?: any;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
