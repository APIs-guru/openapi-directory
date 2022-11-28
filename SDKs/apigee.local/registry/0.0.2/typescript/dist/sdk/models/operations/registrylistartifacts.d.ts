import { SpeakeasyBase } from "../../../internal/utils";
export declare class RegistryListArtifactsPathParams extends SpeakeasyBase {
    project: string;
}
export declare class RegistryListArtifactsQueryParams extends SpeakeasyBase {
    filter?: string;
    pageSize?: string;
    pageToken?: string;
}
export declare class RegistryListArtifactsRequest extends SpeakeasyBase {
    pathParams: RegistryListArtifactsPathParams;
    queryParams: RegistryListArtifactsQueryParams;
}
export declare class RegistryListArtifactsResponse extends SpeakeasyBase {
    contentType: string;
    listArtifactsResponse?: any;
    statusCode: number;
}
