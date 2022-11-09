import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListDevicePositionsPathParams extends SpeakeasyBase {
    trackerName: string;
}
export declare class ListDevicePositionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListDevicePositionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDevicePositionsRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListDevicePositionsRequest extends SpeakeasyBase {
    pathParams: ListDevicePositionsPathParams;
    queryParams: ListDevicePositionsQueryParams;
    headers: ListDevicePositionsHeaders;
    request: ListDevicePositionsRequestBody;
}
export declare class ListDevicePositionsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listDevicePositionsResponse?: shared.ListDevicePositionsResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
