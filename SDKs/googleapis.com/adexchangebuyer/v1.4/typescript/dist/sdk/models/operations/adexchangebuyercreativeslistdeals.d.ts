import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdexchangebuyerCreativesListDealsPathParams extends SpeakeasyBase {
    accountId: number;
    buyerCreativeId: string;
}
export declare class AdexchangebuyerCreativesListDealsQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdexchangebuyerCreativesListDealsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdexchangebuyerCreativesListDealsRequest extends SpeakeasyBase {
    pathParams: AdexchangebuyerCreativesListDealsPathParams;
    queryParams: AdexchangebuyerCreativesListDealsQueryParams;
    security: AdexchangebuyerCreativesListDealsSecurity;
}
export declare class AdexchangebuyerCreativesListDealsResponse extends SpeakeasyBase {
    contentType: string;
    creativeDealIds?: shared.CreativeDealIds;
    statusCode: number;
}
