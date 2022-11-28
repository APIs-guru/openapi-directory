import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherEditsTracksPatchPathParams extends SpeakeasyBase {
    editId: string;
    packageName: string;
    track: string;
}
export declare class AndroidpublisherEditsTracksPatchQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherEditsTracksPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsTracksPatchRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsTracksPatchPathParams;
    queryParams: AndroidpublisherEditsTracksPatchQueryParams;
    request?: shared.Track;
    security: AndroidpublisherEditsTracksPatchSecurity;
}
export declare class AndroidpublisherEditsTracksPatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    track?: shared.Track;
}
