import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseEnterprisesSetAccountPathParams extends SpeakeasyBase {
    enterpriseId: string;
}
export declare class AndroidenterpriseEnterprisesSetAccountQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseEnterprisesSetAccountSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseEnterprisesSetAccountRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseEnterprisesSetAccountPathParams;
    queryParams: AndroidenterpriseEnterprisesSetAccountQueryParams;
    request?: shared.EnterpriseAccount;
    security: AndroidenterpriseEnterprisesSetAccountSecurity;
}
export declare class AndroidenterpriseEnterprisesSetAccountResponse extends SpeakeasyBase {
    contentType: string;
    enterpriseAccount?: shared.EnterpriseAccount;
    statusCode: number;
}
