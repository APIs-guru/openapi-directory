import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class RegistryGetApiVersionPathParams extends SpeakeasyBase {
    api: string;
    project: string;
    version: string;
}
export declare class RegistryGetApiVersionRequest extends SpeakeasyBase {
    pathParams: RegistryGetApiVersionPathParams;
}
export declare class RegistryGetApiVersionResponse extends SpeakeasyBase {
    apiVersion?: any;
    contentType: string;
    statusCode: number;
}
