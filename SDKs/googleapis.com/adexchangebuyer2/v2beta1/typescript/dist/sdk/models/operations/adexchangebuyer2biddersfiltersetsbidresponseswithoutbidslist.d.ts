import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListPathParams extends SpeakeasyBase {
    filterSetName: string;
}
export declare class Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListQueryParams extends SpeakeasyBase {
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
export declare class Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListPathParams;
    queryParams: Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListQueryParams;
    security: Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListSecurity;
}
export declare class Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListResponse extends SpeakeasyBase {
    contentType: string;
    listBidResponsesWithoutBidsResponse?: shared.ListBidResponsesWithoutBidsResponse;
    statusCode: number;
}
