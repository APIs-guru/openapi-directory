import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDomainsTldZoneIdDownloadPathParams extends SpeakeasyBase {
    zoneId: string;
}
export declare class GetDomainsTldZoneIdDownloadQueryParams extends SpeakeasyBase {
    apiKey?: string;
    date?: string;
}
export declare class GetDomainsTldZoneIdDownloadRequest extends SpeakeasyBase {
    pathParams: GetDomainsTldZoneIdDownloadPathParams;
    queryParams: GetDomainsTldZoneIdDownloadQueryParams;
}
export declare class GetDomainsTldZoneIdDownloadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
