import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdexchangebuyerProposalsGetPathParams extends SpeakeasyBase {
    proposalId: string;
}
export declare class AdexchangebuyerProposalsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdexchangebuyerProposalsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdexchangebuyerProposalsGetRequest extends SpeakeasyBase {
    pathParams: AdexchangebuyerProposalsGetPathParams;
    queryParams: AdexchangebuyerProposalsGetQueryParams;
    security: AdexchangebuyerProposalsGetSecurity;
}
export declare class AdexchangebuyerProposalsGetResponse extends SpeakeasyBase {
    contentType: string;
    proposal?: shared.Proposal;
    statusCode: number;
}
