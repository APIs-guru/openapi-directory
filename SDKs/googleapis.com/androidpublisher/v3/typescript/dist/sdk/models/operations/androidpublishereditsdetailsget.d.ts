import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherEditsDetailsGetPathParams extends SpeakeasyBase {
    editId: string;
    packageName: string;
}
export declare class AndroidpublisherEditsDetailsGetQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherEditsDetailsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsDetailsGetRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsDetailsGetPathParams;
    queryParams: AndroidpublisherEditsDetailsGetQueryParams;
    security: AndroidpublisherEditsDetailsGetSecurity;
}
export declare class AndroidpublisherEditsDetailsGetResponse extends SpeakeasyBase {
    appDetails?: shared.AppDetails;
    contentType: string;
    statusCode: number;
}
