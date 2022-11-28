import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Routines {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * bigqueryRoutinesDelete - Deletes the routine specified by routineId from the dataset.
    **/
    bigqueryRoutinesDelete(req: operations.BigqueryRoutinesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryRoutinesDeleteResponse>;
    /**
     * bigqueryRoutinesGet - Gets the specified routine resource by routine ID.
    **/
    bigqueryRoutinesGet(req: operations.BigqueryRoutinesGetRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryRoutinesGetResponse>;
    /**
     * bigqueryRoutinesInsert - Creates a new routine in the dataset.
    **/
    bigqueryRoutinesInsert(req: operations.BigqueryRoutinesInsertRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryRoutinesInsertResponse>;
    /**
     * bigqueryRoutinesList - Lists all routines in the specified dataset. Requires the READER dataset role.
    **/
    bigqueryRoutinesList(req: operations.BigqueryRoutinesListRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryRoutinesListResponse>;
    /**
     * bigqueryRoutinesUpdate - Updates information in an existing routine. The update method replaces the entire Routine resource.
    **/
    bigqueryRoutinesUpdate(req: operations.BigqueryRoutinesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryRoutinesUpdateResponse>;
}
