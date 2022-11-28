import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthorizedbuyersmarketplaceBuyersProposalsAddNotePathParams extends SpeakeasyBase {
    proposal: string;
}
export declare class AuthorizedbuyersmarketplaceBuyersProposalsAddNoteQueryParams extends SpeakeasyBase {
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
export declare class AuthorizedbuyersmarketplaceBuyersProposalsAddNoteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AuthorizedbuyersmarketplaceBuyersProposalsAddNoteRequest extends SpeakeasyBase {
    pathParams: AuthorizedbuyersmarketplaceBuyersProposalsAddNotePathParams;
    queryParams: AuthorizedbuyersmarketplaceBuyersProposalsAddNoteQueryParams;
    request?: shared.AddNoteRequestInput;
    security: AuthorizedbuyersmarketplaceBuyersProposalsAddNoteSecurity;
}
export declare class AuthorizedbuyersmarketplaceBuyersProposalsAddNoteResponse extends SpeakeasyBase {
    contentType: string;
    proposal?: shared.Proposal;
    statusCode: number;
}
