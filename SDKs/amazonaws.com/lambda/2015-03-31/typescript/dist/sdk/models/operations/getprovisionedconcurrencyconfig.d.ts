import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProvisionedConcurrencyConfigPathParams extends SpeakeasyBase {
    functionName: string;
}
export declare class GetProvisionedConcurrencyConfigQueryParams extends SpeakeasyBase {
    qualifier: string;
}
export declare class GetProvisionedConcurrencyConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetProvisionedConcurrencyConfigRequest extends SpeakeasyBase {
    pathParams: GetProvisionedConcurrencyConfigPathParams;
    queryParams: GetProvisionedConcurrencyConfigQueryParams;
    headers: GetProvisionedConcurrencyConfigHeaders;
}
export declare class GetProvisionedConcurrencyConfigResponse extends SpeakeasyBase {
    contentType: string;
    getProvisionedConcurrencyConfigResponse?: shared.GetProvisionedConcurrencyConfigResponse;
    invalidParameterValueException?: any;
    provisionedConcurrencyConfigNotFoundException?: any;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
