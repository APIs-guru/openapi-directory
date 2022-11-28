import { SpeakeasyBase } from "../../../internal/utils";
export declare class RegistryListApiSpecRevisionsPathParams extends SpeakeasyBase {
    api: string;
    project: string;
    spec: string;
    version: string;
}
export declare class RegistryListApiSpecRevisionsQueryParams extends SpeakeasyBase {
    pageSize?: string;
    pageToken?: string;
}
export declare class RegistryListApiSpecRevisionsRequest extends SpeakeasyBase {
    pathParams: RegistryListApiSpecRevisionsPathParams;
    queryParams: RegistryListApiSpecRevisionsQueryParams;
}
export declare class RegistryListApiSpecRevisionsResponse extends SpeakeasyBase {
    contentType: string;
    listApiSpecRevisionsResponse?: any;
    statusCode: number;
}
