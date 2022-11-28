import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherGeneratedapksListPathParams extends SpeakeasyBase {
    packageName: string;
    versionCode: number;
}
export declare class AndroidpublisherGeneratedapksListQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherGeneratedapksListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherGeneratedapksListRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherGeneratedapksListPathParams;
    queryParams: AndroidpublisherGeneratedapksListQueryParams;
    security: AndroidpublisherGeneratedapksListSecurity;
}
export declare class AndroidpublisherGeneratedapksListResponse extends SpeakeasyBase {
    contentType: string;
    generatedApksListResponse?: shared.GeneratedApksListResponse;
    statusCode: number;
}
