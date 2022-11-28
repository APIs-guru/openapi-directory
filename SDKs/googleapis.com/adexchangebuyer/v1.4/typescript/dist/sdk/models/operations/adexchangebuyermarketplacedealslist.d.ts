import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdexchangebuyerMarketplacedealsListPathParams extends SpeakeasyBase {
    proposalId: string;
}
export declare class AdexchangebuyerMarketplacedealsListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pqlQuery?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdexchangebuyerMarketplacedealsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdexchangebuyerMarketplacedealsListRequest extends SpeakeasyBase {
    pathParams: AdexchangebuyerMarketplacedealsListPathParams;
    queryParams: AdexchangebuyerMarketplacedealsListQueryParams;
    security: AdexchangebuyerMarketplacedealsListSecurity;
}
export declare class AdexchangebuyerMarketplacedealsListResponse extends SpeakeasyBase {
    contentType: string;
    getOrderDealsResponse?: shared.GetOrderDealsResponse;
    statusCode: number;
}
