import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdexchangebuyerCreativesAddDealPathParams extends SpeakeasyBase {
    accountId: number;
    buyerCreativeId: string;
    dealId: string;
}
export declare class AdexchangebuyerCreativesAddDealQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdexchangebuyerCreativesAddDealSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdexchangebuyerCreativesAddDealRequest extends SpeakeasyBase {
    pathParams: AdexchangebuyerCreativesAddDealPathParams;
    queryParams: AdexchangebuyerCreativesAddDealQueryParams;
    security: AdexchangebuyerCreativesAddDealSecurity;
}
export declare class AdexchangebuyerCreativesAddDealResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
