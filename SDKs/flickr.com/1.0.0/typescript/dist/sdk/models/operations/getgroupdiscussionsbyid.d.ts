import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGroupDiscussionsByIdQueryParams extends SpeakeasyBase {
    apiKey: string;
    groupId?: string;
    page?: number;
    perPage?: number;
}
export declare class GetGroupDiscussionsById200ApplicationJson extends SpeakeasyBase {
    iconfarm?: number;
    iconserver?: number;
    ispoolmoderated?: boolean;
    lang?: string;
    members?: number;
    name?: string;
    page?: number;
    pages?: number;
    perPage?: number;
    privacy?: number;
    topics?: shared.Topic[];
    total?: number;
}
export declare class GetGroupDiscussionsByIdRequest extends SpeakeasyBase {
    queryParams: GetGroupDiscussionsByIdQueryParams;
}
export declare class GetGroupDiscussionsByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getGroupDiscussionsById200ApplicationJsonObject?: GetGroupDiscussionsById200ApplicationJson;
}
