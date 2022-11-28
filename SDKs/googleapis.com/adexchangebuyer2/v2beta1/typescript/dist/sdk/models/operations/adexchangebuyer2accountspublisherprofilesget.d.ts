import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2AccountsPublisherProfilesGetPathParams extends SpeakeasyBase {
    accountId: string;
    publisherProfileId: string;
}
export declare class Adexchangebuyer2AccountsPublisherProfilesGetQueryParams extends SpeakeasyBase {
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
export declare class Adexchangebuyer2AccountsPublisherProfilesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2AccountsPublisherProfilesGetRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2AccountsPublisherProfilesGetPathParams;
    queryParams: Adexchangebuyer2AccountsPublisherProfilesGetQueryParams;
    security: Adexchangebuyer2AccountsPublisherProfilesGetSecurity;
}
export declare class Adexchangebuyer2AccountsPublisherProfilesGetResponse extends SpeakeasyBase {
    contentType: string;
    publisherProfile?: shared.PublisherProfile;
    statusCode: number;
}
