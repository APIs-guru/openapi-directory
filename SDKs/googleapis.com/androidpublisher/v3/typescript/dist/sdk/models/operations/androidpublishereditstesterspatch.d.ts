import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherEditsTestersPatchPathParams extends SpeakeasyBase {
    editId: string;
    packageName: string;
    track: string;
}
export declare class AndroidpublisherEditsTestersPatchQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherEditsTestersPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsTestersPatchRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsTestersPatchPathParams;
    queryParams: AndroidpublisherEditsTestersPatchQueryParams;
    request?: shared.Testers;
    security: AndroidpublisherEditsTestersPatchSecurity;
}
export declare class AndroidpublisherEditsTestersPatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testers?: shared.Testers;
}
