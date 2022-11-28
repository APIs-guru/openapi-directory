import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListProtectionGroupsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListProtectionGroupsXAmzTargetEnum {
    AwsShield20160616ListProtectionGroups = "AWSShield_20160616.ListProtectionGroups"
}
export declare class ListProtectionGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListProtectionGroupsXAmzTargetEnum;
}
export declare class ListProtectionGroupsRequest extends SpeakeasyBase {
    queryParams: ListProtectionGroupsQueryParams;
    headers: ListProtectionGroupsHeaders;
    request: shared.ListProtectionGroupsRequest;
}
export declare class ListProtectionGroupsResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidPaginationTokenException?: any;
    listProtectionGroupsResponse?: shared.ListProtectionGroupsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
}
