import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherEditsApksListPathParams extends SpeakeasyBase {
    editId: string;
    packageName: string;
}
export declare class AndroidpublisherEditsApksListQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherEditsApksListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsApksListRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsApksListPathParams;
    queryParams: AndroidpublisherEditsApksListQueryParams;
    security: AndroidpublisherEditsApksListSecurity;
}
export declare class AndroidpublisherEditsApksListResponse extends SpeakeasyBase {
    apksListResponse?: shared.ApksListResponse;
    contentType: string;
    statusCode: number;
}
