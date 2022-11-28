import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Resources {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * directoryResourcesBuildingsDelete - Deletes a building.
    **/
    directoryResourcesBuildingsDelete(req: operations.DirectoryResourcesBuildingsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryResourcesBuildingsDeleteResponse>;
    /**
     * directoryResourcesBuildingsGet - Retrieves a building.
    **/
    directoryResourcesBuildingsGet(req: operations.DirectoryResourcesBuildingsGetRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryResourcesBuildingsGetResponse>;
    /**
     * directoryResourcesBuildingsInsert - Inserts a building.
    **/
    directoryResourcesBuildingsInsert(req: operations.DirectoryResourcesBuildingsInsertRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryResourcesBuildingsInsertResponse>;
    /**
     * directoryResourcesBuildingsList - Retrieves a list of buildings for an account.
    **/
    directoryResourcesBuildingsList(req: operations.DirectoryResourcesBuildingsListRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryResourcesBuildingsListResponse>;
    /**
     * directoryResourcesBuildingsPatch - Patches a building.
    **/
    directoryResourcesBuildingsPatch(req: operations.DirectoryResourcesBuildingsPatchRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryResourcesBuildingsPatchResponse>;
    /**
     * directoryResourcesBuildingsUpdate - Updates a building.
    **/
    directoryResourcesBuildingsUpdate(req: operations.DirectoryResourcesBuildingsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryResourcesBuildingsUpdateResponse>;
    /**
     * directoryResourcesCalendarsDelete - Deletes a calendar resource.
    **/
    directoryResourcesCalendarsDelete(req: operations.DirectoryResourcesCalendarsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryResourcesCalendarsDeleteResponse>;
    /**
     * directoryResourcesCalendarsGet - Retrieves a calendar resource.
    **/
    directoryResourcesCalendarsGet(req: operations.DirectoryResourcesCalendarsGetRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryResourcesCalendarsGetResponse>;
    /**
     * directoryResourcesCalendarsInsert - Inserts a calendar resource.
    **/
    directoryResourcesCalendarsInsert(req: operations.DirectoryResourcesCalendarsInsertRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryResourcesCalendarsInsertResponse>;
    /**
     * directoryResourcesCalendarsList - Retrieves a list of calendar resources for an account.
    **/
    directoryResourcesCalendarsList(req: operations.DirectoryResourcesCalendarsListRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryResourcesCalendarsListResponse>;
    /**
     * directoryResourcesCalendarsPatch - Patches a calendar resource.
    **/
    directoryResourcesCalendarsPatch(req: operations.DirectoryResourcesCalendarsPatchRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryResourcesCalendarsPatchResponse>;
    /**
     * directoryResourcesCalendarsUpdate - Updates a calendar resource. This method supports patch semantics, meaning you only need to include the fields you wish to update. Fields that are not present in the request will be preserved.
    **/
    directoryResourcesCalendarsUpdate(req: operations.DirectoryResourcesCalendarsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryResourcesCalendarsUpdateResponse>;
    /**
     * directoryResourcesFeaturesDelete - Deletes a feature.
    **/
    directoryResourcesFeaturesDelete(req: operations.DirectoryResourcesFeaturesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryResourcesFeaturesDeleteResponse>;
    /**
     * directoryResourcesFeaturesGet - Retrieves a feature.
    **/
    directoryResourcesFeaturesGet(req: operations.DirectoryResourcesFeaturesGetRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryResourcesFeaturesGetResponse>;
    /**
     * directoryResourcesFeaturesInsert - Inserts a feature.
    **/
    directoryResourcesFeaturesInsert(req: operations.DirectoryResourcesFeaturesInsertRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryResourcesFeaturesInsertResponse>;
    /**
     * directoryResourcesFeaturesList - Retrieves a list of features for an account.
    **/
    directoryResourcesFeaturesList(req: operations.DirectoryResourcesFeaturesListRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryResourcesFeaturesListResponse>;
    /**
     * directoryResourcesFeaturesPatch - Patches a feature.
    **/
    directoryResourcesFeaturesPatch(req: operations.DirectoryResourcesFeaturesPatchRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryResourcesFeaturesPatchResponse>;
    /**
     * directoryResourcesFeaturesRename - Renames a feature.
    **/
    directoryResourcesFeaturesRename(req: operations.DirectoryResourcesFeaturesRenameRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryResourcesFeaturesRenameResponse>;
    /**
     * directoryResourcesFeaturesUpdate - Updates a feature.
    **/
    directoryResourcesFeaturesUpdate(req: operations.DirectoryResourcesFeaturesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryResourcesFeaturesUpdateResponse>;
}
