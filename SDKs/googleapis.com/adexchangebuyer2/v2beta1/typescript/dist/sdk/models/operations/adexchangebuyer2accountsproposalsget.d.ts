import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2AccountsProposalsGetPathParams extends SpeakeasyBase {
    accountId: string;
    proposalId: string;
}
export declare class Adexchangebuyer2AccountsProposalsGetQueryParams extends SpeakeasyBase {
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
export declare class Adexchangebuyer2AccountsProposalsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2AccountsProposalsGetRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2AccountsProposalsGetPathParams;
    queryParams: Adexchangebuyer2AccountsProposalsGetQueryParams;
    security: Adexchangebuyer2AccountsProposalsGetSecurity;
}
export declare class Adexchangebuyer2AccountsProposalsGetResponse extends SpeakeasyBase {
    contentType: string;
    proposal?: shared.Proposal;
    statusCode: number;
}
