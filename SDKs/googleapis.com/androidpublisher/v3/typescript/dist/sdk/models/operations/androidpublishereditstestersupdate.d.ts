import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherEditsTestersUpdatePathParams extends SpeakeasyBase {
    editId: string;
    packageName: string;
    track: string;
}
export declare class AndroidpublisherEditsTestersUpdateQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherEditsTestersUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsTestersUpdateRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsTestersUpdatePathParams;
    queryParams: AndroidpublisherEditsTestersUpdateQueryParams;
    request?: shared.Testers;
    security: AndroidpublisherEditsTestersUpdateSecurity;
}
export declare class AndroidpublisherEditsTestersUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testers?: shared.Testers;
}
