import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryMobiledevicesDeletePathParams extends SpeakeasyBase {
    customerId: string;
    resourceId: string;
}
export declare class DirectoryMobiledevicesDeleteQueryParams extends SpeakeasyBase {
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
export declare class DirectoryMobiledevicesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryMobiledevicesDeleteRequest extends SpeakeasyBase {
    pathParams: DirectoryMobiledevicesDeletePathParams;
    queryParams: DirectoryMobiledevicesDeleteQueryParams;
    security: DirectoryMobiledevicesDeleteSecurity;
}
export declare class DirectoryMobiledevicesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
