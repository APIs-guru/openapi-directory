import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseEnterprisesGetServiceAccountPathParams extends SpeakeasyBase {
    enterpriseId: string;
}
export declare enum AndroidenterpriseEnterprisesGetServiceAccountKeyTypeEnum {
    GoogleCredentials = "googleCredentials",
    Pkcs12 = "pkcs12"
}
export declare class AndroidenterpriseEnterprisesGetServiceAccountQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    keyType?: AndroidenterpriseEnterprisesGetServiceAccountKeyTypeEnum;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AndroidenterpriseEnterprisesGetServiceAccountSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseEnterprisesGetServiceAccountRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseEnterprisesGetServiceAccountPathParams;
    queryParams: AndroidenterpriseEnterprisesGetServiceAccountQueryParams;
    security: AndroidenterpriseEnterprisesGetServiceAccountSecurity;
}
export declare class AndroidenterpriseEnterprisesGetServiceAccountResponse extends SpeakeasyBase {
    contentType: string;
    serviceAccount?: shared.ServiceAccount;
    statusCode: number;
}
