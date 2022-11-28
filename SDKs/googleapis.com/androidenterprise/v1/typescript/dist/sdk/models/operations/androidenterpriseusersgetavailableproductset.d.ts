import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseUsersGetAvailableProductSetPathParams extends SpeakeasyBase {
    enterpriseId: string;
    userId: string;
}
export declare class AndroidenterpriseUsersGetAvailableProductSetQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseUsersGetAvailableProductSetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseUsersGetAvailableProductSetRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseUsersGetAvailableProductSetPathParams;
    queryParams: AndroidenterpriseUsersGetAvailableProductSetQueryParams;
    security: AndroidenterpriseUsersGetAvailableProductSetSecurity;
}
export declare class AndroidenterpriseUsersGetAvailableProductSetResponse extends SpeakeasyBase {
    contentType: string;
    productSet?: shared.ProductSet;
    statusCode: number;
}
