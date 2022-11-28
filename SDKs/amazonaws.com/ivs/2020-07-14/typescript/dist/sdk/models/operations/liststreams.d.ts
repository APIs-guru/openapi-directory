import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListStreamsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListStreamsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListStreamsRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListStreamsRequest extends SpeakeasyBase {
    queryParams: ListStreamsQueryParams;
    headers: ListStreamsHeaders;
    request: ListStreamsRequestBody;
}
export declare class ListStreamsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    listStreamsResponse?: shared.ListStreamsResponse;
    statusCode: number;
}
