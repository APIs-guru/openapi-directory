import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Artifacts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createArtifact - Create artifact
     *
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
    createArtifact(req: operations.CreateArtifactRequest, config?: AxiosRequestConfig): Promise<operations.CreateArtifactResponse>;
    /**
     * deleteArtifact - Delete artifact
     *
     * Deletes an artifact completely, resulting in all versions of the artifact also being
     * deleted.  This may fail for one of the following reasons:
     *
     * * No artifact with the `artifactId` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
    **/
    deleteArtifact(req: operations.DeleteArtifactRequest, config?: AxiosRequestConfig): Promise<operations.DeleteArtifactResponse>;
    /**
     * getArtifactByGlobalId - Get artifact by global ID
     *
     * Gets the content for an artifact version in the registry using its globally unique
     * identifier.
     *
     * This operation may fail for one of the following reasons:
     *
     * * No artifact version with this `globalId` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     *
    **/
    getArtifactByGlobalId(req: operations.GetArtifactByGlobalIdRequest, config?: AxiosRequestConfig): Promise<operations.GetArtifactByGlobalIdResponse>;
    /**
     * getLatestArtifact - Get latest artifact
     *
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
    getLatestArtifact(req: operations.GetLatestArtifactRequest, config?: AxiosRequestConfig): Promise<operations.GetLatestArtifactResponse>;
    /**
     * listArtifacts - List all artifact IDs
     *
     * Returns a list of IDs of all artifacts in the registry as a flat list.  Typically the
     * server is configured to limit the number of artifact IDs returned when a large number
     * of artifacts exist. In this case, the result of this call may be non-deterministic. The
     * default limit is typically 1000 artifacts.
    **/
    listArtifacts(config?: AxiosRequestConfig): Promise<operations.ListArtifactsResponse>;
    /**
     * searchArtifacts - Search for artifacts
     *
     * Returns a paginated list of all artifacts that match the provided search criteria.
     *
    **/
    searchArtifacts(req: operations.SearchArtifactsRequest, config?: AxiosRequestConfig): Promise<operations.SearchArtifactsResponse>;
    /**
     * updateArtifact - Update artifact
     *
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
    updateArtifact(req: operations.UpdateArtifactRequest, config?: AxiosRequestConfig): Promise<operations.UpdateArtifactResponse>;
    /**
     * updateArtifactState - Update artifact state
     *
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
    updateArtifactState(req: operations.UpdateArtifactStateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateArtifactStateResponse>;
}
