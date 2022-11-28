import { SpeakeasyBase } from "../../../internal/utils";
export declare class TagsDeletePathParams extends SpeakeasyBase {
    tagId: number;
}
export declare class TagsDeleteRequest extends SpeakeasyBase {
    pathParams: TagsDeletePathParams;
}
export declare class TagsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    systemObject?: Map<string, any>;
}
