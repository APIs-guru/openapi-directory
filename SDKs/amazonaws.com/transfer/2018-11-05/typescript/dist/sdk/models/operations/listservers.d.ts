import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListServersQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListServersXAmzTargetEnum {
    TransferServiceListServers = "TransferService.ListServers"
}
export declare class ListServersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListServersXAmzTargetEnum;
}
export declare class ListServersRequest extends SpeakeasyBase {
    queryParams: ListServersQueryParams;
    headers: ListServersHeaders;
    request: shared.ListServersRequest;
}
export declare class ListServersResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceError?: any;
    invalidNextTokenException?: any;
    invalidRequestException?: any;
    listServersResponse?: shared.ListServersResponse;
    serviceUnavailableException?: any;
    statusCode: number;
}
