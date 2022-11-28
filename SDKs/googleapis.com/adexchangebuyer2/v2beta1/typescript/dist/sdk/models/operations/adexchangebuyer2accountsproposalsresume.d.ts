import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2AccountsProposalsResumePathParams extends SpeakeasyBase {
    accountId: string;
    proposalId: string;
}
export declare class Adexchangebuyer2AccountsProposalsResumeQueryParams extends SpeakeasyBase {
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
export declare class Adexchangebuyer2AccountsProposalsResumeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2AccountsProposalsResumeRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2AccountsProposalsResumePathParams;
    queryParams: Adexchangebuyer2AccountsProposalsResumeQueryParams;
    request?: Map<string, any>;
    security: Adexchangebuyer2AccountsProposalsResumeSecurity;
}
export declare class Adexchangebuyer2AccountsProposalsResumeResponse extends SpeakeasyBase {
    contentType: string;
    proposal?: shared.Proposal;
    statusCode: number;
}
