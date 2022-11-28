import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherUsersDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class AndroidpublisherUsersDeleteQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherUsersDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherUsersDeleteRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherUsersDeletePathParams;
    queryParams: AndroidpublisherUsersDeleteQueryParams;
    security: AndroidpublisherUsersDeleteSecurity;
}
export declare class AndroidpublisherUsersDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
