import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseEnterprisesUnenrollPathParams extends SpeakeasyBase {
    enterpriseId: string;
}
export declare class AndroidenterpriseEnterprisesUnenrollQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseEnterprisesUnenrollSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseEnterprisesUnenrollRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseEnterprisesUnenrollPathParams;
    queryParams: AndroidenterpriseEnterprisesUnenrollQueryParams;
    security: AndroidenterpriseEnterprisesUnenrollSecurity;
}
export declare class AndroidenterpriseEnterprisesUnenrollResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
