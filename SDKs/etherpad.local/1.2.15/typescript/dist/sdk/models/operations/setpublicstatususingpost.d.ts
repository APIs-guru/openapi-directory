import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetPublicStatusUsingPostQueryParams extends SpeakeasyBase {
    padId?: string;
    publicStatus?: string;
}
export declare class SetPublicStatusUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class SetPublicStatusUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class SetPublicStatusUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class SetPublicStatusUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Map<string, any>;
    message?: string;
}
export declare class SetPublicStatusUsingPostRequest extends SpeakeasyBase {
    queryParams: SetPublicStatusUsingPostQueryParams;
}
export declare class SetPublicStatusUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    setPublicStatusUsingPost200ApplicationJsonObject?: SetPublicStatusUsingPost200ApplicationJson;
    setPublicStatusUsingPost400ApplicationJsonObject?: SetPublicStatusUsingPost400ApplicationJson;
    setPublicStatusUsingPost401ApplicationJsonObject?: SetPublicStatusUsingPost401ApplicationJson;
    setPublicStatusUsingPost500ApplicationJsonObject?: SetPublicStatusUsingPost500ApplicationJson;
}
