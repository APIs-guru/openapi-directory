import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListProvisionedConcurrencyConfigsPathParams extends SpeakeasyBase {
    functionName: string;
}
export declare enum ListProvisionedConcurrencyConfigsListEnum {
    All = "ALL"
}
export declare class ListProvisionedConcurrencyConfigsQueryParams extends SpeakeasyBase {
    list: ListProvisionedConcurrencyConfigsListEnum;
    marker?: string;
    maxItems?: number;
}
export declare class ListProvisionedConcurrencyConfigsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListProvisionedConcurrencyConfigsRequest extends SpeakeasyBase {
    pathParams: ListProvisionedConcurrencyConfigsPathParams;
    queryParams: ListProvisionedConcurrencyConfigsQueryParams;
    headers: ListProvisionedConcurrencyConfigsHeaders;
}
export declare class ListProvisionedConcurrencyConfigsResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    listProvisionedConcurrencyConfigsResponse?: shared.ListProvisionedConcurrencyConfigsResponse;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
