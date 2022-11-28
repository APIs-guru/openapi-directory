import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdexchangebuyerProposalsSetupcompletePathParams extends SpeakeasyBase {
    proposalId: string;
}
export declare class AdexchangebuyerProposalsSetupcompleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdexchangebuyerProposalsSetupcompleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdexchangebuyerProposalsSetupcompleteRequest extends SpeakeasyBase {
    pathParams: AdexchangebuyerProposalsSetupcompletePathParams;
    queryParams: AdexchangebuyerProposalsSetupcompleteQueryParams;
    security: AdexchangebuyerProposalsSetupcompleteSecurity;
}
export declare class AdexchangebuyerProposalsSetupcompleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
