import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteEnvironmentPathParams extends SpeakeasyBase {
    environmentUid: string;
}
export declare class DeleteEnvironment200ApplicationJsonEnvironment extends SpeakeasyBase {
    id?: string;
    uid?: string;
}
export declare class DeleteEnvironment200ApplicationJson extends SpeakeasyBase {
    environment?: DeleteEnvironment200ApplicationJsonEnvironment;
}
export declare class DeleteEnvironment404ApplicationJsonError extends SpeakeasyBase {
    message?: string;
    name?: string;
}
export declare class DeleteEnvironment404ApplicationJson extends SpeakeasyBase {
    error?: DeleteEnvironment404ApplicationJsonError;
}
export declare class DeleteEnvironmentRequest extends SpeakeasyBase {
    pathParams: DeleteEnvironmentPathParams;
}
export declare class DeleteEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteEnvironment200ApplicationJsonObject?: DeleteEnvironment200ApplicationJson;
    deleteEnvironment404ApplicationJsonObject?: DeleteEnvironment404ApplicationJson;
}
