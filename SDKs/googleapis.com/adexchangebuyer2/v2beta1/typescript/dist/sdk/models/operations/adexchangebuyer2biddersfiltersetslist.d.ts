import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2BiddersFilterSetsListPathParams extends SpeakeasyBase {
    ownerName: string;
}
export declare class Adexchangebuyer2BiddersFilterSetsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class Adexchangebuyer2BiddersFilterSetsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2BiddersFilterSetsListRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2BiddersFilterSetsListPathParams;
    queryParams: Adexchangebuyer2BiddersFilterSetsListQueryParams;
    security: Adexchangebuyer2BiddersFilterSetsListSecurity;
}
export declare class Adexchangebuyer2BiddersFilterSetsListResponse extends SpeakeasyBase {
    contentType: string;
    listFilterSetsResponse?: shared.ListFilterSetsResponse;
    statusCode: number;
}
