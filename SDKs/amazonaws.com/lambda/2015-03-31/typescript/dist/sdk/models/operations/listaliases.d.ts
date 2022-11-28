import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAliasesPathParams extends SpeakeasyBase {
    functionName: string;
}
export declare class ListAliasesQueryParams extends SpeakeasyBase {
    functionVersion?: string;
    marker?: string;
    maxItems?: number;
}
export declare class ListAliasesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListAliasesRequest extends SpeakeasyBase {
    pathParams: ListAliasesPathParams;
    queryParams: ListAliasesQueryParams;
    headers: ListAliasesHeaders;
}
export declare class ListAliasesResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    listAliasesResponse?: shared.ListAliasesResponse;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
