import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListProtectionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListProtectionsXAmzTargetEnum {
    AwsShield20160616ListProtections = "AWSShield_20160616.ListProtections"
}
export declare class ListProtectionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListProtectionsXAmzTargetEnum;
}
export declare class ListProtectionsRequest extends SpeakeasyBase {
    queryParams: ListProtectionsQueryParams;
    headers: ListProtectionsHeaders;
    request: shared.ListProtectionsRequest;
}
export declare class ListProtectionsResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidPaginationTokenException?: any;
    listProtectionsResponse?: shared.ListProtectionsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
}
