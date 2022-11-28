import { SpeakeasyBase } from "../../../internal/utils";
export declare class TeamsRemoveMembershipForUserInOrgPathParams extends SpeakeasyBase {
    org: string;
    teamSlug: string;
    username: string;
}
export declare class TeamsRemoveMembershipForUserInOrgRequest extends SpeakeasyBase {
    pathParams: TeamsRemoveMembershipForUserInOrgPathParams;
}
export declare class TeamsRemoveMembershipForUserInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
