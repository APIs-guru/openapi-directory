import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherEditsTestersGetPathParams extends SpeakeasyBase {
    editId: string;
    packageName: string;
    track: string;
}
export declare class AndroidpublisherEditsTestersGetQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherEditsTestersGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsTestersGetRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsTestersGetPathParams;
    queryParams: AndroidpublisherEditsTestersGetQueryParams;
    security: AndroidpublisherEditsTestersGetSecurity;
}
export declare class AndroidpublisherEditsTestersGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testers?: shared.Testers;
}
