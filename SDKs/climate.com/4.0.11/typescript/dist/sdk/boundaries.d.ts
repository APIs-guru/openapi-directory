import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Boundaries {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * fetchBoundaries - Retrieve Boundaries in batch
     *
     * Retrieve multiple **Boundaries** (up to 10 per request).
    **/
    fetchBoundaries(req: operations.FetchBoundariesRequest, config?: AxiosRequestConfig): Promise<operations.FetchBoundariesResponse>;
    /**
     * fetchBoundaryById - Retrieve a Boundary by ID
     *
     * Retrieve a **Boundary** by ID.
    **/
    fetchBoundaryById(req: operations.FetchBoundaryByIdRequest, config?: AxiosRequestConfig): Promise<operations.FetchBoundaryByIdResponse>;
    /**
     * uploadBoundary - Upload a boundary
     *
     * Upload a **Boundary** entry by passing the geometry of the boundary. This will store the boundary but will not create field in Climate FieldView and will not link to an existing field in Climate FieldView.
     * This is restricted to callers with **boundaries:write** scope.
     * To upload a field boundary for field creation in Climate FieldView, please use **POST /v4/uploads**.
    **/
    uploadBoundary(req: operations.UploadBoundaryRequest, config?: AxiosRequestConfig): Promise<operations.UploadBoundaryResponse>;
}
