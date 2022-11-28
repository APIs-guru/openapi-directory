import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersUserIdPermissionsPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GetUsersUserIdPermissionsQueryParams extends SpeakeasyBase {
    cursor?: string;
    filter?: Map<string, any>;
    filterGt?: Map<string, any>;
    filterGteq?: Map<string, any>;
    filterLike?: Map<string, any>;
    filterLt?: Map<string, any>;
    filterLteq?: Map<string, any>;
    groupId?: string;
    includeGroups?: boolean;
    path?: string;
    perPage?: number;
    sortBy?: Map<string, any>;
}
export declare class GetUsersUserIdPermissionsRequest extends SpeakeasyBase {
    pathParams: GetUsersUserIdPermissionsPathParams;
    queryParams: GetUsersUserIdPermissionsQueryParams;
}
export declare class GetUsersUserIdPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    permissionEntities?: shared.PermissionEntity[];
    statusCode: number;
}
