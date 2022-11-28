import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseEnterprisesEnrollQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    token: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AndroidenterpriseEnterprisesEnrollSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseEnterprisesEnrollRequest extends SpeakeasyBase {
    queryParams: AndroidenterpriseEnterprisesEnrollQueryParams;
    request?: shared.Enterprise;
    security: AndroidenterpriseEnterprisesEnrollSecurity;
}
export declare class AndroidenterpriseEnterprisesEnrollResponse extends SpeakeasyBase {
    contentType: string;
    enterprise?: shared.Enterprise;
    statusCode: number;
}
