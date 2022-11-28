import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherSystemapksVariantsCreatePathParams extends SpeakeasyBase {
    packageName: string;
    versionCode: string;
}
export declare class AndroidpublisherSystemapksVariantsCreateQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherSystemapksVariantsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherSystemapksVariantsCreateRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherSystemapksVariantsCreatePathParams;
    queryParams: AndroidpublisherSystemapksVariantsCreateQueryParams;
    request?: shared.VariantInput;
    security: AndroidpublisherSystemapksVariantsCreateSecurity;
}
export declare class AndroidpublisherSystemapksVariantsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    variant?: shared.Variant;
}
