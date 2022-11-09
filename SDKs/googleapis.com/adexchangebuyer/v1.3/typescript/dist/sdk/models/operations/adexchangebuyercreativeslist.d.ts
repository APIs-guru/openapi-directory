import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum AdexchangebuyerCreativesListStatusFilterEnum {
    Approved = "approved",
    Disapproved = "disapproved",
    NotChecked = "not_checked"
}
export declare class AdexchangebuyerCreativesListQueryParams extends SpeakeasyBase {
    accountId?: number[];
    alt?: shared.AltEnum;
    buyerCreativeId?: string[];
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    statusFilter?: AdexchangebuyerCreativesListStatusFilterEnum;
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
