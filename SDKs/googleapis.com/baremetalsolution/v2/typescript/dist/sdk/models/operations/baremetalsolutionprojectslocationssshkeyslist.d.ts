import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BaremetalsolutionProjectsLocationsSshKeysListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BaremetalsolutionProjectsLocationsSshKeysListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BaremetalsolutionProjectsLocationsSshKeysListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BaremetalsolutionProjectsLocationsSshKeysListRequest extends SpeakeasyBase {
    pathParams: BaremetalsolutionProjectsLocationsSshKeysListPathParams;
    queryParams: BaremetalsolutionProjectsLocationsSshKeysListQueryParams;
    security: BaremetalsolutionProjectsLocationsSshKeysListSecurity;
}
export declare class BaremetalsolutionProjectsLocationsSshKeysListResponse extends SpeakeasyBase {
    contentType: string;
    listSshKeysResponse?: shared.ListSshKeysResponse;
    statusCode: number;
}
