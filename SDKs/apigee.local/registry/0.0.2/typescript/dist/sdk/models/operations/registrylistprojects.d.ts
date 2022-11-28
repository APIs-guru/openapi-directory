import { SpeakeasyBase } from "../../../internal/utils";
export declare class RegistryListProjectsQueryParams extends SpeakeasyBase {
    filter?: string;
    pageSize?: string;
    pageToken?: string;
}
export declare class RegistryListProjectsRequest extends SpeakeasyBase {
    queryParams: RegistryListProjectsQueryParams;
}
export declare class RegistryListProjectsResponse extends SpeakeasyBase {
    contentType: string;
    listProjectsResponse?: any;
    statusCode: number;
}
