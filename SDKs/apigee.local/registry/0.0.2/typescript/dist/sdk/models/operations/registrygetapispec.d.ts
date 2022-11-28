import { SpeakeasyBase } from "../../../internal/utils";
export declare class RegistryGetApiSpecPathParams extends SpeakeasyBase {
    api: string;
    project: string;
    spec: string;
    version: string;
}
export declare class RegistryGetApiSpecRequest extends SpeakeasyBase {
    pathParams: RegistryGetApiSpecPathParams;
}
export declare class RegistryGetApiSpecResponse extends SpeakeasyBase {
    apiSpec?: any;
    contentType: string;
    statusCode: number;
}
