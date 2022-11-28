import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListResourcesInProtectionGroupQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListResourcesInProtectionGroupXAmzTargetEnum {
    AwsShield20160616ListResourcesInProtectionGroup = "AWSShield_20160616.ListResourcesInProtectionGroup"
}
export declare class ListResourcesInProtectionGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListResourcesInProtectionGroupXAmzTargetEnum;
}
export declare class ListResourcesInProtectionGroupRequest extends SpeakeasyBase {
    queryParams: ListResourcesInProtectionGroupQueryParams;
    headers: ListResourcesInProtectionGroupHeaders;
    request: shared.ListResourcesInProtectionGroupRequest;
}
export declare class ListResourcesInProtectionGroupResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidPaginationTokenException?: any;
    listResourcesInProtectionGroupResponse?: shared.ListResourcesInProtectionGroupResponse;
    resourceNotFoundException?: any;
    statusCode: number;
}
