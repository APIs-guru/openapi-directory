import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdexchangebuyerMarketplaceprivateauctionUpdateproposalPathParams extends SpeakeasyBase {
    privateAuctionId: string;
}
export declare class AdexchangebuyerMarketplaceprivateauctionUpdateproposalQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdexchangebuyerMarketplaceprivateauctionUpdateproposalSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdexchangebuyerMarketplaceprivateauctionUpdateproposalRequest extends SpeakeasyBase {
    pathParams: AdexchangebuyerMarketplaceprivateauctionUpdateproposalPathParams;
    queryParams: AdexchangebuyerMarketplaceprivateauctionUpdateproposalQueryParams;
    request?: shared.UpdatePrivateAuctionProposalRequest;
    security: AdexchangebuyerMarketplaceprivateauctionUpdateproposalSecurity;
}
export declare class AdexchangebuyerMarketplaceprivateauctionUpdateproposalResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
