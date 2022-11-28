import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2BiddersFilterSetsCreatePathParams extends SpeakeasyBase {
    ownerName: string;
}
export declare class Adexchangebuyer2BiddersFilterSetsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    isTransient?: boolean;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class Adexchangebuyer2BiddersFilterSetsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2BiddersFilterSetsCreateRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2BiddersFilterSetsCreatePathParams;
    queryParams: Adexchangebuyer2BiddersFilterSetsCreateQueryParams;
    request?: shared.FilterSet;
    security: Adexchangebuyer2BiddersFilterSetsCreateSecurity;
}
export declare class Adexchangebuyer2BiddersFilterSetsCreateResponse extends SpeakeasyBase {
    contentType: string;
    filterSet?: shared.FilterSet;
    statusCode: number;
}
