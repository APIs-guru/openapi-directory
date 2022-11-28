import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListHiTsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListHiTsXAmzTargetEnum {
    MTurkRequesterServiceV20170117ListHiTs = "MTurkRequesterServiceV20170117.ListHITs"
}
export declare class ListHiTsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListHiTsXAmzTargetEnum;
}
export declare class ListHiTsRequest extends SpeakeasyBase {
    queryParams: ListHiTsQueryParams;
    headers: ListHiTsHeaders;
    request: shared.ListHiTsRequest;
}
export declare class ListHiTsResponse extends SpeakeasyBase {
    contentType: string;
    listHiTsResponse?: shared.ListHiTsResponse;
    requestError?: any;
    serviceFault?: any;
    statusCode: number;
}
