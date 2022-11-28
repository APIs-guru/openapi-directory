import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListContactListsQueryParams extends SpeakeasyBase {
    nextToken?: string;
    pageSize?: number;
}
export declare class ListContactListsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListContactListsRequest extends SpeakeasyBase {
    queryParams: ListContactListsQueryParams;
    headers: ListContactListsHeaders;
}
export declare class ListContactListsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    listContactListsResponse?: shared.ListContactListsResponse;
    statusCode: number;
    tooManyRequestsException?: any;
}
