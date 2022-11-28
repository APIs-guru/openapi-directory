import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherSystemapksVariantsGetPathParams extends SpeakeasyBase {
    packageName: string;
    variantId: number;
    versionCode: string;
}
export declare class AndroidpublisherSystemapksVariantsGetQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherSystemapksVariantsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherSystemapksVariantsGetRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherSystemapksVariantsGetPathParams;
    queryParams: AndroidpublisherSystemapksVariantsGetQueryParams;
    security: AndroidpublisherSystemapksVariantsGetSecurity;
}
export declare class AndroidpublisherSystemapksVariantsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    variant?: shared.Variant;
}
