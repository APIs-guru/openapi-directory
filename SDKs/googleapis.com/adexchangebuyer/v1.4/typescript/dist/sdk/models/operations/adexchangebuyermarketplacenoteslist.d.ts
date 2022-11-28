import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdexchangebuyerMarketplacenotesListPathParams extends SpeakeasyBase {
    proposalId: string;
}
export declare class AdexchangebuyerMarketplacenotesListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pqlQuery?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdexchangebuyerMarketplacenotesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdexchangebuyerMarketplacenotesListRequest extends SpeakeasyBase {
    pathParams: AdexchangebuyerMarketplacenotesListPathParams;
    queryParams: AdexchangebuyerMarketplacenotesListQueryParams;
    security: AdexchangebuyerMarketplacenotesListSecurity;
}
export declare class AdexchangebuyerMarketplacenotesListResponse extends SpeakeasyBase {
    contentType: string;
    getOrderNotesResponse?: shared.GetOrderNotesResponse;
    statusCode: number;
}
