import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherEditsListingsPatchPathParams extends SpeakeasyBase {
    editId: string;
    language: string;
    packageName: string;
}
export declare class AndroidpublisherEditsListingsPatchQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherEditsListingsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsListingsPatchRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsListingsPatchPathParams;
    queryParams: AndroidpublisherEditsListingsPatchQueryParams;
    request?: shared.Listing;
    security: AndroidpublisherEditsListingsPatchSecurity;
}
export declare class AndroidpublisherEditsListingsPatchResponse extends SpeakeasyBase {
    contentType: string;
    listing?: shared.Listing;
    statusCode: number;
}
