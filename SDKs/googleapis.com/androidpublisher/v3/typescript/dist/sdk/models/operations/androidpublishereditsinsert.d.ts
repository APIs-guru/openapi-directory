import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherEditsInsertPathParams extends SpeakeasyBase {
    packageName: string;
}
export declare class AndroidpublisherEditsInsertQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherEditsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsInsertRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsInsertPathParams;
    queryParams: AndroidpublisherEditsInsertQueryParams;
    security: AndroidpublisherEditsInsertSecurity;
}
export declare class AndroidpublisherEditsInsertResponse extends SpeakeasyBase {
    appEdit?: shared.AppEdit;
    contentType: string;
    statusCode: number;
}
