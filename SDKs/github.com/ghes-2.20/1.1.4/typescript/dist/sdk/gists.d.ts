import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Gists {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * gistsCheckIsStarred - Check if a gist is starred
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/gists#check-if-a-gist-is-starred - API method documentation
    **/
    gistsCheckIsStarred(req: operations.GistsCheckIsStarredRequest, config?: AxiosRequestConfig): Promise<operations.GistsCheckIsStarredResponse>;
    /**
     * gistsCreate - Create a gist
     *
     * Allows you to add a new gist with one or more files.
     *
     * **Note:** Don't name your files "gistfile" with a numerical suffix. This is the format of the automatic naming scheme that Gist uses internally.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/gists#create-a-gist - API method documentation
    **/
    gistsCreate(req: operations.GistsCreateRequest, config?: AxiosRequestConfig): Promise<operations.GistsCreateResponse>;
    /**
     * gistsCreateComment - Create a gist comment
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/gists#create-a-gist-comment - API method documentation
    **/
    gistsCreateComment(req: operations.GistsCreateCommentRequest, config?: AxiosRequestConfig): Promise<operations.GistsCreateCommentResponse>;
    /**
     * gistsDelete - Delete a gist
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/gists#delete-a-gist - API method documentation
    **/
    gistsDelete(req: operations.GistsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.GistsDeleteResponse>;
    /**
     * gistsDeleteComment - Delete a gist comment
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/gists#delete-a-gist-comment - API method documentation
    **/
    gistsDeleteComment(req: operations.GistsDeleteCommentRequest, config?: AxiosRequestConfig): Promise<operations.GistsDeleteCommentResponse>;
    /**
     * gistsFork - Fork a gist
     *
     * **Note**: This was previously `/gists/:gist_id/fork`.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/gists#fork-a-gist - API method documentation
    **/
    gistsFork(req: operations.GistsForkRequest, config?: AxiosRequestConfig): Promise<operations.GistsForkResponse>;
    /**
     * gistsGet - Get a gist
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/gists#get-a-gist - API method documentation
    **/
    gistsGet(req: operations.GistsGetRequest, config?: AxiosRequestConfig): Promise<operations.GistsGetResponse>;
    /**
     * gistsGetComment - Get a gist comment
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/gists#get-a-gist-comment - API method documentation
    **/
    gistsGetComment(req: operations.GistsGetCommentRequest, config?: AxiosRequestConfig): Promise<operations.GistsGetCommentResponse>;
    /**
     * gistsGetRevision - Get a gist revision
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/gists#get-a-gist-revision - API method documentation
    **/
    gistsGetRevision(req: operations.GistsGetRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GistsGetRevisionResponse>;
    /**
     * gistsList - List gists for the authenticated user
     *
     * Lists the authenticated user's gists or if called anonymously, this endpoint returns all public gists:
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/gists#list-gists-for-the-authenticated-user - API method documentation
    **/
    gistsList(req: operations.GistsListRequest, config?: AxiosRequestConfig): Promise<operations.GistsListResponse>;
    /**
     * gistsListComments - List gist comments
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/gists#list-gist-comments - API method documentation
    **/
    gistsListComments(req: operations.GistsListCommentsRequest, config?: AxiosRequestConfig): Promise<operations.GistsListCommentsResponse>;
    /**
     * gistsListCommits - List gist commits
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/gists#list-gist-commits - API method documentation
    **/
    gistsListCommits(req: operations.GistsListCommitsRequest, config?: AxiosRequestConfig): Promise<operations.GistsListCommitsResponse>;
    /**
     * gistsListForUser - List gists for a user
     *
     * Lists public gists for the specified user:
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/gists#list-gists-for-a-user - API method documentation
    **/
    gistsListForUser(req: operations.GistsListForUserRequest, config?: AxiosRequestConfig): Promise<operations.GistsListForUserResponse>;
    /**
     * gistsListForks - List gist forks
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/gists#list-gist-forks - API method documentation
    **/
    gistsListForks(req: operations.GistsListForksRequest, config?: AxiosRequestConfig): Promise<operations.GistsListForksResponse>;
    /**
     * gistsListPublic - List public gists
     *
     * List public gists sorted by most recently updated to least recently updated.
     *
     * Note: With [pagination](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#pagination), you can fetch up to 3000 gists. For example, you can fetch 100 pages with 30 gists per page or 30 pages with 100 gists per page.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/gists#list-public-gists - API method documentation
    **/
    gistsListPublic(req: operations.GistsListPublicRequest, config?: AxiosRequestConfig): Promise<operations.GistsListPublicResponse>;
    /**
     * gistsListStarred - List starred gists
     *
     * List the authenticated user's starred gists:
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/gists#list-starred-gists - API method documentation
    **/
    gistsListStarred(req: operations.GistsListStarredRequest, config?: AxiosRequestConfig): Promise<operations.GistsListStarredResponse>;
    /**
     * gistsStar - Star a gist
     *
     * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#http-verbs)."
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/gists#star-a-gist - API method documentation
    **/
    gistsStar(req: operations.GistsStarRequest, config?: AxiosRequestConfig): Promise<operations.GistsStarResponse>;
    /**
     * gistsUnstar - Unstar a gist
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/gists#unstar-a-gist - API method documentation
    **/
    gistsUnstar(req: operations.GistsUnstarRequest, config?: AxiosRequestConfig): Promise<operations.GistsUnstarResponse>;
    /**
     * gistsUpdate - Update a gist
     *
     * Allows you to update or delete a gist file and rename gist files. Files from the previous version of the gist that aren't explicitly changed during an edit are unchanged.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/gists/#update-a-gist - API method documentation
    **/
    gistsUpdate(req: operations.GistsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.GistsUpdateResponse>;
    /**
     * gistsUpdateComment - Update a gist comment
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/gists#update-a-gist-comment - API method documentation
    **/
    gistsUpdateComment(req: operations.GistsUpdateCommentRequest, config?: AxiosRequestConfig): Promise<operations.GistsUpdateCommentResponse>;
}
