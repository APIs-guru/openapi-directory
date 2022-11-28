import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetGroupsNameMembersJsonPathParams extends SpeakeasyBase {
    name: string;
}
export declare class GetGroupsNameMembersJsonRequest extends SpeakeasyBase {
    pathParams: GetGroupsNameMembersJsonPathParams;
}
export declare class GetGroupsNameMembersJsonResponse extends SpeakeasyBase {
    contentType: string;
    getGroupsNameMembersJson200ApplicationJsonAny?: any;
    statusCode: number;
}
