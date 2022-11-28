import { SpeakeasyBase } from "../../../internal/utils";
export declare class RegistryTagApiSpecRevisionPathParams extends SpeakeasyBase {
    api: string;
    project: string;
    spec: string;
    version: string;
}
export declare class RegistryTagApiSpecRevisionRequest extends SpeakeasyBase {
    pathParams: RegistryTagApiSpecRevisionPathParams;
    request: any;
}
export declare class RegistryTagApiSpecRevisionResponse extends SpeakeasyBase {
    apiSpec?: any;
    contentType: string;
    statusCode: number;
}
