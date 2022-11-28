import { SpeakeasyBase } from "../../../internal/utils";
export declare class RegistryListApiSpecsPathParams extends SpeakeasyBase {
    api: string;
    project: string;
    version: string;
}
export declare class RegistryListApiSpecsQueryParams extends SpeakeasyBase {
    filter?: string;
    pageSize?: string;
    pageToken?: string;
}
export declare class RegistryListApiSpecsRequest extends SpeakeasyBase {
    pathParams: RegistryListApiSpecsPathParams;
    queryParams: RegistryListApiSpecsQueryParams;
}
export declare class RegistryListApiSpecsResponse extends SpeakeasyBase {
    contentType: string;
    listApiSpecsResponse?: any;
    statusCode: number;
}
