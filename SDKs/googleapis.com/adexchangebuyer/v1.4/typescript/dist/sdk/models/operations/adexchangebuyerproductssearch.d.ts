import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdexchangebuyerProductsSearchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pqlQuery?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdexchangebuyerProductsSearchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdexchangebuyerProductsSearchRequest extends SpeakeasyBase {
    queryParams: AdexchangebuyerProductsSearchQueryParams;
    security: AdexchangebuyerProductsSearchSecurity;
}
export declare class AdexchangebuyerProductsSearchResponse extends SpeakeasyBase {
    contentType: string;
    getOffersResponse?: shared.GetOffersResponse;
    statusCode: number;
}
