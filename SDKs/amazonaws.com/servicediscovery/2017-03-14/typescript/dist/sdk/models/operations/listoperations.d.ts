import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListOperationsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListOperationsXAmzTargetEnum {
    Route53AutoNamingV20170314ListOperations = "Route53AutoNaming_v20170314.ListOperations"
}
export declare class ListOperationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListOperationsXAmzTargetEnum;
}
export declare class ListOperationsRequest extends SpeakeasyBase {
    queryParams: ListOperationsQueryParams;
    headers: ListOperationsHeaders;
    request: shared.ListOperationsRequest;
}
export declare class ListOperationsResponse extends SpeakeasyBase {
    contentType: string;
    invalidInput?: any;
    listOperationsResponse?: shared.ListOperationsResponse;
    statusCode: number;
}
