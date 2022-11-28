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
     * addUserForTeam - Add a user to a team
     *
     * The user making this call must be a member of the team in order to add others. The user being added must exist in the same organization as the team.
    **/
    addUserForTeam(req: operations.AddUserForTeamRequest, config?: AxiosRequestConfig): Promise<operations.AddUserForTeamResponse>;
    /**
     * createTeam - Create a team
     *
     * Creates a team within the current workspace.
    **/
    createTeam(req: operations.CreateTeamRequest, config?: AxiosRequestConfig): Promise<operations.CreateTeamResponse>;
    /**
     * getTeam - Get a team
     *
     * Returns the full record for a single team.
    **/
    getTeam(req: operations.GetTeamRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamResponse>;
    /**
     * getTeamsForOrganization - Get teams in an organization
     *
     * Returns the compact records for all teams in the organization visible to the authorized user.
    **/
    getTeamsForOrganization(req: operations.GetTeamsForOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsForOrganizationResponse>;
    /**
     * getTeamsForUser - Get teams for a user
     *
     * Returns the compact records for all teams to which the given user is assigned.
    **/
    getTeamsForUser(req: operations.GetTeamsForUserRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsForUserResponse>;
    /**
     * removeUserForTeam - Remove a user from a team
     *
     * The user making this call must be a member of the team in order to remove themselves or others.
    **/
    removeUserForTeam(req: operations.RemoveUserForTeamRequest, config?: AxiosRequestConfig): Promise<operations.RemoveUserForTeamResponse>;
}
