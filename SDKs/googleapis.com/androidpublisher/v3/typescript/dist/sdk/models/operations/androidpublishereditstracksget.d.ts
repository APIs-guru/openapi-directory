import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherEditsTracksGetPathParams extends SpeakeasyBase {
    editId: string;
    packageName: string;
    track: string;
}
export declare class AndroidpublisherEditsTracksGetQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherEditsTracksGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsTracksGetRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsTracksGetPathParams;
    queryParams: AndroidpublisherEditsTracksGetQueryParams;
    security: AndroidpublisherEditsTracksGetSecurity;
}
export declare class AndroidpublisherEditsTracksGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    track?: shared.Track;
}
