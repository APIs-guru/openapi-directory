import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPortalsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListPortalsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListPortalsRequest extends SpeakeasyBase {
    queryParams: ListPortalsQueryParams;
    headers: ListPortalsHeaders;
}
export declare class ListPortalsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listPortalsResponse?: shared.ListPortalsResponse;
    statusCode: number;
    throttlingException?: any;
}
