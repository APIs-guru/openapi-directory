import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserGroupsQueryParams extends SpeakeasyBase {
    cursor?: string;
    groupId?: number;
    perPage?: number;
    userId?: number;
}
export declare class GetUserGroupsRequest extends SpeakeasyBase {
    queryParams: GetUserGroupsQueryParams;
}
export declare class GetUserGroupsResponse extends SpeakeasyBase {
    contentType: string;
    groupUserEntities?: shared.GroupUserEntity[];
    statusCode: number;
}
