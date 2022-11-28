import { SpeakeasyBase } from "../../../internal/utils";
export declare class SingleEnvironmentPathParams extends SpeakeasyBase {
    environmentUid: string;
}
export declare class SingleEnvironment200ApplicationJsonEnvironmentValues extends SpeakeasyBase {
    enabled?: boolean;
    hovered?: boolean;
    key?: string;
    type?: string;
    value?: string;
}
export declare class SingleEnvironment200ApplicationJsonEnvironment extends SpeakeasyBase {
    id?: string;
    name?: string;
    values?: SingleEnvironment200ApplicationJsonEnvironmentValues[];
}
export declare class SingleEnvironment200ApplicationJson extends SpeakeasyBase {
    environment?: SingleEnvironment200ApplicationJsonEnvironment;
}
export declare class SingleEnvironmentRequest extends SpeakeasyBase {
    pathParams: SingleEnvironmentPathParams;
}
export declare class SingleEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    singleEnvironment200ApplicationJsonObject?: SingleEnvironment200ApplicationJson;
}
