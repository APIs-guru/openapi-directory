import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AdexchangebuyerBudgetGetPathParams extends SpeakeasyBase {
    accountId: string;
    billingId: string;
}
export declare class AdexchangebuyerBudgetGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdexchangebuyerBudgetGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdexchangebuyerBudgetGetRequest extends SpeakeasyBase {
    pathParams: AdexchangebuyerBudgetGetPathParams;
    queryParams: AdexchangebuyerBudgetGetQueryParams;
    security: AdexchangebuyerBudgetGetSecurity;
}
export declare class AdexchangebuyerBudgetGetResponse extends SpeakeasyBase {
    budget?: shared.Budget;
    contentType: string;
    statusCode: number;
}
