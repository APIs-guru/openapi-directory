import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListPathParams extends SpeakeasyBase {
    filterSetName: string;
}
export declare class Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListQueryParams extends SpeakeasyBase {
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
export declare class Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListPathParams;
    queryParams: Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListQueryParams;
    security: Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListSecurity;
}
export declare class Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListResponse extends SpeakeasyBase {
    contentType: string;
    listNonBillableWinningBidsResponse?: shared.ListNonBillableWinningBidsResponse;
    statusCode: number;
}
