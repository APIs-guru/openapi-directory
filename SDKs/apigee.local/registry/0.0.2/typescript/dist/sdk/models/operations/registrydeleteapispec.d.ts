import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class RegistryDeleteApiSpecPathParams extends SpeakeasyBase {
    api: string;
    project: string;
    spec: string;
    version: string;
}
export declare class RegistryDeleteApiSpecRequest extends SpeakeasyBase {
    pathParams: RegistryDeleteApiSpecPathParams;
}
export declare class RegistryDeleteApiSpecResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
