import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdexchangebuyerBudgetPatchPathParams extends SpeakeasyBase {
    accountId: string;
    billingId: string;
}
export declare class AdexchangebuyerBudgetPatchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdexchangebuyerBudgetPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdexchangebuyerBudgetPatchRequest extends SpeakeasyBase {
    pathParams: AdexchangebuyerBudgetPatchPathParams;
    queryParams: AdexchangebuyerBudgetPatchQueryParams;
    request?: shared.Budget;
    security: AdexchangebuyerBudgetPatchSecurity;
}
export declare class AdexchangebuyerBudgetPatchResponse extends SpeakeasyBase {
    budget?: shared.Budget;
    contentType: string;
    statusCode: number;
}
