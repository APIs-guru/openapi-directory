import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherEditsGetPathParams extends SpeakeasyBase {
    editId: string;
    packageName: string;
}
export declare class AndroidpublisherEditsGetQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherEditsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsGetRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsGetPathParams;
    queryParams: AndroidpublisherEditsGetQueryParams;
    security: AndroidpublisherEditsGetSecurity;
}
export declare class AndroidpublisherEditsGetResponse extends SpeakeasyBase {
    appEdit?: shared.AppEdit;
    contentType: string;
    statusCode: number;
}
