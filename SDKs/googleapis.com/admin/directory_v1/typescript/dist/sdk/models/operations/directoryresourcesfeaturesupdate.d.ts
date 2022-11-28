import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryResourcesFeaturesUpdatePathParams extends SpeakeasyBase {
    customer: string;
    featureKey: string;
}
export declare class DirectoryResourcesFeaturesUpdateQueryParams extends SpeakeasyBase {
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
export declare class DirectoryResourcesFeaturesUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryResourcesFeaturesUpdateRequest extends SpeakeasyBase {
    pathParams: DirectoryResourcesFeaturesUpdatePathParams;
    queryParams: DirectoryResourcesFeaturesUpdateQueryParams;
    request?: shared.Feature;
    security: DirectoryResourcesFeaturesUpdateSecurity;
}
export declare class DirectoryResourcesFeaturesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    feature?: shared.Feature;
    statusCode: number;
}
