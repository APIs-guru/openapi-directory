import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetQueryParams extends SpeakeasyBase {
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
export declare class AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetRequest extends SpeakeasyBase {
    pathParams: AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetPathParams;
    queryParams: AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetQueryParams;
    security: AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetSecurity;
}
export declare class AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetResponse extends SpeakeasyBase {
    contentType: string;
    publisherProfile?: shared.PublisherProfile;
    statusCode: number;
}
