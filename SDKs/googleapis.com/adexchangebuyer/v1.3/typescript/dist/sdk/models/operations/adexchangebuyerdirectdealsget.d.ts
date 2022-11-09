import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AdexchangebuyerDirectDealsGetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class AdexchangebuyerDirectDealsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdexchangebuyerDirectDealsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdexchangebuyerDirectDealsGetRequest extends SpeakeasyBase {
    pathParams: AdexchangebuyerDirectDealsGetPathParams;
    queryParams: AdexchangebuyerDirectDealsGetQueryParams;
    security: AdexchangebuyerDirectDealsGetSecurity;
}
export declare class AdexchangebuyerDirectDealsGetResponse extends SpeakeasyBase {
    contentType: string;
    directDeal?: shared.DirectDeal;
    statusCode: number;
}
