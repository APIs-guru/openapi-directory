import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRestMethodEqualFlickrGroupsPoolsGetContextQueryParams extends SpeakeasyBase {
    apiKey: string;
    groupId?: string;
    photoId: string;
}
export declare class GetRestMethodEqualFlickrGroupsPoolsGetContext200ApplicationJsonCount extends SpeakeasyBase {
    content?: string;
}
export declare class GetRestMethodEqualFlickrGroupsPoolsGetContext200ApplicationJson extends SpeakeasyBase {
    count?: GetRestMethodEqualFlickrGroupsPoolsGetContext200ApplicationJsonCount;
    nextphoto?: shared.ContextPhoto;
    prevphoto?: shared.ContextPhoto;
    stat?: string;
}
export declare class GetRestMethodEqualFlickrGroupsPoolsGetContextRequest extends SpeakeasyBase {
    queryParams: GetRestMethodEqualFlickrGroupsPoolsGetContextQueryParams;
}
export declare class GetRestMethodEqualFlickrGroupsPoolsGetContextResponse extends SpeakeasyBase {
    contentType: string;
    getRestMethodEqualFlickrGroupsPoolsGetContext200ApplicationJsonObject?: GetRestMethodEqualFlickrGroupsPoolsGetContext200ApplicationJson;
    statusCode: number;
}
