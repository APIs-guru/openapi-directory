import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherEditsTracksListPathParams extends SpeakeasyBase {
    editId: string;
    packageName: string;
}
export declare class AndroidpublisherEditsTracksListQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherEditsTracksListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsTracksListRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsTracksListPathParams;
    queryParams: AndroidpublisherEditsTracksListQueryParams;
    security: AndroidpublisherEditsTracksListSecurity;
}
export declare class AndroidpublisherEditsTracksListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tracksListResponse?: shared.TracksListResponse;
}
