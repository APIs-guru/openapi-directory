import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Metadata {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteArtifactVersionMetaData - Delete artifact version metadata
     *
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
    deleteArtifactVersionMetaData(req: operations.DeleteArtifactVersionMetaDataRequest, config?: AxiosRequestConfig): Promise<operations.DeleteArtifactVersionMetaDataResponse>;
    /**
     * getArtifactMetaData - Get artifact metadata
     *
     * Gets the metadata for an artifact in the registry.  The returned metadata includes
     * both generated (read-only) and editable metadata (such as name and description).
     *
     * This operation can fail for the following reasons:
     *
     * * No artifact with this `artifactId` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
    **/
    getArtifactMetaData(req: operations.GetArtifactMetaDataRequest, config?: AxiosRequestConfig): Promise<operations.GetArtifactMetaDataResponse>;
    /**
     * getArtifactMetaDataByContent - Get artifact metadata by content
     *
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
    getArtifactMetaDataByContent(req: operations.GetArtifactMetaDataByContentRequest, config?: AxiosRequestConfig): Promise<operations.GetArtifactMetaDataByContentResponse>;
    /**
     * getArtifactMetaDataByGlobalId - Get global artifact metadata
     *
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
    getArtifactMetaDataByGlobalId(req: operations.GetArtifactMetaDataByGlobalIdRequest, config?: AxiosRequestConfig): Promise<operations.GetArtifactMetaDataByGlobalIdResponse>;
    /**
     * getArtifactVersionMetaData - Get artifact version metadata
     *
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
    getArtifactVersionMetaData(req: operations.GetArtifactVersionMetaDataRequest, config?: AxiosRequestConfig): Promise<operations.GetArtifactVersionMetaDataResponse>;
    /**
     * updateArtifactMetaData - Update artifact metadata
     *
     * Updates the editable parts of the artifact's metadata.  Not all metadata fields can
     * be updated.  For example, `createdOn` and `createdBy` are both read-only properties.
     *
     * This operation can fail for the following reasons:
     *
     * * No artifact with the `artifactId` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
    **/
    updateArtifactMetaData(req: operations.UpdateArtifactMetaDataRequest, config?: AxiosRequestConfig): Promise<operations.UpdateArtifactMetaDataResponse>;
    /**
     * updateArtifactVersionMetaData - Update artifact version metadata
     *
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
    updateArtifactVersionMetaData(req: operations.UpdateArtifactVersionMetaDataRequest, config?: AxiosRequestConfig): Promise<operations.UpdateArtifactVersionMetaDataResponse>;
}
