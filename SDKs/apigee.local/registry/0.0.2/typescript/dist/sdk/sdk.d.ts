import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://apigee.local"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * registryCreateApi - CreateApi creates a specified API.
    **/
    registryCreateApi(req: operations.RegistryCreateApiRequest, config?: AxiosRequestConfig): Promise<operations.RegistryCreateApiResponse>;
    /**
     * registryCreateApiSpec - CreateApiSpec creates a specified spec.
    **/
    registryCreateApiSpec(req: operations.RegistryCreateApiSpecRequest, config?: AxiosRequestConfig): Promise<operations.RegistryCreateApiSpecResponse>;
    /**
     * registryCreateApiVersion - CreateApiVersion creates a specified version.
    **/
    registryCreateApiVersion(req: operations.RegistryCreateApiVersionRequest, config?: AxiosRequestConfig): Promise<operations.RegistryCreateApiVersionResponse>;
    /**
     * registryCreateArtifact - CreateArtifact creates a specified artifact.
    **/
    registryCreateArtifact(req: operations.RegistryCreateArtifactRequest, config?: AxiosRequestConfig): Promise<operations.RegistryCreateArtifactResponse>;
    /**
     * registryCreateProject - CreateProject creates a specified project.
    **/
    registryCreateProject(req: operations.RegistryCreateProjectRequest, config?: AxiosRequestConfig): Promise<operations.RegistryCreateProjectResponse>;
    /**
     * registryDeleteApi - DeleteApi removes a specified API and all of the resources that it owns.
    **/
    registryDeleteApi(req: operations.RegistryDeleteApiRequest, config?: AxiosRequestConfig): Promise<operations.RegistryDeleteApiResponse>;
    /**
     * registryDeleteApiSpec - DeleteApiSpec removes a specified spec, all revisions, and all child resources (e.g. artifacts).
    **/
    registryDeleteApiSpec(req: operations.RegistryDeleteApiSpecRequest, config?: AxiosRequestConfig): Promise<operations.RegistryDeleteApiSpecResponse>;
    /**
     * registryDeleteApiSpecRevision - DeleteApiSpecRevision deletes a revision of a spec.
    **/
    registryDeleteApiSpecRevision(req: operations.RegistryDeleteApiSpecRevisionRequest, config?: AxiosRequestConfig): Promise<operations.RegistryDeleteApiSpecRevisionResponse>;
    /**
     * registryDeleteApiVersion - DeleteApiVersion removes a specified version and all of the resources that it owns.
    **/
    registryDeleteApiVersion(req: operations.RegistryDeleteApiVersionRequest, config?: AxiosRequestConfig): Promise<operations.RegistryDeleteApiVersionResponse>;
    /**
     * registryDeleteArtifact - DeleteArtifact removes a specified artifact.
    **/
    registryDeleteArtifact(req: operations.RegistryDeleteArtifactRequest, config?: AxiosRequestConfig): Promise<operations.RegistryDeleteArtifactResponse>;
    /**
     * registryDeleteProject - DeleteProject removes a specified project and all of the resources that it owns.
    **/
    registryDeleteProject(req: operations.RegistryDeleteProjectRequest, config?: AxiosRequestConfig): Promise<operations.RegistryDeleteProjectResponse>;
    /**
     * registryGetApi - GetApi returns a specified API.
    **/
    registryGetApi(req: operations.RegistryGetApiRequest, config?: AxiosRequestConfig): Promise<operations.RegistryGetApiResponse>;
    /**
     * registryGetApiSpec - GetApiSpec returns a specified spec.
    **/
    registryGetApiSpec(req: operations.RegistryGetApiSpecRequest, config?: AxiosRequestConfig): Promise<operations.RegistryGetApiSpecResponse>;
    /**
     * registryGetApiSpecContents - GetApiSpecContents returns the contents of a specified spec.
    **/
    registryGetApiSpecContents(req: operations.RegistryGetApiSpecContentsRequest, config?: AxiosRequestConfig): Promise<operations.RegistryGetApiSpecContentsResponse>;
    /**
     * registryGetApiVersion - GetApiVersion returns a specified version.
    **/
    registryGetApiVersion(req: operations.RegistryGetApiVersionRequest, config?: AxiosRequestConfig): Promise<operations.RegistryGetApiVersionResponse>;
    /**
     * registryGetArtifact - GetArtifact returns a specified artifact.
    **/
    registryGetArtifact(req: operations.RegistryGetArtifactRequest, config?: AxiosRequestConfig): Promise<operations.RegistryGetArtifactResponse>;
    /**
     * registryGetArtifactContents - GetArtifactContents returns the contents of a specified artifact.
    **/
    registryGetArtifactContents(req: operations.RegistryGetArtifactContentsRequest, config?: AxiosRequestConfig): Promise<operations.RegistryGetArtifactContentsResponse>;
    /**
     * registryGetProject - GetProject returns a specified project.
    **/
    registryGetProject(req: operations.RegistryGetProjectRequest, config?: AxiosRequestConfig): Promise<operations.RegistryGetProjectResponse>;
    /**
     * registryGetStatus - GetStatus returns the status of the service. GetStatus is for verifying open source deployments only and is not included in hosted versions of the API.
    **/
    registryGetStatus(config?: AxiosRequestConfig): Promise<operations.RegistryGetStatusResponse>;
    /**
     * registryListApiSpecRevisions - ListApiSpecRevisions lists all revisions of a spec. Revisions are returned in descending order of revision creation time.
    **/
    registryListApiSpecRevisions(req: operations.RegistryListApiSpecRevisionsRequest, config?: AxiosRequestConfig): Promise<operations.RegistryListApiSpecRevisionsResponse>;
    /**
     * registryListApiSpecs - ListApiSpecs returns matching specs.
    **/
    registryListApiSpecs(req: operations.RegistryListApiSpecsRequest, config?: AxiosRequestConfig): Promise<operations.RegistryListApiSpecsResponse>;
    /**
     * registryListApiVersions - ListApiVersions returns matching versions.
    **/
    registryListApiVersions(req: operations.RegistryListApiVersionsRequest, config?: AxiosRequestConfig): Promise<operations.RegistryListApiVersionsResponse>;
    /**
     * registryListApis - ListApis returns matching APIs.
    **/
    registryListApis(req: operations.RegistryListApisRequest, config?: AxiosRequestConfig): Promise<operations.RegistryListApisResponse>;
    /**
     * registryListArtifacts - ListArtifacts returns matching artifacts.
    **/
    registryListArtifacts(req: operations.RegistryListArtifactsRequest, config?: AxiosRequestConfig): Promise<operations.RegistryListArtifactsResponse>;
    /**
     * registryListProjects - ListProjects returns matching projects.
    **/
    registryListProjects(req: operations.RegistryListProjectsRequest, config?: AxiosRequestConfig): Promise<operations.RegistryListProjectsResponse>;
    /**
     * registryReplaceArtifact - ReplaceArtifact can be used to replace a specified artifact.
    **/
    registryReplaceArtifact(req: operations.RegistryReplaceArtifactRequest, config?: AxiosRequestConfig): Promise<operations.RegistryReplaceArtifactResponse>;
    /**
     * registryRollbackApiSpec - RollbackApiSpec sets the current revision to a specified prior revision. Note that this creates a new revision with a new revision ID.
    **/
    registryRollbackApiSpec(req: operations.RegistryRollbackApiSpecRequest, config?: AxiosRequestConfig): Promise<operations.RegistryRollbackApiSpecResponse>;
    /**
     * registryTagApiSpecRevision - TagApiSpecRevision adds a tag to a specified revision of a spec.
    **/
    registryTagApiSpecRevision(req: operations.RegistryTagApiSpecRevisionRequest, config?: AxiosRequestConfig): Promise<operations.RegistryTagApiSpecRevisionResponse>;
    /**
     * registryUpdateApi - UpdateApi can be used to modify a specified API.
    **/
    registryUpdateApi(req: operations.RegistryUpdateApiRequest, config?: AxiosRequestConfig): Promise<operations.RegistryUpdateApiResponse>;
    /**
     * registryUpdateApiSpec - UpdateApiSpec can be used to modify a specified spec.
    **/
    registryUpdateApiSpec(req: operations.RegistryUpdateApiSpecRequest, config?: AxiosRequestConfig): Promise<operations.RegistryUpdateApiSpecResponse>;
    /**
     * registryUpdateApiVersion - UpdateApiVersion can be used to modify a specified version.
    **/
    registryUpdateApiVersion(req: operations.RegistryUpdateApiVersionRequest, config?: AxiosRequestConfig): Promise<operations.RegistryUpdateApiVersionResponse>;
    /**
     * registryUpdateProject - UpdateProject can be used to modify a specified project.
    **/
    registryUpdateProject(req: operations.RegistryUpdateProjectRequest, config?: AxiosRequestConfig): Promise<operations.RegistryUpdateProjectResponse>;
}
export {};
