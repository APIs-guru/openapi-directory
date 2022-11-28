import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://circleci.com/api/v1"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * deleteProjectUsernameProjectBuildCache - Clears the cache for a project.
     *
    **/
    deleteProjectUsernameProjectBuildCache(req: operations.DeleteProjectUsernameProjectBuildCacheRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProjectUsernameProjectBuildCacheResponse>;
    /**
     * deleteProjectUsernameProjectCheckoutKeyFingerprint - Delete a checkout key.
     *
    **/
    deleteProjectUsernameProjectCheckoutKeyFingerprint(req: operations.DeleteProjectUsernameProjectCheckoutKeyFingerprintRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProjectUsernameProjectCheckoutKeyFingerprintResponse>;
    /**
     * deleteProjectUsernameProjectEnvvarName - Deletes the environment variable named ':name'
     *
    **/
    deleteProjectUsernameProjectEnvvarName(req: operations.DeleteProjectUsernameProjectEnvvarNameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProjectUsernameProjectEnvvarNameResponse>;
    /**
     * getMe - Provides information about the signed in user.
     *
    **/
    getMe(config?: AxiosRequestConfig): Promise<operations.GetMeResponse>;
    /**
     * getProjectUsernameProject - Build summary for each of the last 30 builds for a single git repo.
     *
    **/
    getProjectUsernameProject(req: operations.GetProjectUsernameProjectRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectUsernameProjectResponse>;
    /**
     * getProjectUsernameProjectBuildNum - Full details for a single build. The response includes all of the fields from the build summary.
     * This is also the payload for the [notification webhooks](/docs/configuration/#notify), in which case this object is the value to a key named 'payload'.
     *
    **/
    getProjectUsernameProjectBuildNum(req: operations.GetProjectUsernameProjectBuildNumRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectUsernameProjectBuildNumResponse>;
    /**
     * getProjectUsernameProjectBuildNumArtifacts - List the artifacts produced by a given build.
     *
    **/
    getProjectUsernameProjectBuildNumArtifacts(req: operations.GetProjectUsernameProjectBuildNumArtifactsRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectUsernameProjectBuildNumArtifactsResponse>;
    /**
     * getProjectUsernameProjectBuildNumTests - Provides test metadata for a build
     * Note: [Learn how to set up your builds to collect test metadata](https://circleci.com/docs/test-metadata/)
     *
    **/
    getProjectUsernameProjectBuildNumTests(req: operations.GetProjectUsernameProjectBuildNumTestsRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectUsernameProjectBuildNumTestsResponse>;
    /**
     * getProjectUsernameProjectCheckoutKey - Lists checkout keys.
     *
    **/
    getProjectUsernameProjectCheckoutKey(req: operations.GetProjectUsernameProjectCheckoutKeyRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectUsernameProjectCheckoutKeyResponse>;
    /**
     * getProjectUsernameProjectCheckoutKeyFingerprint - Get a checkout key.
     *
    **/
    getProjectUsernameProjectCheckoutKeyFingerprint(req: operations.GetProjectUsernameProjectCheckoutKeyFingerprintRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectUsernameProjectCheckoutKeyFingerprintResponse>;
    /**
     * getProjectUsernameProjectEnvvar - Lists the environment variables for :project
     *
    **/
    getProjectUsernameProjectEnvvar(req: operations.GetProjectUsernameProjectEnvvarRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectUsernameProjectEnvvarResponse>;
    /**
     * getProjectUsernameProjectEnvvarName - Gets the hidden value of environment variable :name
     *
    **/
    getProjectUsernameProjectEnvvarName(req: operations.GetProjectUsernameProjectEnvvarNameRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectUsernameProjectEnvvarNameResponse>;
    /**
     * getProjects - List of all the projects you're following on CircleCI, with build information organized by branch.
     *
    **/
    getProjects(config?: AxiosRequestConfig): Promise<operations.GetProjectsResponse>;
    /**
     * getRecentBuilds - Build summary for each of the last 30 recent builds, ordered by build_num.
     *
    **/
    getRecentBuilds(req: operations.GetRecentBuildsRequest, config?: AxiosRequestConfig): Promise<operations.GetRecentBuildsResponse>;
    /**
     * postProjectUsernameProject - Triggers a new build, returns a summary of the build.
     *
    **/
    postProjectUsernameProject(req: operations.PostProjectUsernameProjectRequest, config?: AxiosRequestConfig): Promise<operations.PostProjectUsernameProjectResponse>;
    /**
     * postProjectUsernameProjectBuildNumCancel - Cancels the build, returns a summary of the build.
     *
    **/
    postProjectUsernameProjectBuildNumCancel(req: operations.PostProjectUsernameProjectBuildNumCancelRequest, config?: AxiosRequestConfig): Promise<operations.PostProjectUsernameProjectBuildNumCancelResponse>;
    /**
     * postProjectUsernameProjectBuildNumRetry - Retries the build, returns a summary of the new build.
     *
    **/
    postProjectUsernameProjectBuildNumRetry(req: operations.PostProjectUsernameProjectBuildNumRetryRequest, config?: AxiosRequestConfig): Promise<operations.PostProjectUsernameProjectBuildNumRetryResponse>;
    /**
     * postProjectUsernameProjectCheckoutKey - Creates a new checkout key.
     * Only usable with a user API token.
     *
    **/
    postProjectUsernameProjectCheckoutKey(req: operations.PostProjectUsernameProjectCheckoutKeyRequest, config?: AxiosRequestConfig): Promise<operations.PostProjectUsernameProjectCheckoutKeyResponse>;
    /**
     * postProjectUsernameProjectEnvvar - Creates a new environment variable
     *
    **/
    postProjectUsernameProjectEnvvar(req: operations.PostProjectUsernameProjectEnvvarRequest, config?: AxiosRequestConfig): Promise<operations.PostProjectUsernameProjectEnvvarResponse>;
    /**
     * postProjectUsernameProjectSshKey - Create an ssh key used to access external systems that require SSH key-based authentication
     *
    **/
    postProjectUsernameProjectSshKey(req: operations.PostProjectUsernameProjectSshKeyRequest, config?: AxiosRequestConfig): Promise<operations.PostProjectUsernameProjectSshKeyResponse>;
    /**
     * postProjectUsernameProjectTreeBranch - Triggers a new build, returns a summary of the build.
     * Optional build parameters can be set using an experimental API.
     *
     * Note: For more about build parameters, read about [using parameterized builds](https://circleci.com/docs/parameterized-builds/)
     *
    **/
    postProjectUsernameProjectTreeBranch(req: operations.PostProjectUsernameProjectTreeBranchRequest, config?: AxiosRequestConfig): Promise<operations.PostProjectUsernameProjectTreeBranchResponse>;
    /**
     * postUserHerokuKey - Adds your Heroku API key to CircleCI, takes apikey as form param name.
     *
    **/
    postUserHerokuKey(config?: AxiosRequestConfig): Promise<operations.PostUserHerokuKeyResponse>;
}
export {};
