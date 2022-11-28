import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AutomlProjectsLocationsDatasetsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AutomlProjectsLocationsDatasetsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AutomlProjectsLocationsDatasetsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AutomlProjectsLocationsDatasetsCreateRequest extends SpeakeasyBase {
    pathParams: AutomlProjectsLocationsDatasetsCreatePathParams;
    queryParams: AutomlProjectsLocationsDatasetsCreateQueryParams;
    request?: shared.Dataset;
    security: AutomlProjectsLocationsDatasetsCreateSecurity;
}
export declare class AutomlProjectsLocationsDatasetsCreateResponse extends SpeakeasyBase {
    contentType: string;
    dataset?: shared.Dataset;
    statusCode: number;
}
