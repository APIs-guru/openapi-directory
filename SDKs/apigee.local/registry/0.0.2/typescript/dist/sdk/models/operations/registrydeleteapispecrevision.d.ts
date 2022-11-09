import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class RegistryDeleteApiSpecRevisionPathParams extends SpeakeasyBase {
    api: string;
    project: string;
    spec: string;
    version: string;
}
export declare class RegistryDeleteApiSpecRevisionRequest extends SpeakeasyBase {
    pathParams: RegistryDeleteApiSpecRevisionPathParams;
}
export declare class RegistryDeleteApiSpecRevisionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
