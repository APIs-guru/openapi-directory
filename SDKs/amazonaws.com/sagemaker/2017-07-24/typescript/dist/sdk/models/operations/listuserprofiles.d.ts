import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListUserProfilesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListUserProfilesXAmzTargetEnum {
    SageMakerListUserProfiles = "SageMaker.ListUserProfiles"
}
export declare class ListUserProfilesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListUserProfilesXAmzTargetEnum;
}
export declare class ListUserProfilesRequest extends SpeakeasyBase {
    queryParams: ListUserProfilesQueryParams;
    headers: ListUserProfilesHeaders;
    request: shared.ListUserProfilesRequest;
}
export declare class ListUserProfilesResponse extends SpeakeasyBase {
    contentType: string;
    listUserProfilesResponse?: shared.ListUserProfilesResponse;
    statusCode: number;
}
