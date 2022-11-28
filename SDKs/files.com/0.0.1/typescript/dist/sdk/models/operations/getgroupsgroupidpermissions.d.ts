import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGroupsGroupIdPermissionsPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class GetGroupsGroupIdPermissionsQueryParams extends SpeakeasyBase {
    cursor?: string;
    filter?: Map<string, any>;
    filterGt?: Map<string, any>;
    filterGteq?: Map<string, any>;
    filterLike?: Map<string, any>;
    filterLt?: Map<string, any>;
    filterLteq?: Map<string, any>;
    includeGroups?: boolean;
    path?: string;
    perPage?: number;
    sortBy?: Map<string, any>;
    userId?: string;
}
export declare class GetGroupsGroupIdPermissionsRequest extends SpeakeasyBase {
    pathParams: GetGroupsGroupIdPermissionsPathParams;
    queryParams: GetGroupsGroupIdPermissionsQueryParams;
}
export declare class GetGroupsGroupIdPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    permissionEntities?: shared.PermissionEntity[];
    statusCode: number;
}
