import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AdexchangebuyerBillingInfoListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdexchangebuyerBillingInfoListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdexchangebuyerBillingInfoListRequest extends SpeakeasyBase {
    queryParams: AdexchangebuyerBillingInfoListQueryParams;
    security: AdexchangebuyerBillingInfoListSecurity;
}
export declare class AdexchangebuyerBillingInfoListResponse extends SpeakeasyBase {
    billingInfoList?: shared.BillingInfoList;
    contentType: string;
    statusCode: number;
}
