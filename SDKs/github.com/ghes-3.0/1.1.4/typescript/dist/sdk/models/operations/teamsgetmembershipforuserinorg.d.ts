import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsGetMembershipForUserInOrgPathParams extends SpeakeasyBase {
    org: string;
    teamSlug: string;
    username: string;
}
export declare class TeamsGetMembershipForUserInOrgRequest extends SpeakeasyBase {
    pathParams: TeamsGetMembershipForUserInOrgPathParams;
}
export declare class TeamsGetMembershipForUserInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamMembership?: shared.TeamMembership;
}
