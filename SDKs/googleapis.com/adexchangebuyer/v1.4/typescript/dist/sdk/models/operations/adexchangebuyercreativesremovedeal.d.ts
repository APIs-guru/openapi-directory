import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdexchangebuyerCreativesRemoveDealPathParams extends SpeakeasyBase {
    accountId: number;
    buyerCreativeId: string;
    dealId: string;
}
export declare class AdexchangebuyerCreativesRemoveDealQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdexchangebuyerCreativesRemoveDealSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdexchangebuyerCreativesRemoveDealRequest extends SpeakeasyBase {
    pathParams: AdexchangebuyerCreativesRemoveDealPathParams;
    queryParams: AdexchangebuyerCreativesRemoveDealQueryParams;
    security: AdexchangebuyerCreativesRemoveDealSecurity;
}
export declare class AdexchangebuyerCreativesRemoveDealResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
