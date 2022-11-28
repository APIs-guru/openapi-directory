import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TeamMemberships {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getTeamMembership - Get a team membership
     *
     * Returns the complete team membership record for a single team membership.
    **/
    getTeamMembership(req: operations.GetTeamMembershipRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamMembershipResponse>;
    /**
     * getTeamMemberships - Get team memberships
     *
     * Returns compact team membership records.
    **/
    getTeamMemberships(req: operations.GetTeamMembershipsRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamMembershipsResponse>;
    /**
     * getTeamMembershipsForTeam - Get memberships from a team
     *
     * Returns the compact team memberships for the team.
    **/
    getTeamMembershipsForTeam(req: operations.GetTeamMembershipsForTeamRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamMembershipsForTeamResponse>;
    /**
     * getTeamMembershipsForUser - Get memberships from a user
     *
     * Returns the compact team membership records for the user.
    **/
    getTeamMembershipsForUser(req: operations.GetTeamMembershipsForUserRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamMembershipsForUserResponse>;
}
