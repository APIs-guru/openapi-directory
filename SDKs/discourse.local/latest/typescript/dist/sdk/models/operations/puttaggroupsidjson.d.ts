import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutTagGroupsIdJsonPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutTagGroupsIdJsonRequestBody extends SpeakeasyBase {
    name?: string;
}
export declare class PutTagGroupsIdJson200ApplicationJsonTagGroupPermissions extends SpeakeasyBase {
    everyone?: number;
}
export declare class PutTagGroupsIdJson200ApplicationJsonTagGroup extends SpeakeasyBase {
    id?: number;
    name?: string;
    onePerTopic?: boolean;
    parentTagName?: any[];
    permissions?: PutTagGroupsIdJson200ApplicationJsonTagGroupPermissions;
    tagNames?: any[];
}
export declare class PutTagGroupsIdJson200ApplicationJson extends SpeakeasyBase {
    success?: string;
    tagGroup?: PutTagGroupsIdJson200ApplicationJsonTagGroup;
}
export declare class PutTagGroupsIdJsonRequest extends SpeakeasyBase {
    pathParams: PutTagGroupsIdJsonPathParams;
    request?: PutTagGroupsIdJsonRequestBody;
}
export declare class PutTagGroupsIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    putTagGroupsIdJson200ApplicationJsonObject?: PutTagGroupsIdJson200ApplicationJson;
    statusCode: number;
}
