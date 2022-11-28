import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsGetMembershipForUserLegacyPathParams extends SpeakeasyBase {
    teamId: number;
    username: string;
}
export declare class TeamsGetMembershipForUserLegacyRequest extends SpeakeasyBase {
    pathParams: TeamsGetMembershipForUserLegacyPathParams;
}
export declare class TeamsGetMembershipForUserLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    teamMembership?: shared.TeamMembership;
}
