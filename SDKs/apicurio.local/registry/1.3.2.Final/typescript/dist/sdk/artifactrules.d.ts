import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ArtifactRules {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createArtifactRule - Create artifact rule
     *
     * Adds a rule to the list of rules that get applied to the artifact when adding new
     * versions.  All configured rules must pass to successfully add a new artifact version.
     *
     * This operation can fail for the following reasons:
     *
     * * No artifact with this `artifactId` exists (HTTP error `404`)
     * * Rule (named in the request body) is unknown (HTTP error `400`)
     * * A server error occurred (HTTP error `500`)
    **/
    createArtifactRule(req: operations.CreateArtifactRuleRequest, config?: AxiosRequestConfig): Promise<operations.CreateArtifactRuleResponse>;
    /**
     * deleteArtifactRule - Delete artifact rule
     *
     * Deletes a rule from the artifact.  This results in the rule no longer applying for
     * this artifact.  If this is the only rule configured for the artifact, this is the
     * same as deleting **all** rules, and the globally configured rules now apply to
     * this artifact.
     *
     * This operation can fail for the following reasons:
     *
     * * No artifact with this `artifactId` exists (HTTP error `404`)
     * * No rule with this name/type is configured for this artifact (HTTP error `404`)
     * * Invalid rule type (HTTP error `400`)
     * * A server error occurred (HTTP error `500`)
    **/
    deleteArtifactRule(req: operations.DeleteArtifactRuleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteArtifactRuleResponse>;
    /**
     * deleteArtifactRules - Delete artifact rules
     *
     * Deletes all of the rules configured for the artifact.  After this is done, the global
     * rules apply to the artifact again.
     *
     * This operation can fail for the following reasons:
     *
     * * No artifact with this `artifactId` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
    **/
    deleteArtifactRules(req: operations.DeleteArtifactRulesRequest, config?: AxiosRequestConfig): Promise<operations.DeleteArtifactRulesResponse>;
    /**
     * getArtifactRuleConfig - Get artifact rule configuration
     *
     * Returns information about a single rule configured for an artifact.  This is useful
     * when you want to know what the current configuration settings are for a specific rule.
     *
     * This operation can fail for the following reasons:
     *
     * * No artifact with this `artifactId` exists (HTTP error `404`)
     * * No rule with this name/type is configured for this artifact (HTTP error `404`)
     * * Invalid rule type (HTTP error `400`)
     * * A server error occurred (HTTP error `500`)
    **/
    getArtifactRuleConfig(req: operations.GetArtifactRuleConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetArtifactRuleConfigResponse>;
    /**
     * listArtifactRules - List artifact rules
     *
     * Returns a list of all rules configured for the artifact.  The set of rules determines
     * how the content of an artifact can evolve over time.  If no rules are configured for
     * an artifact, the set of globally configured rules are used.  If no global rules
     * are defined, there are no restrictions on content evolution.
     *
     * This operation can fail for the following reasons:
     *
     * * No artifact with this `artifactId` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
    **/
    listArtifactRules(req: operations.ListArtifactRulesRequest, config?: AxiosRequestConfig): Promise<operations.ListArtifactRulesResponse>;
    /**
     * testUpdateArtifact - Test update artifact
     *
     * Tests whether an update to the artifact's content *would* succeed for the provided content.
     * Ultimately, this applies any rules configured for the artifact against the given content
     * to determine whether the rules would pass or fail, but without actually updating the artifact
     * content.
     *
     * The body of the request should be the raw content of the artifact.  This is typically in
     * JSON format for *most* of the supported types, but may be in another format for a few
     * (for example, `PROTOBUF`).
     *
     * The registry attempts to figure out what kind of artifact is being added from the following  supported list:
     *
     * * Avro (`AVRO`)
     * * Protobuf (`PROTOBUF`)
     * * Protobuf File Descriptor (`PROTOBUF_FD`)
     * * JSON Schema (`JSON`)
     * * Kafka Connect (`KCONNECT`)
     * * OpenAPI (`OPENAPI`)
     * * AsyncAPI (`ASYNCAPI`)
     * * GraphQL (`GRAPHQL`)
     * * Web Services Description Language (`WSDL`)
     * * XML Schema (`XSD`)
     *
     * Alternatively, you can explicitly specify the artifact type using the `X-Registry-ArtifactType`
     * HTTP request header, or by including a hint in the request's `Content-Type`.  For example:
     *
     * ```
     * Content-Type: application/json; artifactType=AVRO
     * ```
     *
     * The update could fail for a number of reasons including:
     *
     * * Provided content (request body) was empty (HTTP error `400`)
     * * No artifact with the `artifactId` exists (HTTP error `404`)
     * * The new content violates one of the rules configured for the artifact (HTTP error `409`)
     * * The provided artifact type is not recognized (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     *
     * When successful, this operation simply returns a *No Content* response.
    **/
    testUpdateArtifact(req: operations.TestUpdateArtifactRequest, config?: AxiosRequestConfig): Promise<operations.TestUpdateArtifactResponse>;
    /**
     * updateArtifactRuleConfig - Update artifact rule configuration
     *
     * Updates the configuration of a single rule for the artifact.  The configuration data
     * is specific to each rule type, so the configuration of the `COMPATIBILITY` rule
     * is in a different format from the configuration of the `VALIDITY` rule.
     *
     * This operation can fail for the following reasons:
     *
     * * No artifact with this `artifactId` exists (HTTP error `404`)
     * * No rule with this name/type is configured for this artifact (HTTP error `404`)
     * * Invalid rule type (HTTP error `400`)
     * * A server error occurred (HTTP error `500`)
     *
    **/
    updateArtifactRuleConfig(req: operations.UpdateArtifactRuleConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateArtifactRuleConfigResponse>;
}
