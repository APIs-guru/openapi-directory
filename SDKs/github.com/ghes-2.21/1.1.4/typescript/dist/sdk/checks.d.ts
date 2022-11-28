import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Checks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * checksCreate - Create a check run
     *
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
     *
     * Creates a new check run for a specific commit in a repository. Your GitHub App must have the `checks:write` permission to create check runs.
     *
     * In a check suite, GitHub limits the number of check runs with the same name to 1000. Once these check runs exceed 1000, GitHub will start to automatically delete older check runs.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/checks#create-a-check-run - API method documentation
    **/
    checksCreate(req: operations.ChecksCreateRequest, config?: AxiosRequestConfig): Promise<operations.ChecksCreateResponse>;
    /**
     * checksCreateSuite - Create a check suite
     *
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.
     *
     * By default, check suites are automatically created when you create a [check run](https://docs.github.com/enterprise-server@2.21/rest/reference/checks#check-runs). You only need to use this endpoint for manually creating check suites when you've disabled automatic creation using "[Update repository preferences for check suites](https://docs.github.com/enterprise-server@2.21/rest/reference/checks#update-repository-preferences-for-check-suites)". Your GitHub App must have the `checks:write` permission to create check suites.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/checks#create-a-check-suite - API method documentation
    **/
    checksCreateSuite(req: operations.ChecksCreateSuiteRequest, config?: AxiosRequestConfig): Promise<operations.ChecksCreateSuiteResponse>;
    /**
     * checksGet - Get a check run
     *
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
     *
     * Gets a single check run using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/checks#get-a-check-run - API method documentation
    **/
    checksGet(req: operations.ChecksGetRequest, config?: AxiosRequestConfig): Promise<operations.ChecksGetResponse>;
    /**
     * checksGetSuite - Get a check suite
     *
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.
     *
     * Gets a single check suite using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check suites. OAuth Apps and authenticated users must have the `repo` scope to get check suites in a private repository.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/checks#get-a-check-suite - API method documentation
    **/
    checksGetSuite(req: operations.ChecksGetSuiteRequest, config?: AxiosRequestConfig): Promise<operations.ChecksGetSuiteResponse>;
    /**
     * checksListAnnotations - List check run annotations
     *
     * Lists annotations for a check run using the annotation `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get annotations for a check run. OAuth Apps and authenticated users must have the `repo` scope to get annotations for a check run in a private repository.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/checks#list-check-run-annotations - API method documentation
    **/
    checksListAnnotations(req: operations.ChecksListAnnotationsRequest, config?: AxiosRequestConfig): Promise<operations.ChecksListAnnotationsResponse>;
    /**
     * checksListForRef - List check runs for a Git reference
     *
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
     *
     * Lists check runs for a commit ref. The `ref` can be a SHA, branch name, or a tag name. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/checks#list-check-runs-for-a-git-reference - API method documentation
    **/
    checksListForRef(req: operations.ChecksListForRefRequest, config?: AxiosRequestConfig): Promise<operations.ChecksListForRefResponse>;
    /**
     * checksListForSuite - List check runs in a check suite
     *
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
     *
     * Lists check runs for a check suite using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/checks#list-check-runs-in-a-check-suite - API method documentation
    **/
    checksListForSuite(req: operations.ChecksListForSuiteRequest, config?: AxiosRequestConfig): Promise<operations.ChecksListForSuiteResponse>;
    /**
     * checksListSuitesForRef - List check suites for a Git reference
     *
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.
     *
     * Lists check suites for a commit `ref`. The `ref` can be a SHA, branch name, or a tag name. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to list check suites. OAuth Apps and authenticated users must have the `repo` scope to get check suites in a private repository.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/checks#list-check-suites-for-a-git-reference - API method documentation
    **/
    checksListSuitesForRef(req: operations.ChecksListSuitesForRefRequest, config?: AxiosRequestConfig): Promise<operations.ChecksListSuitesForRefResponse>;
    /**
     * checksRerequestSuite - Rerequest a check suite
     *
     * Triggers GitHub to rerequest an existing check suite, without pushing new code to a repository. This endpoint will trigger the [`check_suite` webhook](https://docs.github.com/enterprise-server@2.21/webhooks/event-payloads/#check_suite) event with the action `rerequested`. When a check suite is `rerequested`, its `status` is reset to `queued` and the `conclusion` is cleared.
     *
     * To rerequest a check suite, your GitHub App must have the `checks:read` permission on a private repository or pull access to a public repository.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/checks#rerequest-a-check-suite - API method documentation
    **/
    checksRerequestSuite(req: operations.ChecksRerequestSuiteRequest, config?: AxiosRequestConfig): Promise<operations.ChecksRerequestSuiteResponse>;
    /**
     * checksSetSuitesPreferences - Update repository preferences for check suites
     *
     * Changes the default automatic flow when creating check suites. By default, a check suite is automatically created each time code is pushed to a repository. When you disable the automatic creation of check suites, you can manually [Create a check suite](https://docs.github.com/enterprise-server@2.21/rest/reference/checks#create-a-check-suite). You must have admin permissions in the repository to set preferences for check suites.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/checks#update-repository-preferences-for-check-suites - API method documentation
    **/
    checksSetSuitesPreferences(req: operations.ChecksSetSuitesPreferencesRequest, config?: AxiosRequestConfig): Promise<operations.ChecksSetSuitesPreferencesResponse>;
    /**
     * checksUpdate - Update a check run
     *
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
     *
     * Updates a check run for a specific commit in a repository. Your GitHub App must have the `checks:write` permission to edit check runs.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/checks#update-a-check-run - API method documentation
    **/
    checksUpdate(req: operations.ChecksUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ChecksUpdateResponse>;
}
