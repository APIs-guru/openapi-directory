import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AdexchangebuyerBillingInfoGetPathParams extends SpeakeasyBase {
    accountId: number;
}
export declare class AdexchangebuyerBillingInfoGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdexchangebuyerBillingInfoGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdexchangebuyerBillingInfoGetRequest extends SpeakeasyBase {
    pathParams: AdexchangebuyerBillingInfoGetPathParams;
    queryParams: AdexchangebuyerBillingInfoGetQueryParams;
    security: AdexchangebuyerBillingInfoGetSecurity;
}
export declare class AdexchangebuyerBillingInfoGetResponse extends SpeakeasyBase {
    billingInfo?: shared.BillingInfo;
    contentType: string;
    statusCode: number;
}
