import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils

class Actions:
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

    
    def actions_add_repo_access_to_self_hosted_runner_group_in_org(self, request: operations.ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgRequest) -> operations.ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgResponse:
        r"""Add repository access to a self-hosted runner group in an organization
        Adds a repository to the list of selected repositories that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see \"[Create a self-hosted runner group for an organization](#create-a-self-hosted-runner-group-for-an-organization).\"
        You must authenticate using an access token with the `admin:org` scope to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#add-repository-acess-to-a-self-hosted-runner-group-in-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/actions/runner-groups/{runner_group_id}/repositories/{repository_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def actions_add_selected_repo_to_org_secret(self, request: operations.ActionsAddSelectedRepoToOrgSecretRequest) -> operations.ActionsAddSelectedRepoToOrgSecretResponse:
        r"""Add selected repository to an organization secret
        Adds a repository to an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@3.0/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#add-selected-repository-to-an-organization-secret - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsAddSelectedRepoToOrgSecretResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 409:
            pass

        return res

    
    def actions_add_self_hosted_runner_to_group_for_org(self, request: operations.ActionsAddSelfHostedRunnerToGroupForOrgRequest) -> operations.ActionsAddSelfHostedRunnerToGroupForOrgResponse:
        r"""Add a self-hosted runner to a group for an organization
        Adds a self-hosted runner to a runner group configured in an organization.
        You must authenticate using an access token with the `admin:org` scope to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#add-a-self-hosted-runner-to-a-group-for-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/actions/runner-groups/{runner_group_id}/runners/{runner_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsAddSelfHostedRunnerToGroupForOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def actions_cancel_workflow_run(self, request: operations.ActionsCancelWorkflowRunRequest) -> operations.ActionsCancelWorkflowRunResponse:
        r"""Cancel a workflow run
        Cancels a workflow run using its `id`. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#cancel-a-workflow-run - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/actions/runs/{run_id}/cancel", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsCancelWorkflowRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.actions_cancel_workflow_run_202_application_json_object = out

        return res

    
    def actions_create_or_update_org_secret(self, request: operations.ActionsCreateOrUpdateOrgSecretRequest) -> operations.ActionsCreateOrUpdateOrgSecretResponse:
        r"""Create or update an organization secret
        Creates or updates an organization secret with an encrypted value. Encrypt your secret using
        [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
        token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to
        use this endpoint.
        
        #### Example encrypting a secret using Node.js
        
        Encrypt your secret using the [tweetsodium](https://github.com/github/tweetsodium) library.
        
        ```
        const sodium = require('tweetsodium');
        
        const key = \"base64-encoded-public-key\";
        const value = \"plain-text-secret\";
        
        // Convert the message and key to Uint8Array's (Buffer implements that interface)
        const messageBytes = Buffer.from(value);
        const keyBytes = Buffer.from(key, 'base64');
        
        // Encrypt using LibSodium.
        const encryptedBytes = sodium.seal(messageBytes, keyBytes);
        
        // Base64 the encrypted secret
        const encrypted = Buffer.from(encryptedBytes).toString('base64');
        
        console.log(encrypted);
        ```
        
        
        #### Example encrypting a secret using Python
        
        Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/stable/public/#nacl-public-sealedbox) with Python 3.
        
        ```
        from base64 import b64encode
        from nacl import encoding, public
        
        def encrypt(public_key: str, secret_value: str) -> str:
          \"\"\"Encrypt a Unicode string using the public key.\"\"\"
          public_key = public.PublicKey(public_key.encode(\"utf-8\"), encoding.Base64Encoder())
          sealed_box = public.SealedBox(public_key)
          encrypted = sealed_box.encrypt(secret_value.encode(\"utf-8\"))
          return b64encode(encrypted).decode(\"utf-8\")
        ```
        
        #### Example encrypting a secret using C#
        
        Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.
        
        ```
        var secretValue = System.Text.Encoding.UTF8.GetBytes(\"mySecret\");
        var publicKey = Convert.FromBase64String(\"2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=\");
        
        var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);
        
        Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox));
        ```
        
        #### Example encrypting a secret using Ruby
        
        Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.
        
        ```ruby
        require \"rbnacl\"
        require \"base64\"
        
        key = Base64.decode64(\"+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=\")
        public_key = RbNaCl::PublicKey.new(key)
        
        box = RbNaCl::Boxes::Sealed.from_public_key(public_key)
        encrypted_secret = box.encrypt(\"my_secret\")
        
        # Print the base64 encoded secret
        puts Base64.strict_encode64(encrypted_secret)
        ```
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#create-or-update-an-organization-secret - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/actions/secrets/{secret_name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsCreateOrUpdateOrgSecretResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty_object = out
        elif r.status_code == 204:
            pass

        return res

    
    def actions_create_or_update_repo_secret(self, request: operations.ActionsCreateOrUpdateRepoSecretRequest) -> operations.ActionsCreateOrUpdateRepoSecretResponse:
        r"""Create or update a repository secret
        Creates or updates a repository secret with an encrypted value. Encrypt your secret using
        [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
        token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use
        this endpoint.
        
        #### Example encrypting a secret using Node.js
        
        Encrypt your secret using the [tweetsodium](https://github.com/github/tweetsodium) library.
        
        ```
        const sodium = require('tweetsodium');
        
        const key = \"base64-encoded-public-key\";
        const value = \"plain-text-secret\";
        
        // Convert the message and key to Uint8Array's (Buffer implements that interface)
        const messageBytes = Buffer.from(value);
        const keyBytes = Buffer.from(key, 'base64');
        
        // Encrypt using LibSodium.
        const encryptedBytes = sodium.seal(messageBytes, keyBytes);
        
        // Base64 the encrypted secret
        const encrypted = Buffer.from(encryptedBytes).toString('base64');
        
        console.log(encrypted);
        ```
        
        
        #### Example encrypting a secret using Python
        
        Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/stable/public/#nacl-public-sealedbox) with Python 3.
        
        ```
        from base64 import b64encode
        from nacl import encoding, public
        
        def encrypt(public_key: str, secret_value: str) -> str:
          \"\"\"Encrypt a Unicode string using the public key.\"\"\"
          public_key = public.PublicKey(public_key.encode(\"utf-8\"), encoding.Base64Encoder())
          sealed_box = public.SealedBox(public_key)
          encrypted = sealed_box.encrypt(secret_value.encode(\"utf-8\"))
          return b64encode(encrypted).decode(\"utf-8\")
        ```
        
        #### Example encrypting a secret using C#
        
        Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.
        
        ```
        var secretValue = System.Text.Encoding.UTF8.GetBytes(\"mySecret\");
        var publicKey = Convert.FromBase64String(\"2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=\");
        
        var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);
        
        Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox));
        ```
        
        #### Example encrypting a secret using Ruby
        
        Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.
        
        ```ruby
        require \"rbnacl\"
        require \"base64\"
        
        key = Base64.decode64(\"+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=\")
        public_key = RbNaCl::PublicKey.new(key)
        
        box = RbNaCl::Boxes::Sealed.from_public_key(public_key)
        encrypted_secret = box.encrypt(\"my_secret\")
        
        # Print the base64 encoded secret
        puts Base64.strict_encode64(encrypted_secret)
        ```
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#create-or-update-a-repository-secret - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/actions/secrets/{secret_name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsCreateOrUpdateRepoSecretResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.actions_create_or_update_repo_secret_201_application_json_object = out
        elif r.status_code == 204:
            pass

        return res

    
    def actions_create_registration_token_for_org(self, request: operations.ActionsCreateRegistrationTokenForOrgRequest) -> operations.ActionsCreateRegistrationTokenForOrgResponse:
        r"""Create a registration token for an organization
        Returns a token that you can pass to the `config` script. The token expires after one hour.
        
        You must authenticate using an access token with the `admin:org` scope to use this endpoint.
        
        #### Example using registration token
        
        Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.
        
        ```
        ./config.sh --url https://github.com/octo-org --token TOKEN
        ```
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#create-a-registration-token-for-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/actions/runners/registration-token", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsCreateRegistrationTokenForOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuthenticationToken])
                res.authentication_token = out

        return res

    
    def actions_create_registration_token_for_repo(self, request: operations.ActionsCreateRegistrationTokenForRepoRequest) -> operations.ActionsCreateRegistrationTokenForRepoResponse:
        r"""Create a registration token for a repository
        Returns a token that you can pass to the `config` script. The token expires after one hour. You must authenticate
        using an access token with the `repo` scope to use this endpoint.
        
        #### Example using registration token
         
        Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.
        
        ```
        ./config.sh --url https://github.com/octo-org/octo-repo-artifacts --token TOKEN
        ```
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#create-a-registration-token-for-a-repository - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/actions/runners/registration-token", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsCreateRegistrationTokenForRepoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuthenticationToken])
                res.authentication_token = out

        return res

    
    def actions_create_remove_token_for_org(self, request: operations.ActionsCreateRemoveTokenForOrgRequest) -> operations.ActionsCreateRemoveTokenForOrgResponse:
        r"""Create a remove token for an organization
        Returns a token that you can pass to the `config` script to remove a self-hosted runner from an organization. The token expires after one hour.
        
        You must authenticate using an access token with the `admin:org` scope to use this endpoint.
        
        #### Example using remove token
        
        To remove your self-hosted runner from an organization, replace `TOKEN` with the remove token provided by this
        endpoint.
        
        ```
        ./config.sh remove --token TOKEN
        ```
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#create-a-remove-token-for-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/actions/runners/remove-token", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsCreateRemoveTokenForOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuthenticationToken])
                res.authentication_token = out

        return res

    
    def actions_create_remove_token_for_repo(self, request: operations.ActionsCreateRemoveTokenForRepoRequest) -> operations.ActionsCreateRemoveTokenForRepoResponse:
        r"""Create a remove token for a repository
        Returns a token that you can pass to remove a self-hosted runner from a repository. The token expires after one hour.
        You must authenticate using an access token with the `repo` scope to use this endpoint.
        
        #### Example using remove token
         
        To remove your self-hosted runner from a repository, replace TOKEN with the remove token provided by this endpoint.
        
        ```
        ./config.sh remove --token TOKEN
        ```
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#create-a-remove-token-for-a-repository - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/actions/runners/remove-token", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsCreateRemoveTokenForRepoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuthenticationToken])
                res.authentication_token = out

        return res

    
    def actions_create_self_hosted_runner_group_for_org(self, request: operations.ActionsCreateSelfHostedRunnerGroupForOrgRequest) -> operations.ActionsCreateSelfHostedRunnerGroupForOrgResponse:
        r"""Create a self-hosted runner group for an organization
        The self-hosted runner groups REST API is available with GitHub Enterprise Cloud and GitHub Enterprise Server. For more information, see \"[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products).\"
        
        Creates a new self-hosted runner group for an organization.
        
        You must authenticate using an access token with the `admin:org` scope to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#create-a-self-hosted-runner-group-for-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/actions/runner-groups", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsCreateSelfHostedRunnerGroupForOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RunnerGroupsOrg])
                res.runner_groups_org = out

        return res

    
    def actions_create_workflow_dispatch(self, request: operations.ActionsCreateWorkflowDispatchRequest) -> operations.ActionsCreateWorkflowDispatchResponse:
        r"""Create a workflow dispatch event
        You can use this endpoint to manually trigger a GitHub Actions workflow run. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.
        
        You must configure your GitHub Actions workflow to run when the [`workflow_dispatch` webhook](/developers/webhooks-and-events/webhook-events-and-payloads#workflow_dispatch) event occurs. The `inputs` are configured in the workflow file. For more information about how to configure the `workflow_dispatch` event in the workflow file, see \"[Events that trigger workflows](/actions/reference/events-that-trigger-workflows#workflow_dispatch).\"
        
        You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint. For more information, see \"[Creating a personal access token for the command line](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line).\"
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#create-a-workflow-dispatch-event - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsCreateWorkflowDispatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def actions_delete_artifact(self, request: operations.ActionsDeleteArtifactRequest) -> operations.ActionsDeleteArtifactResponse:
        r"""Delete an artifact
        Deletes an artifact for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#delete-an-artifact - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/actions/artifacts/{artifact_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsDeleteArtifactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def actions_delete_org_secret(self, request: operations.ActionsDeleteOrgSecretRequest) -> operations.ActionsDeleteOrgSecretResponse:
        r"""Delete an organization secret
        Deletes a secret in an organization using the secret name. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#delete-an-organization-secret - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/actions/secrets/{secret_name}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsDeleteOrgSecretResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def actions_delete_repo_secret(self, request: operations.ActionsDeleteRepoSecretRequest) -> operations.ActionsDeleteRepoSecretResponse:
        r"""Delete a repository secret
        Deletes a secret in a repository using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#delete-a-repository-secret - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/actions/secrets/{secret_name}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsDeleteRepoSecretResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def actions_delete_self_hosted_runner_from_org(self, request: operations.ActionsDeleteSelfHostedRunnerFromOrgRequest) -> operations.ActionsDeleteSelfHostedRunnerFromOrgResponse:
        r"""Delete a self-hosted runner from an organization
        Forces the removal of a self-hosted runner from an organization. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.
        
        You must authenticate using an access token with the `admin:org` scope to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#delete-a-self-hosted-runner-from-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/actions/runners/{runner_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsDeleteSelfHostedRunnerFromOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def actions_delete_self_hosted_runner_from_repo(self, request: operations.ActionsDeleteSelfHostedRunnerFromRepoRequest) -> operations.ActionsDeleteSelfHostedRunnerFromRepoResponse:
        r"""Delete a self-hosted runner from a repository
        Forces the removal of a self-hosted runner from a repository. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.
        
        You must authenticate using an access token with the `repo`
        scope to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#delete-a-self-hosted-runner-from-a-repository - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/actions/runners/{runner_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsDeleteSelfHostedRunnerFromRepoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def actions_delete_self_hosted_runner_group_from_org(self, request: operations.ActionsDeleteSelfHostedRunnerGroupFromOrgRequest) -> operations.ActionsDeleteSelfHostedRunnerGroupFromOrgResponse:
        r"""Delete a self-hosted runner group from an organization
        Deletes a self-hosted runner group for an organization.
        You must authenticate using an access token with the `admin:org` scope to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#delete-a-self-hosted-runner-group-from-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/actions/runner-groups/{runner_group_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsDeleteSelfHostedRunnerGroupFromOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def actions_delete_workflow_run(self, request: operations.ActionsDeleteWorkflowRunRequest) -> operations.ActionsDeleteWorkflowRunResponse:
        r"""Delete a workflow run
        Delete a specific workflow run. Anyone with write access to the repository can use this endpoint. If the repository is
        private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:write` permission to use
        this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#delete-a-workflow-run - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/actions/runs/{run_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsDeleteWorkflowRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def actions_delete_workflow_run_logs(self, request: operations.ActionsDeleteWorkflowRunLogsRequest) -> operations.ActionsDeleteWorkflowRunLogsResponse:
        r"""Delete workflow run logs
        Deletes all logs for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#delete-workflow-run-logs - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/actions/runs/{run_id}/logs", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsDeleteWorkflowRunLogsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def actions_disable_selected_repository_github_actions_organization(self, request: operations.ActionsDisableSelectedRepositoryGithubActionsOrganizationRequest) -> operations.ActionsDisableSelectedRepositoryGithubActionsOrganizationResponse:
        r"""Disable a selected repository for GitHub Actions in an organization
        Removes a repository from the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see \"[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization).\"
        
        You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#disable-a-selected-repository-for-github-actions-in-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/actions/permissions/repositories/{repository_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsDisableSelectedRepositoryGithubActionsOrganizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def actions_disable_workflow(self, request: operations.ActionsDisableWorkflowRequest) -> operations.ActionsDisableWorkflowResponse:
        r"""Disable a workflow
        Disables a workflow and sets the `state` of the workflow to `disabled_manually`. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.
        
        You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#disable-a-workflow - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable", request.path_params)
        
        
        client = self._client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsDisableWorkflowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def actions_download_artifact(self, request: operations.ActionsDownloadArtifactRequest) -> operations.ActionsDownloadArtifactResponse:
        r"""Download an artifact
        Gets a redirect URL to download an archive for a repository. This URL expires after 1 minute. Look for `Location:` in
        the response header to find the URL for the download. The `:archive_format` must be `zip`. Anyone with read access to
        the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.
        GitHub Apps must have the `actions:read` permission to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#download-an-artifact - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsDownloadArtifactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 302:
            res.headers = r.headers
            

        return res

    
    def actions_download_job_logs_for_workflow_run(self, request: operations.ActionsDownloadJobLogsForWorkflowRunRequest) -> operations.ActionsDownloadJobLogsForWorkflowRunResponse:
        r"""Download job logs for a workflow run
        Gets a redirect URL to download a plain text file of logs for a workflow job. This link expires after 1 minute. Look
        for `Location:` in the response header to find the URL for the download. Anyone with read access to the repository can
        use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must
        have the `actions:read` permission to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#download-job-logs-for-a-workflow-run - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/actions/jobs/{job_id}/logs", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsDownloadJobLogsForWorkflowRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 302:
            res.headers = r.headers
            

        return res

    
    def actions_download_workflow_run_logs(self, request: operations.ActionsDownloadWorkflowRunLogsRequest) -> operations.ActionsDownloadWorkflowRunLogsResponse:
        r"""Download workflow run logs
        Gets a redirect URL to download an archive of log files for a workflow run. This link expires after 1 minute. Look for
        `Location:` in the response header to find the URL for the download. Anyone with read access to the repository can use
        this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have
        the `actions:read` permission to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#download-workflow-run-logs - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/actions/runs/{run_id}/logs", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsDownloadWorkflowRunLogsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 302:
            res.headers = r.headers
            

        return res

    
    def actions_enable_selected_repository_github_actions_organization(self, request: operations.ActionsEnableSelectedRepositoryGithubActionsOrganizationRequest) -> operations.ActionsEnableSelectedRepositoryGithubActionsOrganizationResponse:
        r"""Enable a selected repository for GitHub Actions in an organization
        Adds a repository to the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be must be configured to `selected`. For more information, see \"[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization).\"
        
        You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#enable-a-selected-repository-for-github-actions-in-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/actions/permissions/repositories/{repository_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsEnableSelectedRepositoryGithubActionsOrganizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def actions_enable_workflow(self, request: operations.ActionsEnableWorkflowRequest) -> operations.ActionsEnableWorkflowResponse:
        r"""Enable a workflow
        Enables a workflow and sets the `state` of the workflow to `active`. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.
        
        You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#enable-a-workflow - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable", request.path_params)
        
        
        client = self._client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsEnableWorkflowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def actions_get_allowed_actions_organization(self, request: operations.ActionsGetAllowedActionsOrganizationRequest) -> operations.ActionsGetAllowedActionsOrganizationResponse:
        r"""Get allowed actions for an organization
        Gets the selected actions that are allowed in an organization. To use this endpoint, the organization permission policy for `allowed_actions` must be configured to `selected`. For more information, see \"[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization).\"\"
        
        You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-allowed-actions-for-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/actions/permissions/selected-actions", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsGetAllowedActionsOrganizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SelectedActions])
                res.selected_actions = out

        return res

    
    def actions_get_allowed_actions_repository(self, request: operations.ActionsGetAllowedActionsRepositoryRequest) -> operations.ActionsGetAllowedActionsRepositoryResponse:
        r"""Get allowed actions for a repository
        Gets the settings for selected actions that are allowed in a repository. To use this endpoint, the repository policy for `allowed_actions` must be configured to `selected`. For more information, see \"[Set GitHub Actions permissions for a repository](#set-github-actions-permissions-for-a-repository).\"
        
        You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-allowed-actions-for-a-repository - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/actions/permissions/selected-actions", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsGetAllowedActionsRepositoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SelectedActions])
                res.selected_actions = out

        return res

    
    def actions_get_artifact(self, request: operations.ActionsGetArtifactRequest) -> operations.ActionsGetArtifactResponse:
        r"""Get an artifact
        Gets a specific artifact for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-an-artifact - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/actions/artifacts/{artifact_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsGetArtifactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Artifact])
                res.artifact = out

        return res

    
    def actions_get_github_actions_permissions_organization(self, request: operations.ActionsGetGithubActionsPermissionsOrganizationRequest) -> operations.ActionsGetGithubActionsPermissionsOrganizationResponse:
        r"""Get GitHub Actions permissions for an organization
        Gets the GitHub Actions permissions policy for repositories and allowed actions in an organization.
        
        You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-github-actions-permissions-for-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/actions/permissions", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsGetGithubActionsPermissionsOrganizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ActionsOrganizationPermissions])
                res.actions_organization_permissions = out

        return res

    
    def actions_get_github_actions_permissions_repository(self, request: operations.ActionsGetGithubActionsPermissionsRepositoryRequest) -> operations.ActionsGetGithubActionsPermissionsRepositoryResponse:
        r"""Get GitHub Actions permissions for a repository
        Gets the GitHub Actions permissions policy for a repository, including whether GitHub Actions is enabled and the actions allowed to run in the repository.
        
        You must authenticate using an access token with the `repo` scope to use this
        endpoint. GitHub Apps must have the `administration` repository permission to use this API.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-github-actions-permissions-for-a-repository - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/actions/permissions", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsGetGithubActionsPermissionsRepositoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ActionsRepositoryPermissions])
                res.actions_repository_permissions = out

        return res

    
    def actions_get_job_for_workflow_run(self, request: operations.ActionsGetJobForWorkflowRunRequest) -> operations.ActionsGetJobForWorkflowRunResponse:
        r"""Get a job for a workflow run
        Gets a specific job in a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-a-job-for-a-workflow-run - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/actions/jobs/{job_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsGetJobForWorkflowRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Job])
                res.job = out

        return res

    
    def actions_get_org_public_key(self, request: operations.ActionsGetOrgPublicKeyRequest) -> operations.ActionsGetOrgPublicKeyResponse:
        r"""Get an organization public key
        Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-an-organization-public-key - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/actions/secrets/public-key", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsGetOrgPublicKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ActionsPublicKey])
                res.actions_public_key = out

        return res

    
    def actions_get_org_secret(self, request: operations.ActionsGetOrgSecretRequest) -> operations.ActionsGetOrgSecretResponse:
        r"""Get an organization secret
        Gets a single organization secret without revealing its encrypted value. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-an-organization-secret - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/actions/secrets/{secret_name}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsGetOrgSecretResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrganizationActionsSecret])
                res.organization_actions_secret = out

        return res

    
    def actions_get_repo_public_key(self, request: operations.ActionsGetRepoPublicKeyRequest) -> operations.ActionsGetRepoPublicKeyResponse:
        r"""Get a repository public key
        Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `secrets` repository permission to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-a-repository-public-key - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/actions/secrets/public-key", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsGetRepoPublicKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ActionsPublicKey])
                res.actions_public_key = out

        return res

    
    def actions_get_repo_secret(self, request: operations.ActionsGetRepoSecretRequest) -> operations.ActionsGetRepoSecretResponse:
        r"""Get a repository secret
        Gets a single repository secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-a-repository-secret - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/actions/secrets/{secret_name}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsGetRepoSecretResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ActionsSecret])
                res.actions_secret = out

        return res

    
    def actions_get_self_hosted_runner_for_org(self, request: operations.ActionsGetSelfHostedRunnerForOrgRequest) -> operations.ActionsGetSelfHostedRunnerForOrgResponse:
        r"""Get a self-hosted runner for an organization
        Gets a specific self-hosted runner configured in an organization.
        
        You must authenticate using an access token with the `admin:org` scope to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-a-self-hosted-runner-for-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/actions/runners/{runner_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsGetSelfHostedRunnerForOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Runner])
                res.runner = out

        return res

    
    def actions_get_self_hosted_runner_for_repo(self, request: operations.ActionsGetSelfHostedRunnerForRepoRequest) -> operations.ActionsGetSelfHostedRunnerForRepoResponse:
        r"""Get a self-hosted runner for a repository
        Gets a specific self-hosted runner configured in a repository.
        
        You must authenticate using an access token with the `repo` scope to use this
        endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-a-self-hosted-runner-for-a-repository - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/actions/runners/{runner_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsGetSelfHostedRunnerForRepoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Runner])
                res.runner = out

        return res

    
    def actions_get_self_hosted_runner_group_for_org(self, request: operations.ActionsGetSelfHostedRunnerGroupForOrgRequest) -> operations.ActionsGetSelfHostedRunnerGroupForOrgResponse:
        r"""Get a self-hosted runner group for an organization
        Gets a specific self-hosted runner group for an organization.
        You must authenticate using an access token with the `admin:org` scope to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-a-self-hosted-runner-group-for-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/actions/runner-groups/{runner_group_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsGetSelfHostedRunnerGroupForOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RunnerGroupsOrg])
                res.runner_groups_org = out

        return res

    
    def actions_get_workflow(self, request: operations.ActionsGetWorkflowRequest) -> operations.ActionsGetWorkflowResponse:
        r"""Get a workflow
        Gets a specific workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-a-workflow - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/actions/workflows/{workflow_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsGetWorkflowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Workflow])
                res.workflow = out

        return res

    
    def actions_get_workflow_run(self, request: operations.ActionsGetWorkflowRunRequest) -> operations.ActionsGetWorkflowRunResponse:
        r"""Get a workflow run
        Gets a specific workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-a-workflow-run - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/actions/runs/{run_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsGetWorkflowRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WorkflowRun])
                res.workflow_run = out

        return res

    
    def actions_list_artifacts_for_repo(self, request: operations.ActionsListArtifactsForRepoRequest) -> operations.ActionsListArtifactsForRepoResponse:
        r"""List artifacts for a repository
        Lists all artifacts for a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-artifacts-for-a-repository - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/actions/artifacts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsListArtifactsForRepoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ActionsListArtifactsForRepo200ApplicationJSON])
                res.actions_list_artifacts_for_repo_200_application_json_object = out

        return res

    
    def actions_list_jobs_for_workflow_run(self, request: operations.ActionsListJobsForWorkflowRunRequest) -> operations.ActionsListJobsForWorkflowRunResponse:
        r"""List jobs for a workflow run
        Lists jobs for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#parameters).
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-jobs-for-a-workflow-run - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/actions/runs/{run_id}/jobs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsListJobsForWorkflowRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ActionsListJobsForWorkflowRun200ApplicationJSON])
                res.actions_list_jobs_for_workflow_run_200_application_json_object = out

        return res

    
    def actions_list_org_secrets(self, request: operations.ActionsListOrgSecretsRequest) -> operations.ActionsListOrgSecretsResponse:
        r"""List organization secrets
        Lists all secrets available in an organization without revealing their encrypted values. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-organization-secrets - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/actions/secrets", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsListOrgSecretsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ActionsListOrgSecrets200ApplicationJSON])
                res.actions_list_org_secrets_200_application_json_object = out

        return res

    
    def actions_list_repo_access_to_self_hosted_runner_group_in_org(self, request: operations.ActionsListRepoAccessToSelfHostedRunnerGroupInOrgRequest) -> operations.ActionsListRepoAccessToSelfHostedRunnerGroupInOrgResponse:
        r"""List repository access to a self-hosted runner group in an organization
        The self-hosted runner groups REST API is available with GitHub Enterprise Cloud and GitHub Enterprise Server. For more information, see \"[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products).\"
        
        Lists the repositories with access to a self-hosted runner group configured in an organization.
        
        You must authenticate using an access token with the `admin:org` scope to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-repository-access-to-a-self-hosted-runner-group-in-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/actions/runner-groups/{runner_group_id}/repositories", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsListRepoAccessToSelfHostedRunnerGroupInOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ActionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJSON])
                res.actions_list_repo_access_to_self_hosted_runner_group_in_org_200_application_json_object = out

        return res

    
    def actions_list_repo_secrets(self, request: operations.ActionsListRepoSecretsRequest) -> operations.ActionsListRepoSecretsResponse:
        r"""List repository secrets
        Lists all secrets available in a repository without revealing their encrypted values. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-repository-secrets - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/actions/secrets", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsListRepoSecretsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ActionsListRepoSecrets200ApplicationJSON])
                res.actions_list_repo_secrets_200_application_json_object = out

        return res

    
    def actions_list_repo_workflows(self, request: operations.ActionsListRepoWorkflowsRequest) -> operations.ActionsListRepoWorkflowsResponse:
        r"""List repository workflows
        Lists the workflows in a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-repository-workflows - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/actions/workflows", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsListRepoWorkflowsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ActionsListRepoWorkflows200ApplicationJSON])
                res.actions_list_repo_workflows_200_application_json_object = out

        return res

    
    def actions_list_runner_applications_for_org(self, request: operations.ActionsListRunnerApplicationsForOrgRequest) -> operations.ActionsListRunnerApplicationsForOrgResponse:
        r"""List runner applications for an organization
        Lists binaries for the runner application that you can download and run.
        
        You must authenticate using an access token with the `admin:org` scope to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-runner-applications-for-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/actions/runners/downloads", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsListRunnerApplicationsForOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RunnerApplication]])
                res.runner_applications = out

        return res

    
    def actions_list_runner_applications_for_repo(self, request: operations.ActionsListRunnerApplicationsForRepoRequest) -> operations.ActionsListRunnerApplicationsForRepoResponse:
        r"""List runner applications for a repository
        Lists binaries for the runner application that you can download and run.
        
        You must authenticate using an access token with the `repo` scope to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-runner-applications-for-a-repository - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/actions/runners/downloads", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsListRunnerApplicationsForRepoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RunnerApplication]])
                res.runner_applications = out

        return res

    
    def actions_list_selected_repos_for_org_secret(self, request: operations.ActionsListSelectedReposForOrgSecretRequest) -> operations.ActionsListSelectedReposForOrgSecretResponse:
        r"""List selected repositories for an organization secret
        Lists all repositories that have been selected when the `visibility` for repository access to a secret is set to `selected`. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-selected-repositories-for-an-organization-secret - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/actions/secrets/{secret_name}/repositories", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsListSelectedReposForOrgSecretResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ActionsListSelectedReposForOrgSecret200ApplicationJSON])
                res.actions_list_selected_repos_for_org_secret_200_application_json_object = out

        return res

    
    def actions_list_selected_repositories_enabled_github_actions_organization(self, request: operations.ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationRequest) -> operations.ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationResponse:
        r"""List selected repositories enabled for GitHub Actions in an organization
        Lists the selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see \"[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization).\"
        
        You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-selected-repositories-enabled-for-github-actions-in-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/actions/permissions/repositories", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJSON])
                res.actions_list_selected_repositories_enabled_github_actions_organization_200_application_json_object = out

        return res

    
    def actions_list_self_hosted_runner_groups_for_org(self, request: operations.ActionsListSelfHostedRunnerGroupsForOrgRequest) -> operations.ActionsListSelfHostedRunnerGroupsForOrgResponse:
        r"""List self-hosted runner groups for an organization
        Lists all self-hosted runner groups configured in an organization and inherited from an enterprise.
        You must authenticate using an access token with the `admin:org` scope to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-self-hosted-runner-groups-for-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/actions/runner-groups", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsListSelfHostedRunnerGroupsForOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ActionsListSelfHostedRunnerGroupsForOrg200ApplicationJSON])
                res.actions_list_self_hosted_runner_groups_for_org_200_application_json_object = out

        return res

    
    def actions_list_self_hosted_runners_for_org(self, request: operations.ActionsListSelfHostedRunnersForOrgRequest) -> operations.ActionsListSelfHostedRunnersForOrgResponse:
        r"""List self-hosted runners for an organization
        Lists all self-hosted runners configured in an organization.
        
        You must authenticate using an access token with the `admin:org` scope to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-self-hosted-runners-for-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/actions/runners", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsListSelfHostedRunnersForOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ActionsListSelfHostedRunnersForOrg200ApplicationJSON])
                res.actions_list_self_hosted_runners_for_org_200_application_json_object = out

        return res

    
    def actions_list_self_hosted_runners_for_repo(self, request: operations.ActionsListSelfHostedRunnersForRepoRequest) -> operations.ActionsListSelfHostedRunnersForRepoResponse:
        r"""List self-hosted runners for a repository
        Lists all self-hosted runners configured in a repository. You must authenticate using an access token with the `repo` scope to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-self-hosted-runners-for-a-repository - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/actions/runners", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsListSelfHostedRunnersForRepoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ActionsListSelfHostedRunnersForRepo200ApplicationJSON])
                res.actions_list_self_hosted_runners_for_repo_200_application_json_object = out

        return res

    
    def actions_list_self_hosted_runners_in_group_for_org(self, request: operations.ActionsListSelfHostedRunnersInGroupForOrgRequest) -> operations.ActionsListSelfHostedRunnersInGroupForOrgResponse:
        r"""List self-hosted runners in a group for an organization
        Lists self-hosted runners that are in a specific organization group.
        You must authenticate using an access token with the `admin:org` scope to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-self-hosted-runners-in-a-group-for-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/actions/runner-groups/{runner_group_id}/runners", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsListSelfHostedRunnersInGroupForOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ActionsListSelfHostedRunnersInGroupForOrg200ApplicationJSON])
                res.actions_list_self_hosted_runners_in_group_for_org_200_application_json_object = out

        return res

    
    def actions_list_workflow_run_artifacts(self, request: operations.ActionsListWorkflowRunArtifactsRequest) -> operations.ActionsListWorkflowRunArtifactsResponse:
        r"""List workflow run artifacts
        Lists artifacts for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-workflow-run-artifacts - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/actions/runs/{run_id}/artifacts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsListWorkflowRunArtifactsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ActionsListWorkflowRunArtifacts200ApplicationJSON])
                res.actions_list_workflow_run_artifacts_200_application_json_object = out

        return res

    
    def actions_list_workflow_runs(self, request: operations.ActionsListWorkflowRunsRequest) -> operations.ActionsListWorkflowRunsResponse:
        r"""List workflow runs
        List all workflow runs for a workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#parameters).
        
        Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-workflow-runs - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsListWorkflowRunsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ActionsListWorkflowRuns200ApplicationJSON])
                res.actions_list_workflow_runs_200_application_json_object = out

        return res

    
    def actions_list_workflow_runs_for_repo(self, request: operations.ActionsListWorkflowRunsForRepoRequest) -> operations.ActionsListWorkflowRunsForRepoResponse:
        r"""List workflow runs for a repository
        Lists all workflow runs for a repository. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#parameters).
        
        Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-workflow-runs-for-a-repository - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/actions/runs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsListWorkflowRunsForRepoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ActionsListWorkflowRunsForRepo200ApplicationJSON])
                res.actions_list_workflow_runs_for_repo_200_application_json_object = out

        return res

    
    def actions_re_run_workflow(self, request: operations.ActionsReRunWorkflowRequest) -> operations.ActionsReRunWorkflowResponse:
        r"""Re-run a workflow
        Re-runs your workflow run using its `id`. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#re-run-a-workflow - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/actions/runs/{run_id}/rerun", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsReRunWorkflowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.actions_re_run_workflow_201_application_json_object = out

        return res

    
    def actions_remove_repo_access_to_self_hosted_runner_group_in_org(self, request: operations.ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgRequest) -> operations.ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgResponse:
        r"""Remove repository access to a self-hosted runner group in an organization
        Removes a repository from the list of selected repositories that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see \"[Create a self-hosted runner group for an organization](#create-a-self-hosted-runner-group-for-an-organization).\"
        You must authenticate using an access token with the `admin:org` scope to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#remove-repository-access-to-a-self-hosted-runner-group-in-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/actions/runner-groups/{runner_group_id}/repositories/{repository_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def actions_remove_selected_repo_from_org_secret(self, request: operations.ActionsRemoveSelectedRepoFromOrgSecretRequest) -> operations.ActionsRemoveSelectedRepoFromOrgSecretResponse:
        r"""Remove selected repository from an organization secret
        Removes a repository from an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@3.0/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#remove-selected-repository-from-an-organization-secret - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsRemoveSelectedRepoFromOrgSecretResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 409:
            pass

        return res

    
    def actions_remove_self_hosted_runner_from_group_for_org(self, request: operations.ActionsRemoveSelfHostedRunnerFromGroupForOrgRequest) -> operations.ActionsRemoveSelfHostedRunnerFromGroupForOrgResponse:
        r"""Remove a self-hosted runner from a group for an organization
        Removes a self-hosted runner from a group configured in an organization. The runner is then returned to the default group.
        You must authenticate using an access token with the `admin:org` scope to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/actions/runner-groups/{runner_group_id}/runners/{runner_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsRemoveSelfHostedRunnerFromGroupForOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def actions_set_allowed_actions_organization(self, request: operations.ActionsSetAllowedActionsOrganizationRequest) -> operations.ActionsSetAllowedActionsOrganizationResponse:
        r"""Set allowed actions for an organization
        Sets the actions that are allowed in an organization. To use this endpoint, the organization permission policy for `allowed_actions` must be configured to `selected`. For more information, see \"[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization).\"
        
        If the organization belongs to an enterprise that has `selected` actions set at the enterprise level, then you cannot override any of the enterprise's allowed actions settings.
        
        To use the `patterns_allowed` setting for private repositories, the organization must belong to an enterprise. If the organization does not belong to an enterprise, then the `patterns_allowed` setting only applies to public repositories in the organization.
        
        You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#set-allowed-actions-for-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/actions/permissions/selected-actions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsSetAllowedActionsOrganizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def actions_set_allowed_actions_repository(self, request: operations.ActionsSetAllowedActionsRepositoryRequest) -> operations.ActionsSetAllowedActionsRepositoryResponse:
        r"""Set allowed actions for a repository
        Sets the actions that are allowed in a repository. To use this endpoint, the repository permission policy for `allowed_actions` must be configured to `selected`. For more information, see \"[Set GitHub Actions permissions for a repository](#set-github-actions-permissions-for-a-repository).\"
        
        If the repository belongs to an organization or enterprise that has `selected` actions set at the organization or enterprise levels, then you cannot override any of the allowed actions settings.
        
        To use the `patterns_allowed` setting for private repositories, the repository must belong to an enterprise. If the repository does not belong to an enterprise, then the `patterns_allowed` setting only applies to public repositories.
        
        You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#set-allowed-actions-for-a-repository - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/actions/permissions/selected-actions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsSetAllowedActionsRepositoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def actions_set_github_actions_permissions_organization(self, request: operations.ActionsSetGithubActionsPermissionsOrganizationRequest) -> operations.ActionsSetGithubActionsPermissionsOrganizationResponse:
        r"""Set GitHub Actions permissions for an organization
        Sets the GitHub Actions permissions policy for repositories and allowed actions in an organization.
        
        If the organization belongs to an enterprise that has set restrictive permissions at the enterprise level, such as `allowed_actions` to `selected` actions, then you cannot override them for the organization.
        
        You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#set-github-actions-permissions-for-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/actions/permissions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsSetGithubActionsPermissionsOrganizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def actions_set_github_actions_permissions_repository(self, request: operations.ActionsSetGithubActionsPermissionsRepositoryRequest) -> operations.ActionsSetGithubActionsPermissionsRepositoryResponse:
        r"""Set GitHub Actions permissions for a repository
        Sets the GitHub Actions permissions policy for enabling GitHub Actions and allowed actions in the repository.
        
        If the repository belongs to an organization or enterprise that has set restrictive permissions at the organization or enterprise levels, such as `allowed_actions` to `selected` actions, then you cannot override them for the repository.
        
        You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#set-github-actions-permissions-for-a-repository - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/actions/permissions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsSetGithubActionsPermissionsRepositoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def actions_set_repo_access_to_self_hosted_runner_group_in_org(self, request: operations.ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequest) -> operations.ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgResponse:
        r"""Set repository access for a self-hosted runner group in an organization
        Replaces the list of repositories that have access to a self-hosted runner group configured in an organization.
        You must authenticate using an access token with the `admin:org` scope to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#set-repository-access-to-a-self-hosted-runner-group-in-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/actions/runner-groups/{runner_group_id}/repositories", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def actions_set_selected_repos_for_org_secret(self, request: operations.ActionsSetSelectedReposForOrgSecretRequest) -> operations.ActionsSetSelectedReposForOrgSecretResponse:
        r"""Set selected repositories for an organization secret
        Replaces all repositories for an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@3.0/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#set-selected-repositories-for-an-organization-secret - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/actions/secrets/{secret_name}/repositories", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsSetSelectedReposForOrgSecretResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def actions_set_selected_repositories_enabled_github_actions_organization(self, request: operations.ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequest) -> operations.ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationResponse:
        r"""Set selected repositories enabled for GitHub Actions in an organization
        Replaces the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see \"[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization).\"
        
        You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#set-selected-repositories-enabled-for-github-actions-in-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/actions/permissions/repositories", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def actions_set_self_hosted_runners_in_group_for_org(self, request: operations.ActionsSetSelfHostedRunnersInGroupForOrgRequest) -> operations.ActionsSetSelfHostedRunnersInGroupForOrgResponse:
        r"""Set self-hosted runners in a group for an organization
        Replaces the list of self-hosted runners that are part of an organization runner group.
        You must authenticate using an access token with the `admin:org` scope to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/actions/runner-groups/{runner_group_id}/runners", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsSetSelfHostedRunnersInGroupForOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def actions_update_self_hosted_runner_group_for_org(self, request: operations.ActionsUpdateSelfHostedRunnerGroupForOrgRequest) -> operations.ActionsUpdateSelfHostedRunnerGroupForOrgResponse:
        r"""Update a self-hosted runner group for an organization
        Updates the `name` and `visibility` of a self-hosted runner group in an organization.
        You must authenticate using an access token with the `admin:org` scope to use this endpoint.
        https://docs.github.com/enterprise-server@3.0/rest/reference/actions#update-a-self-hosted-runner-group-for-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/actions/runner-groups/{runner_group_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsUpdateSelfHostedRunnerGroupForOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RunnerGroupsOrg])
                res.runner_groups_org = out

        return res

    