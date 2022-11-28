import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils

class Git:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def git_create_blob(self, request: operations.GitCreateBlobRequest) -> operations.GitCreateBlobResponse:
        r"""Create a blob
        https://docs.github.com/enterprise-server@2.21/rest/reference/git#create-a-blob - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/git/blobs", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GitCreateBlobResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ShortBlob])
                res.short_blob = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def git_create_commit(self, request: operations.GitCreateCommitRequest) -> operations.GitCreateCommitResponse:
        r"""Create a commit
        Creates a new Git [commit object](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects).
        
        **Signature verification object**
        
        The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
        
        | Name | Type | Description |
        | ---- | ---- | ----------- |
        | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
        | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
        | `signature` | `string` | The signature that was extracted from the commit. |
        | `payload` | `string` | The value that was signed. |
        
        These are the possible values for `reason` in the `verification` object:
        
        | Value | Description |
        | ----- | ----------- |
        | `expired_key` | The key that made the signature is expired. |
        | `not_signing_key` | The \"signing\" flag is not among the usage flags in the GPG key that made the signature. |
        | `gpgverify_error` | There was an error communicating with the signature verification service. |
        | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
        | `unsigned` | The object does not include a signature. |
        | `unknown_signature_type` | A non-PGP signature was found in the commit. |
        | `no_user` | No user was associated with the `committer` email address in the commit. |
        | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
        | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
        | `unknown_key` | The key that made the signature has not been registered with any user's account. |
        | `malformed_signature` | There was an error parsing the signature. |
        | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
        | `valid` | None of the above errors applied, so the signature is considered to be verified. |
        https://docs.github.com/enterprise-server@2.21/rest/reference/git#create-a-commit - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/git/commits", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GitCreateCommitResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GitCommit])
                res.git_commit = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def git_create_ref(self, request: operations.GitCreateRefRequest) -> operations.GitCreateRefResponse:
        r"""Create a reference
        Creates a reference for your repository. You are unable to create new references for empty repositories, even if the commit SHA-1 hash used exists. Empty repositories are repositories without branches.
        https://docs.github.com/enterprise-server@2.21/rest/reference/git#create-a-reference - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/git/refs", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GitCreateRefResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GitRef])
                res.git_ref = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def git_create_tag(self, request: operations.GitCreateTagRequest) -> operations.GitCreateTagResponse:
        r"""Create a tag object
        Note that creating a tag object does not create the reference that makes a tag in Git. If you want to create an annotated tag in Git, you have to do this call to create the tag object, and then [create](https://docs.github.com/enterprise-server@2.21/rest/reference/git#create-a-reference) the `refs/tags/[tag]` reference. If you want to create a lightweight tag, you only have to [create](https://docs.github.com/enterprise-server@2.21/rest/reference/git#create-a-reference) the tag reference - this call would be unnecessary.
        
        **Signature verification object**
        
        The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
        
        | Name | Type | Description |
        | ---- | ---- | ----------- |
        | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
        | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
        | `signature` | `string` | The signature that was extracted from the commit. |
        | `payload` | `string` | The value that was signed. |
        
        These are the possible values for `reason` in the `verification` object:
        
        | Value | Description |
        | ----- | ----------- |
        | `expired_key` | The key that made the signature is expired. |
        | `not_signing_key` | The \"signing\" flag is not among the usage flags in the GPG key that made the signature. |
        | `gpgverify_error` | There was an error communicating with the signature verification service. |
        | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
        | `unsigned` | The object does not include a signature. |
        | `unknown_signature_type` | A non-PGP signature was found in the commit. |
        | `no_user` | No user was associated with the `committer` email address in the commit. |
        | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
        | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
        | `unknown_key` | The key that made the signature has not been registered with any user's account. |
        | `malformed_signature` | There was an error parsing the signature. |
        | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
        | `valid` | None of the above errors applied, so the signature is considered to be verified. |
        https://docs.github.com/enterprise-server@2.21/rest/reference/git#create-a-tag-object - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/git/tags", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GitCreateTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GitTag])
                res.git_tag = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def git_create_tree(self, request: operations.GitCreateTreeRequest) -> operations.GitCreateTreeResponse:
        r"""Create a tree
        The tree creation API accepts nested entries. If you specify both a tree and a nested path modifying that tree, this endpoint will overwrite the contents of the tree with the new path contents, and create a new tree structure.
        
        If you use this endpoint to add, delete, or modify the file contents in a tree, you will need to commit the tree and then update a branch to point to the commit. For more information see \"[Create a commit](https://docs.github.com/enterprise-server@2.21/rest/reference/git#create-a-commit)\" and \"[Update a reference](https://docs.github.com/enterprise-server@2.21/rest/reference/git#update-a-reference).\"
        https://docs.github.com/enterprise-server@2.21/rest/reference/git#create-a-tree - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/git/trees", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GitCreateTreeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GitTree])
                res.git_tree = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def git_delete_ref(self, request: operations.GitDeleteRefRequest) -> operations.GitDeleteRefResponse:
        r"""Delete a reference
        https://docs.github.com/enterprise-server@2.21/rest/reference/git#delete-a-reference - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/git/refs/{ref}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GitDeleteRefResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def git_get_blob(self, request: operations.GitGetBlobRequest) -> operations.GitGetBlobResponse:
        r"""Get a blob
        The `content` in the response will always be Base64 encoded.
        
        _Note_: This API supports blobs up to 100 megabytes in size.
        https://docs.github.com/enterprise-server@2.21/rest/reference/git#get-a-blob - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/git/blobs/{file_sha}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GitGetBlobResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Blob])
                res.blob = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def git_get_commit(self, request: operations.GitGetCommitRequest) -> operations.GitGetCommitResponse:
        r"""Get a commit
        Gets a Git [commit object](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects).
        
        **Signature verification object**
        
        The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
        
        | Name | Type | Description |
        | ---- | ---- | ----------- |
        | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
        | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
        | `signature` | `string` | The signature that was extracted from the commit. |
        | `payload` | `string` | The value that was signed. |
        
        These are the possible values for `reason` in the `verification` object:
        
        | Value | Description |
        | ----- | ----------- |
        | `expired_key` | The key that made the signature is expired. |
        | `not_signing_key` | The \"signing\" flag is not among the usage flags in the GPG key that made the signature. |
        | `gpgverify_error` | There was an error communicating with the signature verification service. |
        | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
        | `unsigned` | The object does not include a signature. |
        | `unknown_signature_type` | A non-PGP signature was found in the commit. |
        | `no_user` | No user was associated with the `committer` email address in the commit. |
        | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
        | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
        | `unknown_key` | The key that made the signature has not been registered with any user's account. |
        | `malformed_signature` | There was an error parsing the signature. |
        | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
        | `valid` | None of the above errors applied, so the signature is considered to be verified. |
        https://docs.github.com/enterprise-server@2.21/rest/reference/git#get-a-commit - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/git/commits/{commit_sha}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GitGetCommitResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GitCommit])
                res.git_commit = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def git_get_ref(self, request: operations.GitGetRefRequest) -> operations.GitGetRefResponse:
        r"""Get a reference
        Returns a single reference from your Git database. The `:ref` in the URL must be formatted as `heads/<branch name>` for branches and `tags/<tag name>` for tags. If the `:ref` doesn't match an existing ref, a `404` is returned.
        
        **Note:** You need to explicitly [request a pull request](https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#get-a-pull-request) to trigger a test merge commit, which checks the mergeability of pull requests. For more information, see \"[Checking mergeability of pull requests](https://docs.github.com/enterprise-server@2.21/rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests)\".
        https://docs.github.com/enterprise-server@2.21/rest/reference/git#get-a-reference - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/git/ref/{ref}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GitGetRefResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GitRef])
                res.git_ref = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def git_get_tag(self, request: operations.GitGetTagRequest) -> operations.GitGetTagResponse:
        r"""Get a tag
        **Signature verification object**
        
        The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
        
        | Name | Type | Description |
        | ---- | ---- | ----------- |
        | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
        | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
        | `signature` | `string` | The signature that was extracted from the commit. |
        | `payload` | `string` | The value that was signed. |
        
        These are the possible values for `reason` in the `verification` object:
        
        | Value | Description |
        | ----- | ----------- |
        | `expired_key` | The key that made the signature is expired. |
        | `not_signing_key` | The \"signing\" flag is not among the usage flags in the GPG key that made the signature. |
        | `gpgverify_error` | There was an error communicating with the signature verification service. |
        | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
        | `unsigned` | The object does not include a signature. |
        | `unknown_signature_type` | A non-PGP signature was found in the commit. |
        | `no_user` | No user was associated with the `committer` email address in the commit. |
        | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
        | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
        | `unknown_key` | The key that made the signature has not been registered with any user's account. |
        | `malformed_signature` | There was an error parsing the signature. |
        | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
        | `valid` | None of the above errors applied, so the signature is considered to be verified. |
        https://docs.github.com/enterprise-server@2.21/rest/reference/git#get-a-tag - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/git/tags/{tag_sha}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GitGetTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GitTag])
                res.git_tag = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def git_get_tree(self, request: operations.GitGetTreeRequest) -> operations.GitGetTreeResponse:
        r"""Get a tree
        Returns a single tree using the SHA1 value for that tree.
        
        If `truncated` is `true` in the response then the number of items in the `tree` array exceeded our maximum limit. If you need to fetch more items, use the non-recursive method of fetching trees, and fetch one sub-tree at a time.
        https://docs.github.com/enterprise-server@2.21/rest/reference/git#get-a-tree - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/git/trees/{tree_sha}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GitGetTreeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GitTree])
                res.git_tree = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def git_list_matching_refs(self, request: operations.GitListMatchingRefsRequest) -> operations.GitListMatchingRefsResponse:
        r"""List matching references
        Returns an array of references from your Git database that match the supplied name. The `:ref` in the URL must be formatted as `heads/<branch name>` for branches and `tags/<tag name>` for tags. If the `:ref` doesn't exist in the repository, but existing refs start with `:ref`, they will be returned as an array.
        
        When you use this endpoint without providing a `:ref`, it will return an array of all the references from your Git database, including notes and stashes if they exist on the server. Anything in the namespace is returned, not just `heads` and `tags`.
        
        **Note:** You need to explicitly [request a pull request](https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#get-a-pull-request) to trigger a test merge commit, which checks the mergeability of pull requests. For more information, see \"[Checking mergeability of pull requests](https://docs.github.com/enterprise-server@2.21/rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests)\".
        
        If you request matching references for a branch named `feature` but the branch `feature` doesn't exist, the response can still include other matching head refs that start with the word `feature`, such as `featureA` and `featureB`.
        https://docs.github.com/enterprise-server@2.21/rest/reference/git#list-matching-references - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/git/matching-refs/{ref}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GitListMatchingRefsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.GitRef]])
                res.git_refs = out

        return res

    
    def git_update_ref(self, request: operations.GitUpdateRefRequest) -> operations.GitUpdateRefResponse:
        r"""Update a reference
        https://docs.github.com/enterprise-server@2.21/rest/reference/git#update-a-reference - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/git/refs/{ref}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GitUpdateRefResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GitRef])
                res.git_ref = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    