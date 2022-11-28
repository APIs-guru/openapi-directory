import { SpeakeasyBase } from "../../../internal/utils";
export declare class RegistryDeleteApiVersionPathParams extends SpeakeasyBase {
    api: string;
    project: string;
    version: string;
}
export declare class RegistryDeleteApiVersionRequest extends SpeakeasyBase {
    pathParams: RegistryDeleteApiVersionPathParams;
}
export declare class RegistryDeleteApiVersionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
