import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherSystemapksVariantsListPathParams extends SpeakeasyBase {
    packageName: string;
    versionCode: string;
}
export declare class AndroidpublisherSystemapksVariantsListQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherSystemapksVariantsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherSystemapksVariantsListRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherSystemapksVariantsListPathParams;
    queryParams: AndroidpublisherSystemapksVariantsListQueryParams;
    security: AndroidpublisherSystemapksVariantsListSecurity;
}
export declare class AndroidpublisherSystemapksVariantsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    systemApksListResponse?: shared.SystemApksListResponse;
}
