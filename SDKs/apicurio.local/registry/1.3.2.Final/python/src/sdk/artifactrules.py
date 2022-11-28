import requests
from typing import List,Optional
from enum import Enum
from sdk.models import shared, operations
from . import utils

class ArtifactRules:
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

    
    def create_artifact_rule(self, request: operations.CreateArtifactRuleRequest) -> operations.CreateArtifactRuleResponse:
        r"""Create artifact rule
        Adds a rule to the list of rules that get applied to the artifact when adding new
        versions.  All configured rules must pass to successfully add a new artifact version.
        
        This operation can fail for the following reasons:
        
        * No artifact with this `artifactId` exists (HTTP error `404`)
        * Rule (named in the request body) is unknown (HTTP error `400`)
        * A server error occurred (HTTP error `500`)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/artifacts/{artifactId}/rules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateArtifactRuleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def delete_artifact_rule(self, request: operations.DeleteArtifactRuleRequest) -> operations.DeleteArtifactRuleResponse:
        r"""Delete artifact rule
        Deletes a rule from the artifact.  This results in the rule no longer applying for
        this artifact.  If this is the only rule configured for the artifact, this is the 
        same as deleting **all** rules, and the globally configured rules now apply to
        this artifact.
        
        This operation can fail for the following reasons:
        
        * No artifact with this `artifactId` exists (HTTP error `404`)
        * No rule with this name/type is configured for this artifact (HTTP error `404`)
        * Invalid rule type (HTTP error `400`)
        * A server error occurred (HTTP error `500`)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/artifacts/{artifactId}/rules/{rule}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteArtifactRuleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def delete_artifact_rules(self, request: operations.DeleteArtifactRulesRequest) -> operations.DeleteArtifactRulesResponse:
        r"""Delete artifact rules
        Deletes all of the rules configured for the artifact.  After this is done, the global
        rules apply to the artifact again.
        
        This operation can fail for the following reasons:
        
        * No artifact with this `artifactId` exists (HTTP error `404`)
        * A server error occurred (HTTP error `500`)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/artifacts/{artifactId}/rules", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteArtifactRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_artifact_rule_config(self, request: operations.GetArtifactRuleConfigRequest) -> operations.GetArtifactRuleConfigResponse:
        r"""Get artifact rule configuration
        Returns information about a single rule configured for an artifact.  This is useful
        when you want to know what the current configuration settings are for a specific rule.
        
        This operation can fail for the following reasons:
        
        * No artifact with this `artifactId` exists (HTTP error `404`)
        * No rule with this name/type is configured for this artifact (HTTP error `404`)
        * Invalid rule type (HTTP error `400`)
        * A server error occurred (HTTP error `500`)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/artifacts/{artifactId}/rules/{rule}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetArtifactRuleConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Rule])
                res.rule = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def list_artifact_rules(self, request: operations.ListArtifactRulesRequest) -> operations.ListArtifactRulesResponse:
        r"""List artifact rules
        Returns a list of all rules configured for the artifact.  The set of rules determines
        how the content of an artifact can evolve over time.  If no rules are configured for
        an artifact, the set of globally configured rules are used.  If no global rules 
        are defined, there are no restrictions on content evolution.
        
        This operation can fail for the following reasons:
        
        * No artifact with this `artifactId` exists (HTTP error `404`)
        * A server error occurred (HTTP error `500`)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/artifacts/{artifactId}/rules", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListArtifactRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RuleTypeEnum]])
                res.rule_types = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def test_update_artifact(self, request: operations.TestUpdateArtifactRequest) -> operations.TestUpdateArtifactResponse:
        r"""Test update artifact
        Tests whether an update to the artifact's content *would* succeed for the provided content.
        Ultimately, this applies any rules configured for the artifact against the given content
        to determine whether the rules would pass or fail, but without actually updating the artifact
        content.
        
        The body of the request should be the raw content of the artifact.  This is typically in 
        JSON format for *most* of the supported types, but may be in another format for a few 
        (for example, `PROTOBUF`).
        
        The registry attempts to figure out what kind of artifact is being added from the following  supported list: 
        
        * Avro (`AVRO`)  
        * Protobuf (`PROTOBUF`)  
        * Protobuf File Descriptor (`PROTOBUF_FD`)  
        * JSON Schema (`JSON`)  
        * Kafka Connect (`KCONNECT`) 
        * OpenAPI (`OPENAPI`)  
        * AsyncAPI (`ASYNCAPI`) 
        * GraphQL (`GRAPHQL`) 
        * Web Services Description Language (`WSDL`) 
        * XML Schema (`XSD`)
        
        Alternatively, you can explicitly specify the artifact type using the `X-Registry-ArtifactType` 
        HTTP request header, or by including a hint in the request's `Content-Type`.  For example:
        
        ```
        Content-Type: application/json; artifactType=AVRO
        ```
        
        The update could fail for a number of reasons including:
        
        * Provided content (request body) was empty (HTTP error `400`)
        * No artifact with the `artifactId` exists (HTTP error `404`)
        * The new content violates one of the rules configured for the artifact (HTTP error `409`)
        * The provided artifact type is not recognized (HTTP error `404`)
        * A server error occurred (HTTP error `500`)
        
        When successful, this operation simply returns a *No Content* response.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/artifacts/{artifactId}/test", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TestUpdateArtifactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def update_artifact_rule_config(self, request: operations.UpdateArtifactRuleConfigRequest) -> operations.UpdateArtifactRuleConfigResponse:
        r"""Update artifact rule configuration
        Updates the configuration of a single rule for the artifact.  The configuration data
        is specific to each rule type, so the configuration of the `COMPATIBILITY` rule 
        is in a different format from the configuration of the `VALIDITY` rule.
        
        This operation can fail for the following reasons:
        
        * No artifact with this `artifactId` exists (HTTP error `404`)
        * No rule with this name/type is configured for this artifact (HTTP error `404`)
        * Invalid rule type (HTTP error `400`)
        * A server error occurred (HTTP error `500`)
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/artifacts/{artifactId}/rules/{rule}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateArtifactRuleConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Rule])
                res.rule = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    