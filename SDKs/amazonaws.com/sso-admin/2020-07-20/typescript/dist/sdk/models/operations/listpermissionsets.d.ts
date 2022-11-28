import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPermissionSetsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListPermissionSetsXAmzTargetEnum {
    SwbExternalServiceListPermissionSets = "SWBExternalService.ListPermissionSets"
}
export declare class ListPermissionSetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListPermissionSetsXAmzTargetEnum;
}
export declare class ListPermissionSetsRequest extends SpeakeasyBase {
    queryParams: ListPermissionSetsQueryParams;
    headers: ListPermissionSetsHeaders;
    request: shared.ListPermissionSetsRequest;
}
export declare class ListPermissionSetsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listPermissionSetsResponse?: shared.ListPermissionSetsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
