import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReportsCustomerUsageReportsGetPathParams extends SpeakeasyBase {
    date: string;
}
export declare class ReportsCustomerUsageReportsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    customerId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageToken?: string;
    parameters?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ReportsCustomerUsageReportsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReportsCustomerUsageReportsGetRequest extends SpeakeasyBase {
    pathParams: ReportsCustomerUsageReportsGetPathParams;
    queryParams: ReportsCustomerUsageReportsGetQueryParams;
    security: ReportsCustomerUsageReportsGetSecurity;
}
export declare class ReportsCustomerUsageReportsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    usageReports?: shared.UsageReports;
}
