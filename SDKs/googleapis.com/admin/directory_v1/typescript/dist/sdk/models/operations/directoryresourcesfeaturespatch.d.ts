import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryResourcesFeaturesPatchPathParams extends SpeakeasyBase {
    customer: string;
    featureKey: string;
}
export declare class DirectoryResourcesFeaturesPatchQueryParams extends SpeakeasyBase {
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
export declare class DirectoryResourcesFeaturesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryResourcesFeaturesPatchRequest extends SpeakeasyBase {
    pathParams: DirectoryResourcesFeaturesPatchPathParams;
    queryParams: DirectoryResourcesFeaturesPatchQueryParams;
    request?: shared.Feature;
    security: DirectoryResourcesFeaturesPatchSecurity;
}
export declare class DirectoryResourcesFeaturesPatchResponse extends SpeakeasyBase {
    contentType: string;
    feature?: shared.Feature;
    statusCode: number;
}
