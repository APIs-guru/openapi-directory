import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDedicatedIpPoolsQueryParams extends SpeakeasyBase {
    nextToken?: string;
    pageSize?: number;
}
export declare class ListDedicatedIpPoolsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDedicatedIpPoolsRequest extends SpeakeasyBase {
    queryParams: ListDedicatedIpPoolsQueryParams;
    headers: ListDedicatedIpPoolsHeaders;
}
export declare class ListDedicatedIpPoolsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    listDedicatedIpPoolsResponse?: shared.ListDedicatedIpPoolsResponse;
    statusCode: number;
    tooManyRequestsException?: any;
}
