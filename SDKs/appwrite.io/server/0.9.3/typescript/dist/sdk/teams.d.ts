import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Teams {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * teamsCreate - Create Team
     *
     * Create a new team. The user who creates the team will automatically be assigned as the owner of the team. The team owner can invite new members, who will be able add new owners and update or delete the team from your project.
    **/
    teamsCreate(req: operations.TeamsCreateRequest, config?: AxiosRequestConfig): Promise<operations.TeamsCreateResponse>;
    /**
     * teamsCreateMembership - Create Team Membership
     *
     * Use this endpoint to invite a new member to join your team. If initiated from Client SDK, an email with a link to join the team will be sent to the new member's email address if the member doesn't exist in the project it will be created automatically. If initiated from server side SDKs, new member will automatically be added to the team.
     *
     * Use the 'URL' parameter to redirect the user from the invitation email back to your app. When the user is redirected, use the [Update Team Membership Status](/docs/client/teams#teamsUpdateMembershipStatus) endpoint to allow the user to accept the invitation to the team.  While calling from side SDKs the redirect url can be empty string.
     *
     * Please note that in order to avoid a [Redirect Attacks](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md) the only valid redirect URL's are the once from domains you have set when added your platforms in the console interface.
    **/
    teamsCreateMembership(req: operations.TeamsCreateMembershipRequest, config?: AxiosRequestConfig): Promise<operations.TeamsCreateMembershipResponse>;
    /**
     * teamsDelete - Delete Team
     *
     * Delete a team by its unique ID. Only team owners have write access for this resource.
    **/
    teamsDelete(req: operations.TeamsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.TeamsDeleteResponse>;
    /**
     * teamsDeleteMembership - Delete Team Membership
     *
     * This endpoint allows a user to leave a team or for a team owner to delete the membership of any other team member. You can also use this endpoint to delete a user membership even if it is not accepted.
    **/
    teamsDeleteMembership(req: operations.TeamsDeleteMembershipRequest, config?: AxiosRequestConfig): Promise<operations.TeamsDeleteMembershipResponse>;
    /**
     * teamsGet - Get Team
     *
     * Get a team by its unique ID. All team members have read access for this resource.
    **/
    teamsGet(req: operations.TeamsGetRequest, config?: AxiosRequestConfig): Promise<operations.TeamsGetResponse>;
    /**
     * teamsGetMemberships - Get Team Memberships
     *
     * Get a team members by the team unique ID. All team members have read access for this list of resources.
    **/
    teamsGetMemberships(req: operations.TeamsGetMembershipsRequest, config?: AxiosRequestConfig): Promise<operations.TeamsGetMembershipsResponse>;
    /**
     * teamsList - List Teams
     *
     * Get a list of all the current user teams. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's teams. [Learn more about different API modes](/docs/admin).
    **/
    teamsList(req: operations.TeamsListRequest, config?: AxiosRequestConfig): Promise<operations.TeamsListResponse>;
    /**
     * teamsUpdate - Update Team
     *
     * Update a team by its unique ID. Only team owners have write access for this resource.
    **/
    teamsUpdate(req: operations.TeamsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TeamsUpdateResponse>;
    /**
     * teamsUpdateMembershipRoles - Update Membership Roles
    **/
    teamsUpdateMembershipRoles(req: operations.TeamsUpdateMembershipRolesRequest, config?: AxiosRequestConfig): Promise<operations.TeamsUpdateMembershipRolesResponse>;
    /**
     * teamsUpdateMembershipStatus - Update Team Membership Status
     *
     * Use this endpoint to allow a user to accept an invitation to join a team after being redirected back to your app from the invitation email recieved by the user.
    **/
    teamsUpdateMembershipStatus(req: operations.TeamsUpdateMembershipStatusRequest, config?: AxiosRequestConfig): Promise<operations.TeamsUpdateMembershipStatusResponse>;
}
