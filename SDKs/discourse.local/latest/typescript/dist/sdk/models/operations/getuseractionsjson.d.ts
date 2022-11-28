import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetUserActionsJsonQueryParams extends SpeakeasyBase {
    filter: string;
    offset: number;
    username: string;
}
export declare class GetUserActionsJsonRequest extends SpeakeasyBase {
    queryParams: GetUserActionsJsonQueryParams;
}
export declare class GetUserActionsJsonResponse extends SpeakeasyBase {
    contentType: string;
    getUserActionsJson200ApplicationJsonAny?: any;
    statusCode: number;
}
