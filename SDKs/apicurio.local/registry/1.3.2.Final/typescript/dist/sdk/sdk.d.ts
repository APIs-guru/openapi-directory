import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Creates a new artifact by posting the artifact content.  The body of the request should
     * be the raw content of the artifact.  This is typically in JSON format for *most* of the
     * supported types, but may be in another format for a few (for example, `PROTOBUF`).
     *
     * The registry attempts to figure out what kind of artifact is being added from the
     * following supported list:
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
     * Alternatively, you can specify the artifact type using the `X-Registry-ArtifactType`
     * HTTP request header, or include a hint in the request's `Content-Type`.  For example:
     *
     * ```
     * Content-Type: application/json; artifactType=AVRO
     * ```
     *
     * An artifact is created using the content provided in the body of the request.  This
     * content is created under a unique artifact ID that can be provided in the request
     * using the `X-Registry-ArtifactId` request header.  If not provided in the request,
     * the server generates a unique ID for the artifact.  It is typically recommended
     * that callers provide the ID, because this is typically a meaningful identifier,
     * and for most use cases should be supplied by the caller.
     *
     * If an artifact with the provided artifact ID already exists, the default behavior
     * is for the server to reject the content with a 409 error.  However, the caller can
     * supply the `ifExists` query parameter to alter this default behavior. The `ifExists`
     * query parameter can have one of the following values:
     *
     * * `FAIL` (*default*) - server rejects the content with a 409 error
     * * `UPDATE` - server updates the existing artifact and returns the new metadata
     * * `RETURN` - server does not create or add content to the server, but instead
     * returns the metadata for the existing artifact
     * * `RETURN_OR_UPDATE` - server returns an existing **version** that matches the
     * provided content if such a version exists, otherwise a new version is created
     *
     * This operation may fail for one of the following reasons:
     *
     * * An invalid `ArtifactType` was indicated (HTTP error `400`)
     * * No `ArtifactType` was indicated and the server could not determine one from the content (HTTP error `400`)
     * * Provided content (request body) was empty (HTTP error `400`)
     * * An artifact with the provided ID already exists (HTTP error `409`)
     * * The content violates one of the configured global rules (HTTP error `409`)
     * * A server error occurred (HTTP error `500`)
     *
    **/
    CreateArtifact(req: operations.CreateArtifactRequest, config?: AxiosRequestConfig): Promise<operations.CreateArtifactResponse>;
    /**
     * Adds a rule to the list of rules that get applied to the artifact when adding new
     * versions.  All configured rules must pass to successfully add a new artifact version.
     *
     * This operation can fail for the following reasons:
     *
     * * No artifact with this `artifactId` exists (HTTP error `404`)
     * * Rule (named in the request body) is unknown (HTTP error `400`)
     * * A server error occurred (HTTP error `500`)
    **/
    CreateArtifactRule(req: operations.CreateArtifactRuleRequest, config?: AxiosRequestConfig): Promise<operations.CreateArtifactRuleResponse>;
    /**
     * Creates a new version of the artifact by uploading new content.  The configured rules for
     * the artifact are applied, and if they all pass, the new content is added as the most recent
     * version of the artifact.  If any of the rules fail, an error is returned.
     *
     * The body of the request should be the raw content of the new artifact version.  This
     * is typically in JSON format for *most* of the supported types, but may be in another
     * format for a few (for example, `PROTOBUF`).
     *
     * The registry attempts to figure out what kind of artifact is being added from the
     * following supported list:
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
     * HTTP request header, or by including a hint in the request's `Content-Type`.
     *
     * For example:
     *
     * ```
     * Content-Type: application/json; artifactType=AVRO
     * ```
     *
     * This operation can fail for the following reasons:
     *
     * * Provided content (request body) was empty (HTTP error `400`)
     * * No artifact with this `artifactId` exists (HTTP error `404`)
     * * The new content violates one of the rules configured for the artifact (HTTP error `409`)
     * * A server error occurred (HTTP error `500`)
     *
    **/
    CreateArtifactVersion(req: operations.CreateArtifactVersionRequest, config?: AxiosRequestConfig): Promise<operations.CreateArtifactVersionResponse>;
    /**
     * Adds a rule to the list of globally configured rules.
     *
     * This operation can fail for the following reasons:
     *
     * * The rule type is unknown (HTTP error `400`)
     * * The rule already exists (HTTP error `409`)
     * * A server error occurred (HTTP error `500`)
     *
    **/
    CreateGlobalRule(req: operations.CreateGlobalRuleRequest, config?: AxiosRequestConfig): Promise<operations.CreateGlobalRuleResponse>;
    /**
     * Deletes all globally configured rules.
     *
     * This operation can fail for the following reasons:
     *
     * * A server error occurred (HTTP error `500`)
     *
    **/
    DeleteAllGlobalRules(config?: AxiosRequestConfig): Promise<operations.DeleteAllGlobalRulesResponse>;
    /**
     * Deletes an artifact completely, resulting in all versions of the artifact also being
     * deleted.  This may fail for one of the following reasons:
     *
     * * No artifact with the `artifactId` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
    **/
    DeleteArtifact(req: operations.DeleteArtifactRequest, config?: AxiosRequestConfig): Promise<operations.DeleteArtifactResponse>;
    /**
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
    DeleteArtifactRule(req: operations.DeleteArtifactRuleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteArtifactRuleResponse>;
    /**
     * Deletes all of the rules configured for the artifact.  After this is done, the global
     * rules apply to the artifact again.
     *
     * This operation can fail for the following reasons:
     *
     * * No artifact with this `artifactId` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
    **/
    DeleteArtifactRules(req: operations.DeleteArtifactRulesRequest, config?: AxiosRequestConfig): Promise<operations.DeleteArtifactRulesResponse>;
    /**
     * Deletes the user-editable metadata properties of the artifact version.  Any properties
     * that are not user-editable are preserved.
     *
     * This operation can fail for the following reasons:
     *
     * * No artifact with this `artifactId` exists (HTTP error `404`)
     * * No version with this `version` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     *
    **/
    DeleteArtifactVersionMetaData(req: operations.DeleteArtifactVersionMetaDataRequest, config?: AxiosRequestConfig): Promise<operations.DeleteArtifactVersionMetaDataResponse>;
    /**
     * Deletes a single global rule.  If this is the only rule configured, this is the same
     * as deleting **all** rules.
     *
     * This operation can fail for the following reasons:
     *
     * * Invalid rule name/type (HTTP error `400`)
     * * No rule with name/type `rule` exists (HTTP error `404`)
     * * Rule cannot be deleted (HTTP error `409`)
     * * A server error occurred (HTTP error `500`)
     *
    **/
    DeleteGlobalRule(req: operations.DeleteGlobalRuleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGlobalRuleResponse>;
    /**
     * Gets the content for an artifact version in the registry using its globally unique
     * identifier.
     *
     * This operation may fail for one of the following reasons:
     *
     * * No artifact version with this `globalId` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     *
    **/
    GetArtifactByGlobalId(req: operations.GetArtifactByGlobalIdRequest, config?: AxiosRequestConfig): Promise<operations.GetArtifactByGlobalIdResponse>;
    /**
     * Gets the metadata for an artifact in the registry.  The returned metadata includes
     * both generated (read-only) and editable metadata (such as name and description).
     *
     * This operation can fail for the following reasons:
     *
     * * No artifact with this `artifactId` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
    **/
    GetArtifactMetaData(req: operations.GetArtifactMetaDataRequest, config?: AxiosRequestConfig): Promise<operations.GetArtifactMetaDataResponse>;
    /**
     * Gets the metadata for an artifact that matches the raw content.  Searches the registry
     * for a version of the given artifact matching the content provided in the body of the
     * POST.
     *
     * This operation can fail for the following reasons:
     *
     * * Provided content (request body) was empty (HTTP error `400`)
     * * No artifact with the `artifactId` exists (HTTP error `404`)
     * * No artifact version matching the provided content exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     *
    **/
    GetArtifactMetaDataByContent(req: operations.GetArtifactMetaDataByContentRequest, config?: AxiosRequestConfig): Promise<operations.GetArtifactMetaDataByContentResponse>;
    /**
     * Gets the metadata for an artifact version in the registry using its globally unique
     * identifier.  The returned metadata includes both generated (read-only) and editable
     * metadata (such as name and description).
     *
     * This operation may fail for one of the following reasons:
     *
     * * No artifact version with this `globalId` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     *
    **/
    GetArtifactMetaDataByGlobalId(req: operations.GetArtifactMetaDataByGlobalIdRequest, config?: AxiosRequestConfig): Promise<operations.GetArtifactMetaDataByGlobalIdResponse>;
    /**
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
    GetArtifactRuleConfig(req: operations.GetArtifactRuleConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetArtifactRuleConfigResponse>;
    /**
     * Retrieves a single version of the artifact content.  Both the `artifactId` and the
     * unique `version` number must be provided.  The `Content-Type` of the response depends
     * on the artifact type.  In most cases, this is `application/json`, but for some types
     * it may be different (for example, `PROTOBUF`).
     *
     * This operation can fail for the following reasons:
     *
     * * No artifact with this `artifactId` exists (HTTP error `404`)
     * * No version with this `version` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     *
    **/
    GetArtifactVersion(req: operations.GetArtifactVersionRequest, config?: AxiosRequestConfig): Promise<operations.GetArtifactVersionResponse>;
    /**
     * Retrieves the metadata for a single version of the artifact.  The version metadata is
     * a subset of the artifact metadata and only includes the metadata that is specific to
     * the version (for example, this doesn't include `modifiedOn`).
     *
     * This operation can fail for the following reasons:
     *
     * * No artifact with this `artifactId` exists (HTTP error `404`)
     * * No version with this `version` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     *
    **/
    GetArtifactVersionMetaData(req: operations.GetArtifactVersionMetaDataRequest, config?: AxiosRequestConfig): Promise<operations.GetArtifactVersionMetaDataResponse>;
    /**
     * Returns information about the named globally configured rule.
     *
     * This operation can fail for the following reasons:
     *
     * * Invalid rule name/type (HTTP error `400`)
     * * No rule with name/type `rule` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     *
    **/
    GetGlobalRuleConfig(req: operations.GetGlobalRuleConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetGlobalRuleConfigResponse>;
    /**
     * Returns the latest version of the artifact in its raw form.  The `Content-Type` of the
     * response depends on the artifact type.  In most cases, this is `application/json`, but
     * for some types it may be different (for example, `PROTOBUF`).
     *
     * This operation may fail for one of the following reasons:
     *
     * * No artifact with this `artifactId` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     *
    **/
    GetLatestArtifact(req: operations.GetLatestArtifactRequest, config?: AxiosRequestConfig): Promise<operations.GetLatestArtifactResponse>;
    /**
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
    ListArtifactRules(req: operations.ListArtifactRulesRequest, config?: AxiosRequestConfig): Promise<operations.ListArtifactRulesResponse>;
    /**
     * Returns a list of all version numbers for the artifact.
     *
     * This operation can fail for the following reasons:
     *
     * * No artifact with this `artifactId` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     *
    **/
    ListArtifactVersions(req: operations.ListArtifactVersionsRequest, config?: AxiosRequestConfig): Promise<operations.ListArtifactVersionsResponse>;
    /**
     * Returns a list of IDs of all artifacts in the registry as a flat list.  Typically the
     * server is configured to limit the number of artifact IDs returned when a large number
     * of artifacts exist. In this case, the result of this call may be non-deterministic. The
     * default limit is typically 1000 artifacts.
    **/
    ListArtifacts(config?: AxiosRequestConfig): Promise<operations.ListArtifactsResponse>;
    /**
     * Gets a list of all the currently configured global rules (if any).
     *
     * This operation can fail for the following reasons:
     *
     * * A server error occurred (HTTP error `500`)
     *
    **/
    ListGlobalRules(config?: AxiosRequestConfig): Promise<operations.ListGlobalRulesResponse>;
    /**
     * Returns a paginated list of all artifacts that match the provided search criteria.
     *
    **/
    SearchArtifacts(req: operations.SearchArtifactsRequest, config?: AxiosRequestConfig): Promise<operations.SearchArtifactsResponse>;
    /**
     * Searches for versions of a specific artifact.  This is typically used to get a listing
     * of all versions of an artifact (for example, in a user interface).
    **/
    SearchVersions(req: operations.SearchVersionsRequest, config?: AxiosRequestConfig): Promise<operations.SearchVersionsResponse>;
    /**
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
    TestUpdateArtifact(req: operations.TestUpdateArtifactRequest, config?: AxiosRequestConfig): Promise<operations.TestUpdateArtifactResponse>;
    /**
     * Updates an artifact by uploading new content.  The body of the request should
     * be the raw content of the artifact.  This is typically in JSON format for *most*
     * of the supported types, but may be in another format for a few (for example, `PROTOBUF`).
     *
     * The registry attempts to figure out what kind of artifact is being added from the
     * following supported list:
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
     * Alternatively, you can specify the artifact type using the `X-Registry-ArtifactType`
     * HTTP request header, or include a hint in the request's `Content-Type`.  For example:
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
     * When successful, this creates a new version of the artifact, making it the most recent
     * (and therefore official) version of the artifact.
    **/
    UpdateArtifact(req: operations.UpdateArtifactRequest, config?: AxiosRequestConfig): Promise<operations.UpdateArtifactResponse>;
    /**
     * Updates the editable parts of the artifact's metadata.  Not all metadata fields can
     * be updated.  For example, `createdOn` and `createdBy` are both read-only properties.
     *
     * This operation can fail for the following reasons:
     *
     * * No artifact with the `artifactId` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
    **/
    UpdateArtifactMetaData(req: operations.UpdateArtifactMetaDataRequest, config?: AxiosRequestConfig): Promise<operations.UpdateArtifactMetaDataResponse>;
    /**
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
    UpdateArtifactRuleConfig(req: operations.UpdateArtifactRuleConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateArtifactRuleConfigResponse>;
    /**
     * Updates the state of the artifact.  For example, you can use this to mark the latest
     * version of an artifact as `DEPRECATED`.  The operation changes the state of the latest
     * version of the artifact.  If multiple versions exist, only the most recent is changed.
     *
     * The following state changes are supported:
     *
     * * Enabled -> Disabled
     * * Enabled -> Deprecated
     * * Enabled -> Deleted
     * * Disabled -> Enabled
     * * Disabled -> Deleted
     * * Disabled -> Deprecated
     * * Deprecated -> Deleted
     *
     * This operation can fail for the following reasons:
     *
     * * No artifact with this `artifactId` exists (HTTP error `404`)
     * * Artifact cannot transition to the given state (HTTP error `400`)
     * * A server error occurred (HTTP error `500`)
     *
    **/
    UpdateArtifactState(req: operations.UpdateArtifactStateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateArtifactStateResponse>;
    /**
     * Updates the user-editable portion of the artifact version's metadata.  Only some of
     * the metadata fields are editable by the user.  For example, `description` is editable,
     * but `createdOn` is not.
     *
     * This operation can fail for the following reasons:
     *
     * * No artifact with this `artifactId` exists (HTTP error `404`)
     * * No version with this `version` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     *
    **/
    UpdateArtifactVersionMetaData(req: operations.UpdateArtifactVersionMetaDataRequest, config?: AxiosRequestConfig): Promise<operations.UpdateArtifactVersionMetaDataResponse>;
    /**
     * Updates the state of a specific version of an artifact.  For example, you can use
     * this operation to disable a specific version.
     *
     * The following state changes are supported:
     *
     * * Enabled -> Disabled
     * * Enabled -> Deprecated
     * * Enabled -> Deleted
     * * Disabled -> Enabled
     * * Disabled -> Deleted
     * * Disabled -> Deprecated
     * * Deprecated -> Deleted
     *
     * This operation can fail for the following reasons:
     *
     * * No artifact with this `artifactId` exists (HTTP error `404`)
     * * No version with this `version` exists (HTTP error `404`)
     * * Artifact version cannot transition to the given state (HTTP error `400`)
     * * A server error occurred (HTTP error `500`)
     *
    **/
    UpdateArtifactVersionState(req: operations.UpdateArtifactVersionStateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateArtifactVersionStateResponse>;
    /**
     * Updates the configuration for a globally configured rule.
     *
     * This operation can fail for the following reasons:
     *
     * * Invalid rule name/type (HTTP error `400`)
     * * No rule with name/type `rule` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     *
    **/
    UpdateGlobalRuleConfig(req: operations.UpdateGlobalRuleConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGlobalRuleConfigResponse>;
}
export {};
