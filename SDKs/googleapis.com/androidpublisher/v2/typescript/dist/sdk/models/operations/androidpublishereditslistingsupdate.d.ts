import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherEditsListingsUpdatePathParams extends SpeakeasyBase {
    editId: string;
    language: string;
    packageName: string;
}
export declare class AndroidpublisherEditsListingsUpdateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
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
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
