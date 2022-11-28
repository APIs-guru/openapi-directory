import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseUsersSetAvailableProductSetPathParams extends SpeakeasyBase {
    enterpriseId: string;
    userId: string;
}
export declare class AndroidenterpriseUsersSetAvailableProductSetQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseUsersSetAvailableProductSetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseUsersSetAvailableProductSetRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseUsersSetAvailableProductSetPathParams;
    queryParams: AndroidenterpriseUsersSetAvailableProductSetQueryParams;
    request?: shared.ProductSet;
    security: AndroidenterpriseUsersSetAvailableProductSetSecurity;
}
export declare class AndroidenterpriseUsersSetAvailableProductSetResponse extends SpeakeasyBase {
    contentType: string;
    productSet?: shared.ProductSet;
    statusCode: number;
}
