import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGroupByIdQueryParams extends SpeakeasyBase {
    apiKey: string;
    groupId?: string;
    groupPathAlias?: string;
    lang?: string;
}
export declare class GetGroupById200ApplicationJson extends SpeakeasyBase {
    group?: shared.Group;
    stat?: string;
}
export declare class GetGroupByIdRequest extends SpeakeasyBase {
    queryParams: GetGroupByIdQueryParams;
}
export declare class GetGroupByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getGroupById200ApplicationJsonObject?: GetGroupById200ApplicationJson;
}
