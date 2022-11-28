import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListFunctionsFunctionVersionEnum {
    All = "ALL"
}
export declare class ListFunctionsQueryParams extends SpeakeasyBase {
    functionVersion?: ListFunctionsFunctionVersionEnum;
    marker?: string;
    masterRegion?: string;
    maxItems?: number;
}
export declare class ListFunctionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListFunctionsRequest extends SpeakeasyBase {
    queryParams: ListFunctionsQueryParams;
    headers: ListFunctionsHeaders;
}
export declare class ListFunctionsResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    listFunctionsResponse?: shared.ListFunctionsResponse;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
