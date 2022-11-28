import { SpeakeasyBase } from "../../../internal/utils";
export declare class RegistryCreateApiSpecPathParams extends SpeakeasyBase {
    api: string;
    project: string;
    version: string;
}
export declare class RegistryCreateApiSpecQueryParams extends SpeakeasyBase {
    apiSpecId?: string;
}
export declare class RegistryCreateApiSpecRequest extends SpeakeasyBase {
    pathParams: RegistryCreateApiSpecPathParams;
    queryParams: RegistryCreateApiSpecQueryParams;
    request: any;
}
export declare class RegistryCreateApiSpecResponse extends SpeakeasyBase {
    apiSpec?: any;
    contentType: string;
    statusCode: number;
}
