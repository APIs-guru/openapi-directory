import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListGatewaysQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListGatewaysHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListGatewaysRequest extends SpeakeasyBase {
    queryParams: ListGatewaysQueryParams;
    headers: ListGatewaysHeaders;
}
export declare class ListGatewaysResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listGatewaysResponse?: shared.ListGatewaysResponse;
    statusCode: number;
    throttlingException?: any;
}
