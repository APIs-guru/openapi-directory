import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTagGroupsJson200ApplicationJsonTagGroupsPermissions extends SpeakeasyBase {
    staff?: number;
}
export declare class GetTagGroupsJson200ApplicationJsonTagGroups extends SpeakeasyBase {
    id?: number;
    name?: string;
    onePerTopic?: boolean;
    parentTagName?: any[];
    permissions?: GetTagGroupsJson200ApplicationJsonTagGroupsPermissions;
    tagNames?: any[];
}
export declare class GetTagGroupsJson200ApplicationJson extends SpeakeasyBase {
    tagGroups?: GetTagGroupsJson200ApplicationJsonTagGroups[];
}
export declare class GetTagGroupsJsonResponse extends SpeakeasyBase {
    contentType: string;
    getTagGroupsJson200ApplicationJsonObject?: GetTagGroupsJson200ApplicationJson;
    statusCode: number;
}
