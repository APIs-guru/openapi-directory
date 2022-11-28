import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Search:
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

    
    def search_code(self, request: operations.SearchCodeRequest) -> operations.SearchCodeResponse:
        r"""Search code
        Searches for query terms inside of a file. This method returns up to 100 results [per page](https://docs.github.com/enterprise-server@2.18/rest/overview/resources-in-the-rest-api#pagination).
        
        When searching for code, you can get text match metadata for the file **content** and file **path** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/enterprise-server@2.18/rest/reference/search#text-match-metadata).
        
        For example, if you want to find the definition of the `addClass` function inside [jQuery](https://github.com/jquery/jquery) repository, your query would look something like this:
        
        `q=addClass+in:file+language:js+repo:jquery/jquery`
        
        This query searches for the keyword `addClass` within a file's contents. The query limits the search to files where the language is JavaScript in the `jquery/jquery` repository.
        
        #### Considerations for code search
        
        Due to the complexity of searching code, there are a few restrictions on how searches are performed:
        
        *   Only the _default branch_ is considered. In most cases, this will be the `master` branch.
        *   Only files smaller than 384 KB are searchable.
        *   You must always include at least one search term when searching source code. For example, searching for [`language:go`](https://github.com/search?utf8=%E2%9C%93&q=language%3Ago&type=Code) is not valid, while [`amazing
        language:go`](https://github.com/search?utf8=%E2%9C%93&q=amazing+language%3Ago&type=Code) is.
        https://docs.github.com/enterprise-server@2.18/rest/reference/search#search-code - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search/code"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SearchCode200ApplicationJSON])
                res.search_code_200_application_json_object = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SearchCode503ApplicationJSON])
                res.search_code_503_application_json_object = out

        return res

    
    def search_commits(self, request: operations.SearchCommitsRequest) -> operations.SearchCommitsResponse:
        r"""Search commits
        Find commits via various criteria on the default branch (usually `master`). This method returns up to 100 results [per page](https://docs.github.com/enterprise-server@2.18/rest/overview/resources-in-the-rest-api#pagination).
        
        When searching for commits, you can get text match metadata for the **message** field when you provide the `text-match` media type. For more details about how to receive highlighted search results, see [Text match
        metadata](https://docs.github.com/enterprise-server@2.18/rest/reference/search#text-match-metadata).
        
        For example, if you want to find commits related to CSS in the [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) repository. Your query would look something like this:
        
        `q=repo:octocat/Spoon-Knife+css`
        https://docs.github.com/enterprise-server@2.18/rest/reference/search#search-commits - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search/commits"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchCommitsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SearchCommits200ApplicationJSON])
                res.search_commits_200_application_json_object = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SearchCommits415ApplicationJSON])
                res.search_commits_415_application_json_object = out

        return res

    
    def search_issues_and_pull_requests(self, request: operations.SearchIssuesAndPullRequestsRequest) -> operations.SearchIssuesAndPullRequestsResponse:
        r"""Search issues and pull requests
        Find issues by state and keyword. This method returns up to 100 results [per page](https://docs.github.com/enterprise-server@2.18/rest/overview/resources-in-the-rest-api#pagination).
        
        When searching for issues, you can get text match metadata for the issue **title**, issue **body**, and issue **comment body** fields when you pass the `text-match` media type. For more details about how to receive highlighted
        search results, see [Text match metadata](https://docs.github.com/enterprise-server@2.18/rest/reference/search#text-match-metadata).
        
        For example, if you want to find the oldest unresolved Python bugs on Windows. Your query might look something like this.
        
        `q=windows+label:bug+language:python+state:open&sort=created&order=asc`
        
        This query searches for the keyword `windows`, within any open issue that is labeled as `bug`. The search runs across repositories whose primary language is Python. The results are sorted by creation date in ascending order, which means the oldest issues appear first in the search results.
        
        **Note:** For [user-to-server](https://docs.github.com/developers/apps/identifying-and-authorizing-users-for-github-apps#user-to-server-requests) GitHub App requests, you can't retrieve a combination of issues and pull requests in a single query. Requests that don't include the `is:issue` or `is:pull-request` qualifier will receive an HTTP `422 Unprocessable Entity` response. To get results for both issues and pull requests, you must send separate queries for issues and pull requests. For more information about the `is` qualifier, see \"[Searching only issues or pull requests](https://docs.github.com/github/searching-for-information-on-github/searching-issues-and-pull-requests#search-only-issues-or-pull-requests).\"
        https://docs.github.com/enterprise-server@2.18/rest/reference/search#search-issues-and-pull-requests - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search/issues"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchIssuesAndPullRequestsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SearchIssuesAndPullRequests200ApplicationJSON])
                res.search_issues_and_pull_requests_200_application_json_object = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SearchIssuesAndPullRequests503ApplicationJSON])
                res.search_issues_and_pull_requests_503_application_json_object = out

        return res

    
    def search_labels(self, request: operations.SearchLabelsRequest) -> operations.SearchLabelsResponse:
        r"""Search labels
        Find labels in a repository with names or descriptions that match search keywords. Returns up to 100 results [per page](https://docs.github.com/enterprise-server@2.18/rest/overview/resources-in-the-rest-api#pagination).
        
        When searching for labels, you can get text match metadata for the label **name** and **description** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/enterprise-server@2.18/rest/reference/search#text-match-metadata).
        
        For example, if you want to find labels in the `linguist` repository that match `bug`, `defect`, or `enhancement`. Your query might look like this:
        
        `q=bug+defect+enhancement&repository_id=64778136`
        
        The labels that best match the query appear first in the search results.
        https://docs.github.com/enterprise-server@2.18/rest/reference/search#search-labels - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search/labels"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchLabelsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SearchLabels200ApplicationJSON])
                res.search_labels_200_application_json_object = out
        elif r.status_code == 304:
            pass
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

    
    def search_repos(self, request: operations.SearchReposRequest) -> operations.SearchReposResponse:
        r"""Search repositories
        Find repositories via various criteria. This method returns up to 100 results [per page](https://docs.github.com/enterprise-server@2.18/rest/overview/resources-in-the-rest-api#pagination).
        
        When searching for repositories, you can get text match metadata for the **name** and **description** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/enterprise-server@2.18/rest/reference/search#text-match-metadata).
        
        For example, if you want to search for popular Tetris repositories written in assembly code, your query might look like this:
        
        `q=tetris+language:assembly&sort=stars&order=desc`
        
        This query searches for repositories with the word `tetris` in the name, the description, or the README. The results are limited to repositories where the primary language is assembly. The results are sorted by stars in descending order, so that the most popular repositories appear first in the search results.
        
        When you include the `mercy` preview header, you can also search for multiple topics by adding more `topic:` instances. For example, your query might look like this:
        
        `q=topic:ruby+topic:rails`
        https://docs.github.com/enterprise-server@2.18/rest/reference/search#search-repositories - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search/repositories"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchReposResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SearchRepos200ApplicationJSON])
                res.search_repos_200_application_json_object = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SearchRepos503ApplicationJSON])
                res.search_repos_503_application_json_object = out

        return res

    
    def search_topics(self, request: operations.SearchTopicsRequest) -> operations.SearchTopicsResponse:
        r"""Search topics
        Find topics via various criteria. Results are sorted by best match. This method returns up to 100 results [per page](https://docs.github.com/enterprise-server@2.18/rest/overview/resources-in-the-rest-api#pagination). See \"[Searching topics](https://help.github.com/articles/searching-topics/)\" for a detailed list of qualifiers.
        
        When searching for topics, you can get text match metadata for the topic's **short\_description**, **description**, **name**, or **display\_name** field when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/enterprise-server@2.18/rest/reference/search#text-match-metadata).
        
        For example, if you want to search for topics related to Ruby that are featured on https://github.com/topics. Your query might look like this:
        
        `q=ruby+is:featured`
        
        This query searches for topics with the keyword `ruby` and limits the results to find only topics that are featured. The topics that are the best match for the query appear first in the search results.
        https://docs.github.com/enterprise-server@2.18/rest/reference/search#search-topics - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search/topics"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTopicsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SearchTopics200ApplicationJSON])
                res.search_topics_200_application_json_object = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SearchTopics415ApplicationJSON])
                res.search_topics_415_application_json_object = out

        return res

    
    def search_users(self, request: operations.SearchUsersRequest) -> operations.SearchUsersResponse:
        r"""Search users
        Find users via various criteria. This method returns up to 100 results [per page](https://docs.github.com/enterprise-server@2.18/rest/overview/resources-in-the-rest-api#pagination).
        
        When searching for users, you can get text match metadata for the issue **login**, **email**, and **name** fields when you pass the `text-match` media type. For more details about highlighting search results, see [Text match metadata](https://docs.github.com/enterprise-server@2.18/rest/reference/search#text-match-metadata). For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/enterprise-server@2.18/rest/reference/search#text-match-metadata).
        
        For example, if you're looking for a list of popular users, you might try this query:
        
        `q=tom+repos:%3E42+followers:%3E1000`
        
        This query searches for users with the name `tom`. The results are restricted to users with more than 42 repositories and over 1,000 followers.
        https://docs.github.com/enterprise-server@2.18/rest/reference/search#search-users - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search/users"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchUsersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SearchUsers200ApplicationJSON])
                res.search_users_200_application_json_object = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SearchUsers503ApplicationJSON])
                res.search_users_503_application_json_object = out

        return res

    