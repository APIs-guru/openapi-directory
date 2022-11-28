import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminAccountsProvisionAccountTicketQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsadminAccountsProvisionAccountTicketSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminAccountsProvisionAccountTicketRequest extends SpeakeasyBase {
    queryParams: AnalyticsadminAccountsProvisionAccountTicketQueryParams;
    request?: shared.GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequestInput;
    security: AnalyticsadminAccountsProvisionAccountTicketSecurity;
}
export declare class AnalyticsadminAccountsProvisionAccountTicketResponse extends SpeakeasyBase {
    contentType: string;
    googleAnalyticsAdminV1alphaProvisionAccountTicketResponse?: shared.GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse;
    statusCode: number;
}
