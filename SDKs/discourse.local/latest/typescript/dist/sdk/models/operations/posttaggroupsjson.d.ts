import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostTagGroupsJsonRequestBody extends SpeakeasyBase {
    name: string;
}
export declare class PostTagGroupsJson200ApplicationJsonTagGroup extends SpeakeasyBase {
    id: number;
    name: string;
    onePerTopic: boolean;
    parentTagName: any[];
    permissions: Map<string, any>;
    tagNames: any[];
}
export declare class PostTagGroupsJson200ApplicationJson extends SpeakeasyBase {
    tagGroup: PostTagGroupsJson200ApplicationJsonTagGroup;
}
export declare class PostTagGroupsJsonRequest extends SpeakeasyBase {
    request?: PostTagGroupsJsonRequestBody;
}
export declare class PostTagGroupsJsonResponse extends SpeakeasyBase {
    contentType: string;
    postTagGroupsJson200ApplicationJsonObject?: PostTagGroupsJson200ApplicationJson;
    statusCode: number;
}
