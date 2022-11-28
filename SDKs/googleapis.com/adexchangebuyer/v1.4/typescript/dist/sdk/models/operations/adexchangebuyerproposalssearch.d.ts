import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdexchangebuyerProposalsSearchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pqlQuery?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdexchangebuyerProposalsSearchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdexchangebuyerProposalsSearchRequest extends SpeakeasyBase {
    queryParams: AdexchangebuyerProposalsSearchQueryParams;
    security: AdexchangebuyerProposalsSearchSecurity;
}
export declare class AdexchangebuyerProposalsSearchResponse extends SpeakeasyBase {
    contentType: string;
    getOrdersResponse?: shared.GetOrdersResponse;
    statusCode: number;
}
