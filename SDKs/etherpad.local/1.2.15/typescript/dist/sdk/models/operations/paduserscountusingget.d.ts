import { SpeakeasyBase } from "../../../internal/utils";
export declare class PadUsersCountUsingGetQueryParams extends SpeakeasyBase {
    padId?: string;
}
export declare class PadUsersCountUsingGet200ApplicationJsonData extends SpeakeasyBase {
    padUsersCount?: number;
}
export declare class PadUsersCountUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: PadUsersCountUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class PadUsersCountUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class PadUsersCountUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class PadUsersCountUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class PadUsersCountUsingGetRequest extends SpeakeasyBase {
    queryParams: PadUsersCountUsingGetQueryParams;
}
export declare class PadUsersCountUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    padUsersCountUsingGet200ApplicationJsonObject?: PadUsersCountUsingGet200ApplicationJson;
    padUsersCountUsingGet400ApplicationJsonObject?: PadUsersCountUsingGet400ApplicationJson;
    padUsersCountUsingGet401ApplicationJsonObject?: PadUsersCountUsingGet401ApplicationJson;
    padUsersCountUsingGet500ApplicationJsonObject?: PadUsersCountUsingGet500ApplicationJson;
}
