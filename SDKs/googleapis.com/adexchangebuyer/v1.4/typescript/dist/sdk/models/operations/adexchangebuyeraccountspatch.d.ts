import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdexchangebuyerAccountsPatchPathParams extends SpeakeasyBase {
    id: number;
}
export declare class AdexchangebuyerAccountsPatchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    confirmUnsafeAccountChange?: boolean;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdexchangebuyerAccountsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdexchangebuyerAccountsPatchRequest extends SpeakeasyBase {
    pathParams: AdexchangebuyerAccountsPatchPathParams;
    queryParams: AdexchangebuyerAccountsPatchQueryParams;
    request?: shared.Account;
    security: AdexchangebuyerAccountsPatchSecurity;
}
export declare class AdexchangebuyerAccountsPatchResponse extends SpeakeasyBase {
    account?: shared.Account;
    contentType: string;
    statusCode: number;
}
