import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AdexchangebuyerBudgetUpdatePathParams extends SpeakeasyBase {
    accountId: string;
    billingId: string;
}
export declare class AdexchangebuyerBudgetUpdateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdexchangebuyerBudgetUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdexchangebuyerBudgetUpdateRequest extends SpeakeasyBase {
    pathParams: AdexchangebuyerBudgetUpdatePathParams;
    queryParams: AdexchangebuyerBudgetUpdateQueryParams;
    request?: shared.Budget;
    security: AdexchangebuyerBudgetUpdateSecurity;
}
export declare class AdexchangebuyerBudgetUpdateResponse extends SpeakeasyBase {
    budget?: shared.Budget;
    contentType: string;
    statusCode: number;
}
