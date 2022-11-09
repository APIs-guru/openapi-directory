import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutProvisionedConcurrencyConfigPathParams extends SpeakeasyBase {
    functionName: string;
}
export declare class PutProvisionedConcurrencyConfigQueryParams extends SpeakeasyBase {
    qualifier: string;
}
export declare class PutProvisionedConcurrencyConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutProvisionedConcurrencyConfigRequestBody extends SpeakeasyBase {
    provisionedConcurrentExecutions: number;
}
export declare class PutProvisionedConcurrencyConfigRequest extends SpeakeasyBase {
    pathParams: PutProvisionedConcurrencyConfigPathParams;
    queryParams: PutProvisionedConcurrencyConfigQueryParams;
    headers: PutProvisionedConcurrencyConfigHeaders;
    request: PutProvisionedConcurrencyConfigRequestBody;
}
export declare class PutProvisionedConcurrencyConfigResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    putProvisionedConcurrencyConfigResponse?: shared.PutProvisionedConcurrencyConfigResponse;
    resourceConflictException?: any;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
