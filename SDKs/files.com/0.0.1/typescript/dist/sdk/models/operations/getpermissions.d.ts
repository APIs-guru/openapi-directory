import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPermissionsQueryParams extends SpeakeasyBase {
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
    userId?: string;
}
export declare class GetPermissionsRequest extends SpeakeasyBase {
    queryParams: GetPermissionsQueryParams;
}
export declare class GetPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    permissionEntities?: shared.PermissionEntity[];
    statusCode: number;
}
