import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSlotTypeVersionsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class GetSlotTypeVersionsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class GetSlotTypeVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSlotTypeVersionsRequest extends SpeakeasyBase {
    pathParams: GetSlotTypeVersionsPathParams;
    queryParams: GetSlotTypeVersionsQueryParams;
    headers: GetSlotTypeVersionsHeaders;
}
export declare class GetSlotTypeVersionsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getSlotTypeVersionsResponse?: shared.GetSlotTypeVersionsResponse;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
}
