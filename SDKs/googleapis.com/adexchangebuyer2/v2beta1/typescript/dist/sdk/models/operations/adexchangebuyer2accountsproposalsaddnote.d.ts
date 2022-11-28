import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2AccountsProposalsAddNotePathParams extends SpeakeasyBase {
    accountId: string;
    proposalId: string;
}
export declare class Adexchangebuyer2AccountsProposalsAddNoteQueryParams extends SpeakeasyBase {
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
export declare class Adexchangebuyer2AccountsProposalsAddNoteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2AccountsProposalsAddNoteRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2AccountsProposalsAddNotePathParams;
    queryParams: Adexchangebuyer2AccountsProposalsAddNoteQueryParams;
    request?: shared.AddNoteRequestInput;
    security: Adexchangebuyer2AccountsProposalsAddNoteSecurity;
}
export declare class Adexchangebuyer2AccountsProposalsAddNoteResponse extends SpeakeasyBase {
    contentType: string;
    note?: shared.Note;
    statusCode: number;
}
