import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdexchangebuyerMarketplacedealsDeletePathParams extends SpeakeasyBase {
    proposalId: string;
}
export declare class AdexchangebuyerMarketplacedealsDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdexchangebuyerMarketplacedealsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdexchangebuyerMarketplacedealsDeleteRequest extends SpeakeasyBase {
    pathParams: AdexchangebuyerMarketplacedealsDeletePathParams;
    queryParams: AdexchangebuyerMarketplacedealsDeleteQueryParams;
    request?: shared.DeleteOrderDealsRequest;
    security: AdexchangebuyerMarketplacedealsDeleteSecurity;
}
export declare class AdexchangebuyerMarketplacedealsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    deleteOrderDealsResponse?: shared.DeleteOrderDealsResponse;
    statusCode: number;
}
