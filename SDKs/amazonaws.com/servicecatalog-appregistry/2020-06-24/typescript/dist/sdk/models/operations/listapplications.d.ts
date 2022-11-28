import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListApplicationsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListApplicationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListApplicationsRequest extends SpeakeasyBase {
    queryParams: ListApplicationsQueryParams;
    headers: ListApplicationsHeaders;
}
export declare class ListApplicationsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    listApplicationsResponse?: shared.ListApplicationsResponse;
    statusCode: number;
    validationException?: any;
}
