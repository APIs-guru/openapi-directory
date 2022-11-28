import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdexchangebuyerMarketplacedealsUpdatePathParams extends SpeakeasyBase {
    proposalId: string;
}
export declare class AdexchangebuyerMarketplacedealsUpdateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdexchangebuyerMarketplacedealsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdexchangebuyerMarketplacedealsUpdateRequest extends SpeakeasyBase {
    pathParams: AdexchangebuyerMarketplacedealsUpdatePathParams;
    queryParams: AdexchangebuyerMarketplacedealsUpdateQueryParams;
    request?: shared.EditAllOrderDealsRequest;
    security: AdexchangebuyerMarketplacedealsUpdateSecurity;
}
export declare class AdexchangebuyerMarketplacedealsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    editAllOrderDealsResponse?: shared.EditAllOrderDealsResponse;
    statusCode: number;
}
