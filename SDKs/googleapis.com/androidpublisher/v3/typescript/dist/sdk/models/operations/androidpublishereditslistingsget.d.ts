import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherEditsListingsGetPathParams extends SpeakeasyBase {
    editId: string;
    language: string;
    packageName: string;
}
export declare class AndroidpublisherEditsListingsGetQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherEditsListingsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsListingsGetRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsListingsGetPathParams;
    queryParams: AndroidpublisherEditsListingsGetQueryParams;
    security: AndroidpublisherEditsListingsGetSecurity;
}
export declare class AndroidpublisherEditsListingsGetResponse extends SpeakeasyBase {
    contentType: string;
    listing?: shared.Listing;
    statusCode: number;
}
