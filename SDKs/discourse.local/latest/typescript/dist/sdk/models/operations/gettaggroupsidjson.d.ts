import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTagGroupsIdJsonPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetTagGroupsIdJson200ApplicationJsonTagGroupPermissions extends SpeakeasyBase {
    everyone?: number;
}
export declare class GetTagGroupsIdJson200ApplicationJsonTagGroup extends SpeakeasyBase {
    id?: number;
    name?: string;
    onePerTopic?: boolean;
    parentTagName?: any[];
    permissions?: GetTagGroupsIdJson200ApplicationJsonTagGroupPermissions;
    tagNames?: any[];
}
export declare class GetTagGroupsIdJson200ApplicationJson extends SpeakeasyBase {
    tagGroup?: GetTagGroupsIdJson200ApplicationJsonTagGroup;
}
export declare class GetTagGroupsIdJsonRequest extends SpeakeasyBase {
    pathParams: GetTagGroupsIdJsonPathParams;
}
export declare class GetTagGroupsIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    getTagGroupsIdJson200ApplicationJsonObject?: GetTagGroupsIdJson200ApplicationJson;
    statusCode: number;
}
