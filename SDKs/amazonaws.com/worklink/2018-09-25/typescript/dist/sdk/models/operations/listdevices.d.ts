import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDevicesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListDevicesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDevicesRequestBody extends SpeakeasyBase {
    fleetArn: string;
    maxResults?: number;
    nextToken?: string;
}
export declare class ListDevicesRequest extends SpeakeasyBase {
    queryParams: ListDevicesQueryParams;
    headers: ListDevicesHeaders;
    request: ListDevicesRequestBody;
}
export declare class ListDevicesResponse extends SpeakeasyBase {
    contentType: string;
    internalServerErrorException?: any;
    invalidRequestException?: any;
    listDevicesResponse?: shared.ListDevicesResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
