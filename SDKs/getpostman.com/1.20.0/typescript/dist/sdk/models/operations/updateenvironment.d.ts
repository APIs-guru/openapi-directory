import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateEnvironmentPathParams extends SpeakeasyBase {
    environmentUid: string;
}
export declare class UpdateEnvironmentRequestBodyEnvironmentValues extends SpeakeasyBase {
    key?: string;
    value?: string;
}
export declare class UpdateEnvironmentRequestBodyEnvironment extends SpeakeasyBase {
    name?: string;
    values?: UpdateEnvironmentRequestBodyEnvironmentValues[];
}
export declare class UpdateEnvironmentRequestBody extends SpeakeasyBase {
    environment?: UpdateEnvironmentRequestBodyEnvironment;
}
export declare class UpdateEnvironment200ApplicationJsonEnvironment extends SpeakeasyBase {
    id?: string;
    name?: string;
    uid?: string;
}
export declare class UpdateEnvironment200ApplicationJson extends SpeakeasyBase {
    environment?: UpdateEnvironment200ApplicationJsonEnvironment;
}
export declare class UpdateEnvironment400ApplicationJsonError extends SpeakeasyBase {
    message?: string;
    name?: string;
}
export declare class UpdateEnvironment400ApplicationJson extends SpeakeasyBase {
    error?: UpdateEnvironment400ApplicationJsonError;
}
export declare class UpdateEnvironmentRequest extends SpeakeasyBase {
    pathParams: UpdateEnvironmentPathParams;
    request?: UpdateEnvironmentRequestBody;
}
export declare class UpdateEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateEnvironment200ApplicationJsonObject?: UpdateEnvironment200ApplicationJson;
    updateEnvironment400ApplicationJsonObject?: UpdateEnvironment400ApplicationJson;
}
