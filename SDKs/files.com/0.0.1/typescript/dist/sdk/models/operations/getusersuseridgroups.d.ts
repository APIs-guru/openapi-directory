import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersUserIdGroupsPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class GetUsersUserIdGroupsQueryParams extends SpeakeasyBase {
    cursor?: string;
    groupId?: number;
    perPage?: number;
}
export declare class GetUsersUserIdGroupsRequest extends SpeakeasyBase {
    pathParams: GetUsersUserIdGroupsPathParams;
    queryParams: GetUsersUserIdGroupsQueryParams;
}
export declare class GetUsersUserIdGroupsResponse extends SpeakeasyBase {
    contentType: string;
    groupUserEntities?: shared.GroupUserEntity[];
    statusCode: number;
}
