import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListPermissionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListPermissionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListPermissionsRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    resourceType?: string;
}
export declare class ListPermissionsRequest extends SpeakeasyBase {
    queryParams: ListPermissionsQueryParams;
    headers: ListPermissionsHeaders;
    request: ListPermissionsRequestBody;
}
export declare class ListPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    invalidNextTokenException?: any;
    invalidParameterException?: any;
    listPermissionsResponse?: shared.ListPermissionsResponse;
    operationNotPermittedException?: any;
    serverInternalException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
