import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2BiddersFilterSetsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class Adexchangebuyer2BiddersFilterSetsGetQueryParams extends SpeakeasyBase {
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
export declare class Adexchangebuyer2BiddersFilterSetsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2BiddersFilterSetsGetRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2BiddersFilterSetsGetPathParams;
    queryParams: Adexchangebuyer2BiddersFilterSetsGetQueryParams;
    security: Adexchangebuyer2BiddersFilterSetsGetSecurity;
}
export declare class Adexchangebuyer2BiddersFilterSetsGetResponse extends SpeakeasyBase {
    contentType: string;
    filterSet?: shared.FilterSet;
    statusCode: number;
}
