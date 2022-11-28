import { SpeakeasyBase } from "../../../internal/utils";
export declare class PadUsersCountUsingPostQueryParams extends SpeakeasyBase {
    padId?: string;
}
export declare class PadUsersCountUsingPost200ApplicationJsonData extends SpeakeasyBase {
    padUsersCount?: number;
}
export declare class PadUsersCountUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: PadUsersCountUsingPost200ApplicationJsonData;
    message?: string;
}
export declare class PadUsersCountUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class PadUsersCountUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class PadUsersCountUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class PadUsersCountUsingPostRequest extends SpeakeasyBase {
    queryParams: PadUsersCountUsingPostQueryParams;
}
export declare class PadUsersCountUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    padUsersCountUsingPost200ApplicationJsonObject?: PadUsersCountUsingPost200ApplicationJson;
    padUsersCountUsingPost400ApplicationJsonObject?: PadUsersCountUsingPost400ApplicationJson;
    padUsersCountUsingPost401ApplicationJsonObject?: PadUsersCountUsingPost401ApplicationJson;
    padUsersCountUsingPost500ApplicationJsonObject?: PadUsersCountUsingPost500ApplicationJson;
}
