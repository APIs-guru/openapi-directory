import { SpeakeasyBase } from "../../../internal/utils";
export declare class PadUsersUsingGetQueryParams extends SpeakeasyBase {
    padId?: string;
}
export declare class PadUsersUsingGet200ApplicationJsonDataPadUsers extends SpeakeasyBase {
    colorId?: string;
    id?: string;
    name?: string;
    timestamp?: number;
}
export declare class PadUsersUsingGet200ApplicationJsonData extends SpeakeasyBase {
    padUsers?: PadUsersUsingGet200ApplicationJsonDataPadUsers[];
}
export declare class PadUsersUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: PadUsersUsingGet200ApplicationJsonData;
    message?: string;
}
export declare class PadUsersUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class PadUsersUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class PadUsersUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class PadUsersUsingGetRequest extends SpeakeasyBase {
    queryParams: PadUsersUsingGetQueryParams;
}
export declare class PadUsersUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    padUsersUsingGet200ApplicationJsonObject?: PadUsersUsingGet200ApplicationJson;
    padUsersUsingGet400ApplicationJsonObject?: PadUsersUsingGet400ApplicationJson;
    padUsersUsingGet401ApplicationJsonObject?: PadUsersUsingGet401ApplicationJson;
    padUsersUsingGet500ApplicationJsonObject?: PadUsersUsingGet500ApplicationJson;
}
