import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSlotTypesQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nameContains?: string;
    nextToken?: string;
}
export declare class GetSlotTypesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSlotTypesRequest extends SpeakeasyBase {
    queryParams: GetSlotTypesQueryParams;
    headers: GetSlotTypesHeaders;
}
export declare class GetSlotTypesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getSlotTypesResponse?: shared.GetSlotTypesResponse;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
}
