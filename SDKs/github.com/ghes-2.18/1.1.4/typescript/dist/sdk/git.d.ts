import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Git {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * gitCreateBlob - Create a blob
     *
     * https://docs.github.com/enterprise-server@2.18/rest/reference/git#create-a-blob - API method documentation
    **/
    gitCreateBlob(req: operations.GitCreateBlobRequest, config?: AxiosRequestConfig): Promise<operations.GitCreateBlobResponse>;
    /**
     * gitCreateCommit - Create a commit
     *
     * Creates a new Git [commit object](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects).
     *
     * **Signature verification object**
     *
     * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
     *
     * | Name | Type | Description |
     * | ---- | ---- | ----------- |
     * | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
     * | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
     * | `signature` | `string` | The signature that was extracted from the commit. |
     * | `payload` | `string` | The value that was signed. |
     *
     * These are the possible values for `reason` in the `verification` object:
     *
     * | Value | Description |
     * | ----- | ----------- |
     * | `expired_key` | The key that made the signature is expired. |
     * | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
     * | `gpgverify_error` | There was an error communicating with the signature verification service. |
     * | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
     * | `unsigned` | The object does not include a signature. |
     * | `unknown_signature_type` | A non-PGP signature was found in the commit. |
     * | `no_user` | No user was associated with the `committer` email address in the commit. |
     * | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
     * | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
     * | `unknown_key` | The key that made the signature has not been registered with any user's account. |
     * | `malformed_signature` | There was an error parsing the signature. |
     * | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
     * | `valid` | None of the above errors applied, so the signature is considered to be verified. |
     *
     * https://docs.github.com/enterprise-server@2.18/rest/reference/git#create-a-commit - API method documentation
    **/
    gitCreateCommit(req: operations.GitCreateCommitRequest, config?: AxiosRequestConfig): Promise<operations.GitCreateCommitResponse>;
    /**
     * gitCreateRef - Create a reference
     *
     * Creates a reference for your repository. You are unable to create new references for empty repositories, even if the commit SHA-1 hash used exists. Empty repositories are repositories without branches.
     *
     * https://docs.github.com/enterprise-server@2.18/rest/reference/git#create-a-reference - API method documentation
    **/
    gitCreateRef(req: operations.GitCreateRefRequest, config?: AxiosRequestConfig): Promise<operations.GitCreateRefResponse>;
    /**
     * gitCreateTag - Create a tag object
     *
     * Note that creating a tag object does not create the reference that makes a tag in Git. If you want to create an annotated tag in Git, you have to do this call to create the tag object, and then [create](https://docs.github.com/enterprise-server@2.18/rest/reference/git#create-a-reference) the `refs/tags/[tag]` reference. If you want to create a lightweight tag, you only have to [create](https://docs.github.com/enterprise-server@2.18/rest/reference/git#create-a-reference) the tag reference - this call would be unnecessary.
     *
     * **Signature verification object**
     *
     * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
     *
     * | Name | Type | Description |
     * | ---- | ---- | ----------- |
     * | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
     * | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
     * | `signature` | `string` | The signature that was extracted from the commit. |
     * | `payload` | `string` | The value that was signed. |
     *
     * These are the possible values for `reason` in the `verification` object:
     *
     * | Value | Description |
     * | ----- | ----------- |
     * | `expired_key` | The key that made the signature is expired. |
     * | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
     * | `gpgverify_error` | There was an error communicating with the signature verification service. |
     * | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
     * | `unsigned` | The object does not include a signature. |
     * | `unknown_signature_type` | A non-PGP signature was found in the commit. |
     * | `no_user` | No user was associated with the `committer` email address in the commit. |
     * | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
     * | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
     * | `unknown_key` | The key that made the signature has not been registered with any user's account. |
     * | `malformed_signature` | There was an error parsing the signature. |
     * | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
     * | `valid` | None of the above errors applied, so the signature is considered to be verified. |
     *
     * https://docs.github.com/enterprise-server@2.18/rest/reference/git#create-a-tag-object - API method documentation
    **/
    gitCreateTag(req: operations.GitCreateTagRequest, config?: AxiosRequestConfig): Promise<operations.GitCreateTagResponse>;
    /**
     * gitCreateTree - Create a tree
     *
     * The tree creation API accepts nested entries. If you specify both a tree and a nested path modifying that tree, this endpoint will overwrite the contents of the tree with the new path contents, and create a new tree structure.
     *
     * If you use this endpoint to add, delete, or modify the file contents in a tree, you will need to commit the tree and then update a branch to point to the commit. For more information see "[Create a commit](https://docs.github.com/enterprise-server@2.18/rest/reference/git#create-a-commit)" and "[Update a reference](https://docs.github.com/enterprise-server@2.18/rest/reference/git#update-a-reference)."
     *
     * https://docs.github.com/enterprise-server@2.18/rest/reference/git#create-a-tree - API method documentation
    **/
    gitCreateTree(req: operations.GitCreateTreeRequest, config?: AxiosRequestConfig): Promise<operations.GitCreateTreeResponse>;
    /**
     * gitDeleteRef - Delete a reference
     *
     * https://docs.github.com/enterprise-server@2.18/rest/reference/git#delete-a-reference - API method documentation
    **/
    gitDeleteRef(req: operations.GitDeleteRefRequest, config?: AxiosRequestConfig): Promise<operations.GitDeleteRefResponse>;
    /**
     * gitGetAllRefs - Get all references
     *
     * Returns an array of all the references from your Git database, including notes and stashes if they exist on the server. Anything in the namespace is returned, not just `heads` and `tags`. If there are no references to list, a `404` is returned.
     *
     * **Note:** You need to explicitly [request a pull request](https://docs.github.com/enterprise-server@2.18/rest/reference/pulls#get-a-single-pull-request) to trigger a merge commit creation. For more information, see "[Checking mergeability of pull requests](https://docs.github.com/enterprise-server@2.18/rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests)".
     *
     * ```
     * GET /repos/octocat/Hello-World/git/refs
     * ```
     *
     * You can also request a sub-namespace. For example, to get all the tag references, you can call:
     *
     * ```
     * GET /repos/octocat/Hello-World/git/refs/tags
     * ```
     *
     * https://docs.github.com/enterprise-server@2.18/enterprise/2.18/rest/reference/git#get-a-reference - API method documentation
    **/
    gitGetAllRefs(req: operations.GitGetAllRefsRequest, config?: AxiosRequestConfig): Promise<operations.GitGetAllRefsResponse>;
    /**
     * gitGetBlob - Get a blob
     *
     * The `content` in the response will always be Base64 encoded.
     *
     * _Note_: This API supports blobs up to 100 megabytes in size.
     *
     * https://docs.github.com/enterprise-server@2.18/rest/reference/git#get-a-blob - API method documentation
    **/
    gitGetBlob(req: operations.GitGetBlobRequest, config?: AxiosRequestConfig): Promise<operations.GitGetBlobResponse>;
    /**
     * gitGetCommit - Get a commit
     *
     * Gets a Git [commit object](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects).
     *
     * **Signature verification object**
     *
     * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
     *
     * | Name | Type | Description |
     * | ---- | ---- | ----------- |
     * | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
     * | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
     * | `signature` | `string` | The signature that was extracted from the commit. |
     * | `payload` | `string` | The value that was signed. |
     *
     * These are the possible values for `reason` in the `verification` object:
     *
     * | Value | Description |
     * | ----- | ----------- |
     * | `expired_key` | The key that made the signature is expired. |
     * | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
     * | `gpgverify_error` | There was an error communicating with the signature verification service. |
     * | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
     * | `unsigned` | The object does not include a signature. |
     * | `unknown_signature_type` | A non-PGP signature was found in the commit. |
     * | `no_user` | No user was associated with the `committer` email address in the commit. |
     * | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
     * | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
     * | `unknown_key` | The key that made the signature has not been registered with any user's account. |
     * | `malformed_signature` | There was an error parsing the signature. |
     * | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
     * | `valid` | None of the above errors applied, so the signature is considered to be verified. |
     *
     * https://docs.github.com/enterprise-server@2.18/rest/reference/git#get-a-commit - API method documentation
    **/
    gitGetCommit(req: operations.GitGetCommitRequest, config?: AxiosRequestConfig): Promise<operations.GitGetCommitResponse>;
    /**
     * gitGetTag - Get a tag
     *
     * **Signature verification object**
     *
     * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
     *
     * | Name | Type | Description |
     * | ---- | ---- | ----------- |
     * | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
     * | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
     * | `signature` | `string` | The signature that was extracted from the commit. |
     * | `payload` | `string` | The value that was signed. |
     *
     * These are the possible values for `reason` in the `verification` object:
     *
     * | Value | Description |
     * | ----- | ----------- |
     * | `expired_key` | The key that made the signature is expired. |
     * | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
     * | `gpgverify_error` | There was an error communicating with the signature verification service. |
     * | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
     * | `unsigned` | The object does not include a signature. |
     * | `unknown_signature_type` | A non-PGP signature was found in the commit. |
     * | `no_user` | No user was associated with the `committer` email address in the commit. |
     * | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
     * | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
     * | `unknown_key` | The key that made the signature has not been registered with any user's account. |
     * | `malformed_signature` | There was an error parsing the signature. |
     * | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
     * | `valid` | None of the above errors applied, so the signature is considered to be verified. |
     *
     * https://docs.github.com/enterprise-server@2.18/rest/reference/git#get-a-tag - API method documentation
    **/
    gitGetTag(req: operations.GitGetTagRequest, config?: AxiosRequestConfig): Promise<operations.GitGetTagResponse>;
    /**
     * gitGetTree - Get a tree
     *
     * Returns a single tree using the SHA1 value for that tree.
     *
     * If `truncated` is `true` in the response then the number of items in the `tree` array exceeded our maximum limit. If you need to fetch more items, use the non-recursive method of fetching trees, and fetch one sub-tree at a time.
     *
     * https://docs.github.com/enterprise-server@2.18/rest/reference/git#get-a-tree - API method documentation
    **/
    gitGetTree(req: operations.GitGetTreeRequest, config?: AxiosRequestConfig): Promise<operations.GitGetTreeResponse>;
    /**
     * gitUpdateRef - Update a reference
     *
     * https://docs.github.com/enterprise-server@2.18/rest/reference/git#update-a-reference - API method documentation
    **/
    gitUpdateRef(req: operations.GitUpdateRefRequest, config?: AxiosRequestConfig): Promise<operations.GitUpdateRefResponse>;
}
