import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2AccountsProposalsCompleteSetupPathParams extends SpeakeasyBase {
    accountId: string;
    proposalId: string;
}
export declare class Adexchangebuyer2AccountsProposalsCompleteSetupQueryParams extends SpeakeasyBase {
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
export declare class Adexchangebuyer2AccountsProposalsCompleteSetupSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2AccountsProposalsCompleteSetupRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2AccountsProposalsCompleteSetupPathParams;
    queryParams: Adexchangebuyer2AccountsProposalsCompleteSetupQueryParams;
    request?: Map<string, any>;
    security: Adexchangebuyer2AccountsProposalsCompleteSetupSecurity;
}
export declare class Adexchangebuyer2AccountsProposalsCompleteSetupResponse extends SpeakeasyBase {
    contentType: string;
    proposal?: shared.Proposal;
    statusCode: number;
}
