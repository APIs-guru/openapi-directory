import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrgsListAppInstallationsPathParams extends SpeakeasyBase {
    org: string;
}
export declare class OrgsListAppInstallationsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class OrgsListAppInstallations200ApplicationJson extends SpeakeasyBase {
    installations: shared.Installation[];
    totalCount: number;
}
export declare class OrgsListAppInstallationsRequest extends SpeakeasyBase {
    pathParams: OrgsListAppInstallationsPathParams;
    queryParams: OrgsListAppInstallationsQueryParams;
}
export declare class OrgsListAppInstallationsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    orgsListAppInstallations200ApplicationJsonObject?: OrgsListAppInstallations200ApplicationJson;
}
