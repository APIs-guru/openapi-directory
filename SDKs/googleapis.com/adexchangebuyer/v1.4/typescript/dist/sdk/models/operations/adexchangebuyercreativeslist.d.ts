import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AdexchangebuyerCreativesListDealsStatusFilterEnum {
    Approved = "approved",
    ConditionallyApproved = "conditionally_approved",
    Disapproved = "disapproved",
    NotChecked = "not_checked"
}
export declare enum AdexchangebuyerCreativesListOpenAuctionStatusFilterEnum {
    Approved = "approved",
    ConditionallyApproved = "conditionally_approved",
    Disapproved = "disapproved",
    NotChecked = "not_checked"
}
export declare class AdexchangebuyerCreativesListQueryParams extends SpeakeasyBase {
    accountId?: number[];
    alt?: shared.AltEnum;
    buyerCreativeId?: string[];
    dealsStatusFilter?: AdexchangebuyerCreativesListDealsStatusFilterEnum;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    openAuctionStatusFilter?: AdexchangebuyerCreativesListOpenAuctionStatusFilterEnum;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdexchangebuyerCreativesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdexchangebuyerCreativesListRequest extends SpeakeasyBase {
    queryParams: AdexchangebuyerCreativesListQueryParams;
    security: AdexchangebuyerCreativesListSecurity;
}
export declare class AdexchangebuyerCreativesListResponse extends SpeakeasyBase {
    contentType: string;
    creativesList?: shared.CreativesList;
    statusCode: number;
}
