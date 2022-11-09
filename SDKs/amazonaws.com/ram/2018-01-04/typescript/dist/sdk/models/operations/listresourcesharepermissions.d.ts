import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListResourceSharePermissionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListResourceSharePermissionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListResourceSharePermissionsRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    resourceShareArn: string;
}
export declare class ListResourceSharePermissionsRequest extends SpeakeasyBase {
    queryParams: ListResourceSharePermissionsQueryParams;
    headers: ListResourceSharePermissionsHeaders;
    request: ListResourceSharePermissionsRequestBody;
}
export declare class ListResourceSharePermissionsResponse extends SpeakeasyBase {
    contentType: string;
    invalidNextTokenException?: any;
    invalidParameterException?: any;
    listResourceSharePermissionsResponse?: shared.ListResourceSharePermissionsResponse;
    malformedArnException?: any;
    operationNotPermittedException?: any;
    serverInternalException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    unknownResourceException?: any;
}
