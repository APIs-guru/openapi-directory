import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListRetirableGrantsXAmzTargetEnum {
    TrentServiceListRetirableGrants = "TrentService.ListRetirableGrants"
}
export declare class ListRetirableGrantsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListRetirableGrantsXAmzTargetEnum;
}
export declare class ListRetirableGrantsRequest extends SpeakeasyBase {
    headers: ListRetirableGrantsHeaders;
    request: shared.ListRetirableGrantsRequest;
}
export declare class ListRetirableGrantsResponse extends SpeakeasyBase {
    contentType: string;
    dependencyTimeoutException?: any;
    invalidArnException?: any;
    invalidMarkerException?: any;
    kmsInternalException?: any;
    listGrantsResponse?: shared.ListGrantsResponse;
    notFoundException?: any;
    statusCode: number;
}
