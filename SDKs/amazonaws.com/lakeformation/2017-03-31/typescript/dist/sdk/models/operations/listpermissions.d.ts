import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPermissionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListPermissionsXAmzTargetEnum {
    AwsLakeFormationListPermissions = "AWSLakeFormation.ListPermissions"
}
export declare class ListPermissionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListPermissionsXAmzTargetEnum;
}
export declare class ListPermissionsRequest extends SpeakeasyBase {
    queryParams: ListPermissionsQueryParams;
    headers: ListPermissionsHeaders;
    request: shared.ListPermissionsRequest;
}
export declare class ListPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceException?: any;
    invalidInputException?: any;
    listPermissionsResponse?: shared.ListPermissionsResponse;
    operationTimeoutException?: any;
    statusCode: number;
}
