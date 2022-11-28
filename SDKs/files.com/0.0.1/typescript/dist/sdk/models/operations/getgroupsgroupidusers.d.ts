import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGroupsGroupIdUsersPathParams extends SpeakeasyBase {
    groupId: number;
}
export declare class GetGroupsGroupIdUsersQueryParams extends SpeakeasyBase {
    cursor?: string;
    perPage?: number;
    userId?: number;
}
export declare class GetGroupsGroupIdUsersRequest extends SpeakeasyBase {
    pathParams: GetGroupsGroupIdUsersPathParams;
    queryParams: GetGroupsGroupIdUsersQueryParams;
}
export declare class GetGroupsGroupIdUsersResponse extends SpeakeasyBase {
    contentType: string;
    groupUserEntities?: shared.GroupUserEntity[];
    statusCode: number;
}
