import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * projectsAddCollaborator - Add project collaborator
     *
     * Adds a collaborator to an organization project and sets their permission level. You must be an organization owner or a project `admin` to add a collaborator.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/projects#add-project-collaborator - API method documentation
    **/
    projectsAddCollaborator(req: operations.ProjectsAddCollaboratorRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsAddCollaboratorResponse>;
    /**
     * projectsCreateCard - Create a project card
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/projects#create-a-project-card - API method documentation
    **/
    projectsCreateCard(req: operations.ProjectsCreateCardRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsCreateCardResponse>;
    /**
     * projectsCreateColumn - Create a project column
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/projects#create-a-project-column - API method documentation
    **/
    projectsCreateColumn(req: operations.ProjectsCreateColumnRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsCreateColumnResponse>;
    /**
     * projectsCreateForAuthenticatedUser - Create a user project
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/projects#create-a-user-project - API method documentation
    **/
    projectsCreateForAuthenticatedUser(req: operations.ProjectsCreateForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsCreateForAuthenticatedUserResponse>;
    /**
     * projectsCreateForOrg - Create an organization project
     *
     * Creates an organization project board. Returns a `404 Not Found` status if projects are disabled in the organization. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/projects#create-an-organization-project - API method documentation
    **/
    projectsCreateForOrg(req: operations.ProjectsCreateForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsCreateForOrgResponse>;
    /**
     * projectsCreateForRepo - Create a repository project
     *
     * Creates a repository project board. Returns a `404 Not Found` status if projects are disabled in the repository. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/projects#create-a-repository-project - API method documentation
    **/
    projectsCreateForRepo(req: operations.ProjectsCreateForRepoRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsCreateForRepoResponse>;
    /**
     * projectsDelete - Delete a project
     *
     * Deletes a project board. Returns a `404 Not Found` status if projects are disabled.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/projects#delete-a-project - API method documentation
    **/
    projectsDelete(req: operations.ProjectsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsDeleteResponse>;
    /**
     * projectsDeleteCard - Delete a project card
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/projects#delete-a-project-card - API method documentation
    **/
    projectsDeleteCard(req: operations.ProjectsDeleteCardRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsDeleteCardResponse>;
    /**
     * projectsDeleteColumn - Delete a project column
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/projects#delete-a-project-column - API method documentation
    **/
    projectsDeleteColumn(req: operations.ProjectsDeleteColumnRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsDeleteColumnResponse>;
    /**
     * projectsGet - Get a project
     *
     * Gets a project by its `id`. Returns a `404 Not Found` status if projects are disabled. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/projects#get-a-project - API method documentation
    **/
    projectsGet(req: operations.ProjectsGetRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsGetResponse>;
    /**
     * projectsGetCard - Get a project card
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/projects#get-a-project-card - API method documentation
    **/
    projectsGetCard(req: operations.ProjectsGetCardRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsGetCardResponse>;
    /**
     * projectsGetColumn - Get a project column
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/projects#get-a-project-column - API method documentation
    **/
    projectsGetColumn(req: operations.ProjectsGetColumnRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsGetColumnResponse>;
    /**
     * projectsGetPermissionForUser - Get project permission for a user
     *
     * Returns the collaborator's permission level for an organization project. Possible values for the `permission` key: `admin`, `write`, `read`, `none`. You must be an organization owner or a project `admin` to review a user's permission level.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/projects#get-project-permission-for-a-user - API method documentation
    **/
    projectsGetPermissionForUser(req: operations.ProjectsGetPermissionForUserRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsGetPermissionForUserResponse>;
    /**
     * projectsListCards - List project cards
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/projects#list-project-cards - API method documentation
    **/
    projectsListCards(req: operations.ProjectsListCardsRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsListCardsResponse>;
    /**
     * projectsListCollaborators - List project collaborators
     *
     * Lists the collaborators for an organization project. For a project, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners. You must be an organization owner or a project `admin` to list collaborators.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/projects#list-project-collaborators - API method documentation
    **/
    projectsListCollaborators(req: operations.ProjectsListCollaboratorsRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsListCollaboratorsResponse>;
    /**
     * projectsListColumns - List project columns
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/projects#list-project-columns - API method documentation
    **/
    projectsListColumns(req: operations.ProjectsListColumnsRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsListColumnsResponse>;
    /**
     * projectsListForOrg - List organization projects
     *
     * Lists the projects in an organization. Returns a `404 Not Found` status if projects are disabled in the organization. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/projects#list-organization-projects - API method documentation
    **/
    projectsListForOrg(req: operations.ProjectsListForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsListForOrgResponse>;
    /**
     * projectsListForRepo - List repository projects
     *
     * Lists the projects in a repository. Returns a `404 Not Found` status if projects are disabled in the repository. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/projects#list-repository-projects - API method documentation
    **/
    projectsListForRepo(req: operations.ProjectsListForRepoRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsListForRepoResponse>;
    /**
     * projectsListForUser - List user projects
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/projects#list-user-projects - API method documentation
    **/
    projectsListForUser(req: operations.ProjectsListForUserRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsListForUserResponse>;
    /**
     * projectsMoveCard - Move a project card
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/projects#move-a-project-card - API method documentation
    **/
    projectsMoveCard(req: operations.ProjectsMoveCardRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsMoveCardResponse>;
    /**
     * projectsMoveColumn - Move a project column
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/projects#move-a-project-column - API method documentation
    **/
    projectsMoveColumn(req: operations.ProjectsMoveColumnRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsMoveColumnResponse>;
    /**
     * projectsRemoveCollaborator - Remove user as a collaborator
     *
     * Removes a collaborator from an organization project. You must be an organization owner or a project `admin` to remove a collaborator.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/projects#remove-project-collaborator - API method documentation
    **/
    projectsRemoveCollaborator(req: operations.ProjectsRemoveCollaboratorRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsRemoveCollaboratorResponse>;
    /**
     * projectsUpdate - Update a project
     *
     * Updates a project board's information. Returns a `404 Not Found` status if projects are disabled. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/projects#update-a-project - API method documentation
    **/
    projectsUpdate(req: operations.ProjectsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsUpdateResponse>;
    /**
     * projectsUpdateCard - Update an existing project card
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/projects#update-a-project-card - API method documentation
    **/
    projectsUpdateCard(req: operations.ProjectsUpdateCardRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsUpdateCardResponse>;
    /**
     * projectsUpdateColumn - Update an existing project column
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/projects#update-a-project-column - API method documentation
    **/
    projectsUpdateColumn(req: operations.ProjectsUpdateColumnRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsUpdateColumnResponse>;
}
