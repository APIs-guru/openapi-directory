import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryResourcesFeaturesListPathParams extends SpeakeasyBase {
    customer: string;
}
export declare class DirectoryResourcesFeaturesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DirectoryResourcesFeaturesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryResourcesFeaturesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryResourcesFeaturesListSecurity extends SpeakeasyBase {
    option1?: DirectoryResourcesFeaturesListSecurityOption1;
    option2?: DirectoryResourcesFeaturesListSecurityOption2;
}
export declare class DirectoryResourcesFeaturesListRequest extends SpeakeasyBase {
    pathParams: DirectoryResourcesFeaturesListPathParams;
    queryParams: DirectoryResourcesFeaturesListQueryParams;
    security: DirectoryResourcesFeaturesListSecurity;
}
export declare class DirectoryResourcesFeaturesListResponse extends SpeakeasyBase {
    contentType: string;
    features?: shared.Features;
    statusCode: number;
}
