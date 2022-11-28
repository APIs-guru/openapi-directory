import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2BiddersFilterSetsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class Adexchangebuyer2BiddersFilterSetsDeleteQueryParams extends SpeakeasyBase {
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
export declare class Adexchangebuyer2BiddersFilterSetsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2BiddersFilterSetsDeleteRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2BiddersFilterSetsDeletePathParams;
    queryParams: Adexchangebuyer2BiddersFilterSetsDeleteQueryParams;
    security: Adexchangebuyer2BiddersFilterSetsDeleteSecurity;
}
export declare class Adexchangebuyer2BiddersFilterSetsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
