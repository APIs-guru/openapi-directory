import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Versions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createArtifactVersion - Create artifact version
     *
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
    createArtifactVersion(req: operations.CreateArtifactVersionRequest, config?: AxiosRequestConfig): Promise<operations.CreateArtifactVersionResponse>;
    /**
     * getArtifactVersion - Get artifact version
     *
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
    getArtifactVersion(req: operations.GetArtifactVersionRequest, config?: AxiosRequestConfig): Promise<operations.GetArtifactVersionResponse>;
    /**
     * listArtifactVersions - List artifact versions
     *
     * Returns a list of all version numbers for the artifact.
     *
     * This operation can fail for the following reasons:
     *
     * * No artifact with this `artifactId` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     *
    **/
    listArtifactVersions(req: operations.ListArtifactVersionsRequest, config?: AxiosRequestConfig): Promise<operations.ListArtifactVersionsResponse>;
    /**
     * searchVersions - Search artifact versions
     *
     * Searches for versions of a specific artifact.  This is typically used to get a listing
     * of all versions of an artifact (for example, in a user interface).
    **/
    searchVersions(req: operations.SearchVersionsRequest, config?: AxiosRequestConfig): Promise<operations.SearchVersionsResponse>;
    /**
     * updateArtifactVersionState - Update artifact version state
     *
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
    updateArtifactVersionState(req: operations.UpdateArtifactVersionStateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateArtifactVersionStateResponse>;
}
