import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AdexchangebuyerAccountsListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdexchangebuyerAccountsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdexchangebuyerAccountsListRequest extends SpeakeasyBase {
    queryParams: AdexchangebuyerAccountsListQueryParams;
    security: AdexchangebuyerAccountsListSecurity;
}
export declare class AdexchangebuyerAccountsListResponse extends SpeakeasyBase {
    accountsList?: shared.AccountsList;
    contentType: string;
    statusCode: number;
}
