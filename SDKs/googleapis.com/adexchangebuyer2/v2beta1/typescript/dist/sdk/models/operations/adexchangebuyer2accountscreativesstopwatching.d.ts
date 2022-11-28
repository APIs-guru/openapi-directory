import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2AccountsCreativesStopWatchingPathParams extends SpeakeasyBase {
    accountId: string;
    creativeId: string;
}
export declare class Adexchangebuyer2AccountsCreativesStopWatchingQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class Adexchangebuyer2AccountsCreativesStopWatchingSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2AccountsCreativesStopWatchingRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2AccountsCreativesStopWatchingPathParams;
    queryParams: Adexchangebuyer2AccountsCreativesStopWatchingQueryParams;
    request?: Map<string, any>;
    security: Adexchangebuyer2AccountsCreativesStopWatchingSecurity;
}
export declare class Adexchangebuyer2AccountsCreativesStopWatchingResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
