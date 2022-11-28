import { SpeakeasyBase } from "../../../internal/utils";
export declare class RegistryListApiVersionsPathParams extends SpeakeasyBase {
    api: string;
    project: string;
}
export declare class RegistryListApiVersionsQueryParams extends SpeakeasyBase {
    filter?: string;
    pageSize?: string;
    pageToken?: string;
}
export declare class RegistryListApiVersionsRequest extends SpeakeasyBase {
    pathParams: RegistryListApiVersionsPathParams;
    queryParams: RegistryListApiVersionsQueryParams;
}
export declare class RegistryListApiVersionsResponse extends SpeakeasyBase {
    contentType: string;
    listApiVersionsResponse?: any;
    statusCode: number;
}
