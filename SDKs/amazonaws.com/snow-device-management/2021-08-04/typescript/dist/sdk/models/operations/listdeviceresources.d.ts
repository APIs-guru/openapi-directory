import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListDeviceResourcesPathParams extends SpeakeasyBase {
    managedDeviceId: string;
}
export declare class ListDeviceResourcesQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    type?: string;
}
export declare class ListDeviceResourcesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDeviceResourcesRequest extends SpeakeasyBase {
    pathParams: ListDeviceResourcesPathParams;
    queryParams: ListDeviceResourcesQueryParams;
    headers: ListDeviceResourcesHeaders;
}
export declare class ListDeviceResourcesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listDeviceResourcesOutput?: shared.ListDeviceResourcesOutput;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
