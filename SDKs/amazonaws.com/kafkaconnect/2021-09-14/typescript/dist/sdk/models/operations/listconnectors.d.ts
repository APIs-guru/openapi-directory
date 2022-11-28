import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListConnectorsQueryParams extends SpeakeasyBase {
    connectorNamePrefix?: string;
    maxResults?: number;
    nextToken?: string;
}
export declare class ListConnectorsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListConnectorsRequest extends SpeakeasyBase {
    queryParams: ListConnectorsQueryParams;
    headers: ListConnectorsHeaders;
}
export declare class ListConnectorsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    listConnectorsResponse?: shared.ListConnectorsResponse;
    notFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
