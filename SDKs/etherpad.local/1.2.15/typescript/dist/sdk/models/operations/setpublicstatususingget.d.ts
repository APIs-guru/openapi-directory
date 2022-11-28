import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetPublicStatusUsingGetQueryParams extends SpeakeasyBase {
    padId?: string;
    publicStatus?: string;
}
export declare class SetPublicStatusUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class SetPublicStatusUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class SetPublicStatusUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class SetPublicStatusUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class SetPublicStatusUsingGetRequest extends SpeakeasyBase {
    queryParams: SetPublicStatusUsingGetQueryParams;
}
export declare class SetPublicStatusUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    setPublicStatusUsingGet200ApplicationJsonObject?: SetPublicStatusUsingGet200ApplicationJson;
    setPublicStatusUsingGet400ApplicationJsonObject?: SetPublicStatusUsingGet400ApplicationJson;
    setPublicStatusUsingGet401ApplicationJsonObject?: SetPublicStatusUsingGet401ApplicationJson;
    setPublicStatusUsingGet500ApplicationJsonObject?: SetPublicStatusUsingGet500ApplicationJson;
}
