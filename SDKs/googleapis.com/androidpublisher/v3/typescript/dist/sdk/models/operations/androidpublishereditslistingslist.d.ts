import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherEditsListingsListPathParams extends SpeakeasyBase {
    editId: string;
    packageName: string;
}
export declare class AndroidpublisherEditsListingsListQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherEditsListingsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsListingsListRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsListingsListPathParams;
    queryParams: AndroidpublisherEditsListingsListQueryParams;
    security: AndroidpublisherEditsListingsListSecurity;
}
export declare class AndroidpublisherEditsListingsListResponse extends SpeakeasyBase {
    contentType: string;
    listingsListResponse?: shared.ListingsListResponse;
    statusCode: number;
}
