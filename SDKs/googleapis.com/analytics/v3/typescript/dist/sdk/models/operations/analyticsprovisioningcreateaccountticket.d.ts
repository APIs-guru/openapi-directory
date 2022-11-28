import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsProvisioningCreateAccountTicketQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsProvisioningCreateAccountTicketSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsProvisioningCreateAccountTicketRequest extends SpeakeasyBase {
    queryParams: AnalyticsProvisioningCreateAccountTicketQueryParams;
    request?: shared.AccountTicketInput;
    security: AnalyticsProvisioningCreateAccountTicketSecurity;
}
export declare class AnalyticsProvisioningCreateAccountTicketResponse extends SpeakeasyBase {
    accountTicket?: shared.AccountTicket;
    contentType: string;
    statusCode: number;
}
