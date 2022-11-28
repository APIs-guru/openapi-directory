import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsProvisioningCreateAccountTreeQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsProvisioningCreateAccountTreeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsProvisioningCreateAccountTreeRequest extends SpeakeasyBase {
    queryParams: AnalyticsProvisioningCreateAccountTreeQueryParams;
    request?: shared.AccountTreeRequest;
    security: AnalyticsProvisioningCreateAccountTreeSecurity;
}
export declare class AnalyticsProvisioningCreateAccountTreeResponse extends SpeakeasyBase {
    accountTreeResponse?: shared.AccountTreeResponse;
    contentType: string;
    statusCode: number;
}
