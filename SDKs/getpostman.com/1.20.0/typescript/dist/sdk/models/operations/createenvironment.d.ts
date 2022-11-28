import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateEnvironmentRequestBodyEnvironmentValues extends SpeakeasyBase {
    key?: string;
    value?: string;
}
export declare class CreateEnvironmentRequestBodyEnvironment extends SpeakeasyBase {
    name?: string;
    values?: CreateEnvironmentRequestBodyEnvironmentValues[];
}
export declare class CreateEnvironmentRequestBody extends SpeakeasyBase {
    environment?: CreateEnvironmentRequestBodyEnvironment;
}
export declare class CreateEnvironment200ApplicationJsonEnvironment extends SpeakeasyBase {
    id?: string;
    name?: string;
    uid?: string;
}
export declare class CreateEnvironment200ApplicationJson extends SpeakeasyBase {
    environment?: CreateEnvironment200ApplicationJsonEnvironment;
}
export declare class CreateEnvironment400ApplicationJsonError extends SpeakeasyBase {
    message?: string;
    name?: string;
}
export declare class CreateEnvironment400ApplicationJson extends SpeakeasyBase {
    error?: CreateEnvironment400ApplicationJsonError;
}
export declare class CreateEnvironmentRequest extends SpeakeasyBase {
    request?: CreateEnvironmentRequestBody;
}
export declare class CreateEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createEnvironment200ApplicationJsonObject?: CreateEnvironment200ApplicationJson;
    createEnvironment400ApplicationJsonObject?: CreateEnvironment400ApplicationJson;
}
