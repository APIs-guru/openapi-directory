import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdexchangebuyerDirectDealsListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdexchangebuyerDirectDealsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdexchangebuyerDirectDealsListRequest extends SpeakeasyBase {
    queryParams: AdexchangebuyerDirectDealsListQueryParams;
    security: AdexchangebuyerDirectDealsListSecurity;
}
export declare class AdexchangebuyerDirectDealsListResponse extends SpeakeasyBase {
    contentType: string;
    directDealsList?: shared.DirectDealsList;
    statusCode: number;
}
