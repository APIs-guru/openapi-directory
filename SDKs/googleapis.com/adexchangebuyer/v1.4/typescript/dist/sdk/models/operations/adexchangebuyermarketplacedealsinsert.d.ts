import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdexchangebuyerMarketplacedealsInsertPathParams extends SpeakeasyBase {
    proposalId: string;
}
export declare class AdexchangebuyerMarketplacedealsInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdexchangebuyerMarketplacedealsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdexchangebuyerMarketplacedealsInsertRequest extends SpeakeasyBase {
    pathParams: AdexchangebuyerMarketplacedealsInsertPathParams;
    queryParams: AdexchangebuyerMarketplacedealsInsertQueryParams;
    request?: shared.AddOrderDealsRequest;
    security: AdexchangebuyerMarketplacedealsInsertSecurity;
}
export declare class AdexchangebuyerMarketplacedealsInsertResponse extends SpeakeasyBase {
    addOrderDealsResponse?: shared.AddOrderDealsResponse;
    contentType: string;
    statusCode: number;
}
