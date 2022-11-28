import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListReviewableHiTsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListReviewableHiTsXAmzTargetEnum {
    MTurkRequesterServiceV20170117ListReviewableHiTs = "MTurkRequesterServiceV20170117.ListReviewableHITs"
}
export declare class ListReviewableHiTsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListReviewableHiTsXAmzTargetEnum;
}
export declare class ListReviewableHiTsRequest extends SpeakeasyBase {
    queryParams: ListReviewableHiTsQueryParams;
    headers: ListReviewableHiTsHeaders;
    request: shared.ListReviewableHiTsRequest;
}
export declare class ListReviewableHiTsResponse extends SpeakeasyBase {
    contentType: string;
    listReviewableHiTsResponse?: shared.ListReviewableHiTsResponse;
    requestError?: any;
    serviceFault?: any;
    statusCode: number;
}
