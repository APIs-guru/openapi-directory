import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryResourcesFeaturesGetPathParams extends SpeakeasyBase {
    customer: string;
    featureKey: string;
}
export declare class DirectoryResourcesFeaturesGetQueryParams extends SpeakeasyBase {
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
export declare class DirectoryResourcesFeaturesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryResourcesFeaturesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryResourcesFeaturesGetSecurity extends SpeakeasyBase {
    option1?: DirectoryResourcesFeaturesGetSecurityOption1;
    option2?: DirectoryResourcesFeaturesGetSecurityOption2;
}
export declare class DirectoryResourcesFeaturesGetRequest extends SpeakeasyBase {
    pathParams: DirectoryResourcesFeaturesGetPathParams;
    queryParams: DirectoryResourcesFeaturesGetQueryParams;
    security: DirectoryResourcesFeaturesGetSecurity;
}
export declare class DirectoryResourcesFeaturesGetResponse extends SpeakeasyBase {
    contentType: string;
    feature?: shared.Feature;
    statusCode: number;
}
