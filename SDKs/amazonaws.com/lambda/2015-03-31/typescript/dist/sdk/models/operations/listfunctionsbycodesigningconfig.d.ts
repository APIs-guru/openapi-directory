import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListFunctionsByCodeSigningConfigPathParams extends SpeakeasyBase {
    codeSigningConfigArn: string;
}
export declare class ListFunctionsByCodeSigningConfigQueryParams extends SpeakeasyBase {
    marker?: string;
    maxItems?: number;
}
export declare class ListFunctionsByCodeSigningConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListFunctionsByCodeSigningConfigRequest extends SpeakeasyBase {
    pathParams: ListFunctionsByCodeSigningConfigPathParams;
    queryParams: ListFunctionsByCodeSigningConfigQueryParams;
    headers: ListFunctionsByCodeSigningConfigHeaders;
}
export declare class ListFunctionsByCodeSigningConfigResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    listFunctionsByCodeSigningConfigResponse?: shared.ListFunctionsByCodeSigningConfigResponse;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
}
