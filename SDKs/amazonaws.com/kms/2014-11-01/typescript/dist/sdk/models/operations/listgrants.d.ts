import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListGrantsQueryParams extends SpeakeasyBase {
    limit?: string;
    marker?: string;
}
export declare enum ListGrantsXAmzTargetEnum {
    TrentServiceListGrants = "TrentService.ListGrants"
}
export declare class ListGrantsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListGrantsXAmzTargetEnum;
}
export declare class ListGrantsRequest extends SpeakeasyBase {
    queryParams: ListGrantsQueryParams;
    headers: ListGrantsHeaders;
    request: shared.ListGrantsRequest;
}
export declare class ListGrantsResponse extends SpeakeasyBase {
    contentType: string;
    dependencyTimeoutException?: any;
    invalidArnException?: any;
    invalidGrantIdException?: any;
    invalidMarkerException?: any;
    kmsInternalException?: any;
    kmsInvalidStateException?: any;
    listGrantsResponse?: shared.ListGrantsResponse;
    notFoundException?: any;
    statusCode: number;
}
