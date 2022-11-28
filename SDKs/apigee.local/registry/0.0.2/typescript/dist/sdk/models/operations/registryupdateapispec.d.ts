import { SpeakeasyBase } from "../../../internal/utils";
export declare class RegistryUpdateApiSpecPathParams extends SpeakeasyBase {
    api: string;
    project: string;
    spec: string;
    version: string;
}
export declare class RegistryUpdateApiSpecQueryParams extends SpeakeasyBase {
    allowMissing?: string;
    updateMask?: string;
}
export declare class RegistryUpdateApiSpecRequest extends SpeakeasyBase {
    pathParams: RegistryUpdateApiSpecPathParams;
    queryParams: RegistryUpdateApiSpecQueryParams;
    request: any;
}
export declare class RegistryUpdateApiSpecResponse extends SpeakeasyBase {
    apiSpec?: any;
    contentType: string;
    statusCode: number;
}
