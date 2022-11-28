import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdexchangebuyerCreativesGetPathParams extends SpeakeasyBase {
    accountId: number;
    buyerCreativeId: string;
}
export declare class AdexchangebuyerCreativesGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdexchangebuyerCreativesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdexchangebuyerCreativesGetRequest extends SpeakeasyBase {
    pathParams: AdexchangebuyerCreativesGetPathParams;
    queryParams: AdexchangebuyerCreativesGetQueryParams;
    security: AdexchangebuyerCreativesGetSecurity;
}
export declare class AdexchangebuyerCreativesGetResponse extends SpeakeasyBase {
    contentType: string;
    creative?: shared.Creative;
    statusCode: number;
}
