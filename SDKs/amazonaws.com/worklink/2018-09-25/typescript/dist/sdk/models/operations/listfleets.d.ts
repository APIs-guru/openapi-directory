import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListFleetsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListFleetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListFleetsRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListFleetsRequest extends SpeakeasyBase {
    queryParams: ListFleetsQueryParams;
    headers: ListFleetsHeaders;
    request: ListFleetsRequestBody;
}
export declare class ListFleetsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerErrorException?: any;
    invalidRequestException?: any;
    listFleetsResponse?: shared.ListFleetsResponse;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
