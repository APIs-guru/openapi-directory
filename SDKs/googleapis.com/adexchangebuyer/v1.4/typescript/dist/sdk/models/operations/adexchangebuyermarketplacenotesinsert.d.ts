import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdexchangebuyerMarketplacenotesInsertPathParams extends SpeakeasyBase {
    proposalId: string;
}
export declare class AdexchangebuyerMarketplacenotesInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdexchangebuyerMarketplacenotesInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdexchangebuyerMarketplacenotesInsertRequest extends SpeakeasyBase {
    pathParams: AdexchangebuyerMarketplacenotesInsertPathParams;
    queryParams: AdexchangebuyerMarketplacenotesInsertQueryParams;
    request?: shared.AddOrderNotesRequest;
    security: AdexchangebuyerMarketplacenotesInsertSecurity;
}
export declare class AdexchangebuyerMarketplacenotesInsertResponse extends SpeakeasyBase {
    addOrderNotesResponse?: shared.AddOrderNotesResponse;
    contentType: string;
    statusCode: number;
}
