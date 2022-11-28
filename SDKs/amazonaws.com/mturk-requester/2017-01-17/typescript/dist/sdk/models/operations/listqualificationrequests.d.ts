import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListQualificationRequestsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListQualificationRequestsXAmzTargetEnum {
    MTurkRequesterServiceV20170117ListQualificationRequests = "MTurkRequesterServiceV20170117.ListQualificationRequests"
}
export declare class ListQualificationRequestsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListQualificationRequestsXAmzTargetEnum;
}
export declare class ListQualificationRequestsRequest extends SpeakeasyBase {
    queryParams: ListQualificationRequestsQueryParams;
    headers: ListQualificationRequestsHeaders;
    request: shared.ListQualificationRequestsRequest;
}
export declare class ListQualificationRequestsResponse extends SpeakeasyBase {
    contentType: string;
    listQualificationRequestsResponse?: shared.ListQualificationRequestsResponse;
    requestError?: any;
    serviceFault?: any;
    statusCode: number;
}
