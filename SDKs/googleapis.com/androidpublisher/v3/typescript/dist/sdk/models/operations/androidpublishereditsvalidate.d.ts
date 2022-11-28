import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherEditsValidatePathParams extends SpeakeasyBase {
    editId: string;
    packageName: string;
}
export declare class AndroidpublisherEditsValidateQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherEditsValidateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsValidateRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsValidatePathParams;
    queryParams: AndroidpublisherEditsValidateQueryParams;
    security: AndroidpublisherEditsValidateSecurity;
}
export declare class AndroidpublisherEditsValidateResponse extends SpeakeasyBase {
    appEdit?: shared.AppEdit;
    contentType: string;
    statusCode: number;
}
