import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Notes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * notesAdd - Create note
     *
     * Create note
    **/
    notesAdd(req: operations.NotesAddRequest, config?: AxiosRequestConfig): Promise<operations.NotesAddResponse>;
    /**
     * notesAll - List notes
     *
     * List notes
    **/
    notesAll(req: operations.NotesAllRequest, config?: AxiosRequestConfig): Promise<operations.NotesAllResponse>;
    /**
     * notesDelete - Delete note
     *
     * Delete note
    **/
    notesDelete(req: operations.NotesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.NotesDeleteResponse>;
    /**
     * notesOne - Get note
     *
     * Get note
    **/
    notesOne(req: operations.NotesOneRequest, config?: AxiosRequestConfig): Promise<operations.NotesOneResponse>;
    /**
     * notesUpdate - Update note
     *
     * Update note
    **/
    notesUpdate(req: operations.NotesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.NotesUpdateResponse>;
}
