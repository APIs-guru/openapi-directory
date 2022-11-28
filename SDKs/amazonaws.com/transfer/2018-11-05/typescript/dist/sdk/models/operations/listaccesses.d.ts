import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAccessesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListAccessesXAmzTargetEnum {
    TransferServiceListAccesses = "TransferService.ListAccesses"
}
export declare class ListAccessesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAccessesXAmzTargetEnum;
}
export declare class ListAccessesRequest extends SpeakeasyBase {
    queryParams: ListAccessesQueryParams;
    headers: ListAccessesHeaders;
    request: shared.ListAccessesRequest;
}
export declare class ListAccessesResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceError?: any;
    invalidNextTokenException?: any;
    invalidRequestException?: any;
    listAccessesResponse?: shared.ListAccessesResponse;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
