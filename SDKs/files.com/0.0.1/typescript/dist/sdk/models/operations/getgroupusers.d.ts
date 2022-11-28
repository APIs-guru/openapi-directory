import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGroupUsersQueryParams extends SpeakeasyBase {
    cursor?: string;
    groupId?: number;
    perPage?: number;
    userId?: number;
}
export declare class GetGroupUsersRequest extends SpeakeasyBase {
    queryParams: GetGroupUsersQueryParams;
}
export declare class GetGroupUsersResponse extends SpeakeasyBase {
    contentType: string;
    groupUserEntities?: shared.GroupUserEntity[];
    statusCode: number;
}
