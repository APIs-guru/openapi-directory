import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class OpenMeter {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * omActivities - Public shared smart meters installed in Germany and available for subservices and exploration.
     *
     * Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery.
     *
    **/
    omActivities(config?: AxiosRequestConfig): Promise<operations.OmActivitiesResponse>;
    /**
     * omMeters - Public shared smart meters installed in Germany and available for subservices and exploration.
     *
     * Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery.
     *
    **/
    omMeters(config?: AxiosRequestConfig): Promise<operations.OmMetersResponse>;
    /**
     * omReadings - Public shared smart meters installed in Germany and available for subservices and exploration.
     *
     * Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery.
     *
    **/
    omReadings(config?: AxiosRequestConfig): Promise<operations.OmReadingsResponse>;
}
