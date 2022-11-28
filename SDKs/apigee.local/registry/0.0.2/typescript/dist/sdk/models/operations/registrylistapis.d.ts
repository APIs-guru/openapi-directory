import { SpeakeasyBase } from "../../../internal/utils";
export declare class RegistryListApisPathParams extends SpeakeasyBase {
    project: string;
}
export declare class RegistryListApisQueryParams extends SpeakeasyBase {
    filter?: string;
    pageSize?: string;
    pageToken?: string;
}
export declare class RegistryListApisRequest extends SpeakeasyBase {
    pathParams: RegistryListApisPathParams;
    queryParams: RegistryListApisQueryParams;
}
export declare class RegistryListApisResponse extends SpeakeasyBase {
    contentType: string;
    listApisResponse?: any;
    statusCode: number;
}
