import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherEditsListingsUpdatePathParams extends SpeakeasyBase {
    editId: string;
    language: string;
    packageName: string;
}
export declare class AndroidpublisherEditsListingsUpdateQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherEditsListingsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsListingsUpdateRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsListingsUpdatePathParams;
    queryParams: AndroidpublisherEditsListingsUpdateQueryParams;
    request?: shared.Listing;
    security: AndroidpublisherEditsListingsUpdateSecurity;
}
export declare class AndroidpublisherEditsListingsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    listing?: shared.Listing;
    statusCode: number;
}
