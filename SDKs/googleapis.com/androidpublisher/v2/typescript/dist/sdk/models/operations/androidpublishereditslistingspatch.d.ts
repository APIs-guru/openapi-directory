import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherEditsListingsPatchPathParams extends SpeakeasyBase {
    editId: string;
    language: string;
    packageName: string;
}
export declare class AndroidpublisherEditsListingsPatchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
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
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
