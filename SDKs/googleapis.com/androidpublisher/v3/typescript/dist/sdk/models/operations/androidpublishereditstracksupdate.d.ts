import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherEditsTracksUpdatePathParams extends SpeakeasyBase {
    editId: string;
    packageName: string;
    track: string;
}
export declare class AndroidpublisherEditsTracksUpdateQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherEditsTracksUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsTracksUpdateRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsTracksUpdatePathParams;
    queryParams: AndroidpublisherEditsTracksUpdateQueryParams;
    request?: shared.Track;
    security: AndroidpublisherEditsTracksUpdateSecurity;
}
export declare class AndroidpublisherEditsTracksUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    track?: shared.Track;
}
