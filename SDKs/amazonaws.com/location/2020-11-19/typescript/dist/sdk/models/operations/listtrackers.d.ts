import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTrackersQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListTrackersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListTrackersRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListTrackersRequest extends SpeakeasyBase {
    queryParams: ListTrackersQueryParams;
    headers: ListTrackersHeaders;
    request: ListTrackersRequestBody;
}
export declare class ListTrackersResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listTrackersResponse?: shared.ListTrackersResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
