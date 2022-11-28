import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://edrv.io//api.edrv.io"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * cancelreservation - Use to request a delete an existing reservation. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
    **/
    cancelreservation(req: operations.CancelreservationRequest, config?: AxiosRequestConfig): Promise<operations.CancelreservationResponse>;
    /**
     * deleteChargeStation - Use to delete a charge station
    **/
    deleteChargeStation(req: operations.DeleteChargeStationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteChargeStationResponse>;
    /**
     * deleteConnector - Delete a connector
    **/
    deleteConnector(req: operations.DeleteConnectorRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConnectorResponse>;
    /**
     * deleteDriver - Delete a driver
    **/
    deleteDriver(req: operations.DeleteDriverRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDriverResponse>;
    /**
     * deleteLocation - Delete a location
    **/
    deleteLocation(req: operations.DeleteLocationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLocationResponse>;
    /**
     * deleteToken - Use to delete a token
    **/
    deleteToken(req: operations.DeleteTokenRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTokenResponse>;
    /**
     * deletechargingschedule - Delete a smart charging schedule
    **/
    deletechargingschedule(req: operations.DeletechargingscheduleRequest, config?: AxiosRequestConfig): Promise<operations.DeletechargingscheduleResponse>;
    /**
     * getChargeStation - Get a single charge station's data
    **/
    getChargeStation(req: operations.GetChargeStationRequest, config?: AxiosRequestConfig): Promise<operations.GetChargeStationResponse>;
    /**
     * getChargeStationConnectors - List connectors for a chargestation
    **/
    getChargeStationConnectors(req: operations.GetChargeStationConnectorsRequest, config?: AxiosRequestConfig): Promise<operations.GetChargeStationConnectorsResponse>;
    /**
     * getChargeStations - List all Chargestations
    **/
    getChargeStations(req: operations.GetChargeStationsRequest, config?: AxiosRequestConfig): Promise<operations.GetChargeStationsResponse>;
    /**
     * getCommands - Get Commands data
    **/
    getCommands(req: operations.GetCommandsRequest, config?: AxiosRequestConfig): Promise<operations.GetCommandsResponse>;
    /**
     * getConfiguration - Get one Configuration data
    **/
    getConfiguration(req: operations.GetConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetConfigurationResponse>;
    /**
     * getConfigurations - Get Configurations data
    **/
    getConfigurations(req: operations.GetConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.GetConfigurationsResponse>;
    /**
     * getConnector - Get a connector
    **/
    getConnector(req: operations.GetConnectorRequest, config?: AxiosRequestConfig): Promise<operations.GetConnectorResponse>;
    /**
     * getConnectors - List connectors
    **/
    getConnectors(req: operations.GetConnectorsRequest, config?: AxiosRequestConfig): Promise<operations.GetConnectorsResponse>;
    /**
     * getDriver - Get a driver's data
    **/
    getDriver(req: operations.GetDriverRequest, config?: AxiosRequestConfig): Promise<operations.GetDriverResponse>;
    /**
     * getDrivers - List all drivers
    **/
    getDrivers(req: operations.GetDriversRequest, config?: AxiosRequestConfig): Promise<operations.GetDriversResponse>;
    /**
     * getLocation - Get a location's data
    **/
    getLocation(req: operations.GetLocationRequest, config?: AxiosRequestConfig): Promise<operations.GetLocationResponse>;
    /**
     * getLocations - Get Locations data
    **/
    getLocations(req: operations.GetLocationsRequest, config?: AxiosRequestConfig): Promise<operations.GetLocationsResponse>;
    /**
     * getOrganization - Get one organization's data by id
    **/
    getOrganization(req: operations.GetOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationResponse>;
    /**
     * getOrganizations - Get an array of all Organizations
    **/
    getOrganizations(req: operations.GetOrganizationsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationsResponse>;
    /**
     * getRealtime - Use to request a Websockets handshake
    **/
    getRealtime(req: operations.GetRealtimeRequest, config?: AxiosRequestConfig): Promise<operations.GetRealtimeResponse>;
    /**
     * getReservation - Get one reservation data
    **/
    getReservation(req: operations.GetReservationRequest, config?: AxiosRequestConfig): Promise<operations.GetReservationResponse>;
    /**
     * getReservations - Get Reservations data
    **/
    getReservations(req: operations.GetReservationsRequest, config?: AxiosRequestConfig): Promise<operations.GetReservationsResponse>;
    /**
     * getToken - Get a single token's data
    **/
    getToken(req: operations.GetTokenRequest, config?: AxiosRequestConfig): Promise<operations.GetTokenResponse>;
    /**
     * getTokens - List tokens
    **/
    getTokens(req: operations.GetTokensRequest, config?: AxiosRequestConfig): Promise<operations.GetTokensResponse>;
    /**
     * getTransaction - Get a specific transaction
    **/
    getTransaction(req: operations.GetTransactionRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionResponse>;
    /**
     * getTransactionCost - Get a specific transaction's cost
    **/
    getTransactionCost(req: operations.GetTransactionCostRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionCostResponse>;
    /**
     * getTransactions - Get a list of transactions
    **/
    getTransactions(req: operations.GetTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionsResponse>;
    /**
     * getVariables - Get a charge station's config variables
    **/
    getVariables(req: operations.GetVariablesRequest, config?: AxiosRequestConfig): Promise<operations.GetVariablesResponse>;
    /**
     * getVehicle - Get a vehicle's data
    **/
    getVehicle(req: operations.GetVehicleRequest, config?: AxiosRequestConfig): Promise<operations.GetVehicleResponse>;
    /**
     * getVehicleBattery - Get a vehicle's battery
    **/
    getVehicleBattery(req: operations.GetVehicleBatteryRequest, config?: AxiosRequestConfig): Promise<operations.GetVehicleBatteryResponse>;
    /**
     * getVehicleCharge - Get a vehicle's charge
    **/
    getVehicleCharge(req: operations.GetVehicleChargeRequest, config?: AxiosRequestConfig): Promise<operations.GetVehicleChargeResponse>;
    /**
     * getVehicleLocation - Get a vehicle's location
    **/
    getVehicleLocation(req: operations.GetVehicleLocationRequest, config?: AxiosRequestConfig): Promise<operations.GetVehicleLocationResponse>;
    /**
     * getVehicleOdometer - Get a vehicle's odometer
    **/
    getVehicleOdometer(req: operations.GetVehicleOdometerRequest, config?: AxiosRequestConfig): Promise<operations.GetVehicleOdometerResponse>;
    /**
     * getVehicles - List all vehicles
    **/
    getVehicles(req: operations.GetVehiclesRequest, config?: AxiosRequestConfig): Promise<operations.GetVehiclesResponse>;
    /**
     * patchChargeStation - Update a charge station's data
    **/
    patchChargeStation(req: operations.PatchChargeStationRequest, config?: AxiosRequestConfig): Promise<operations.PatchChargeStationResponse>;
    /**
     * patchChargeStationVariable - Update config variables for a chargestation
    **/
    patchChargeStationVariable(req: operations.PatchChargeStationVariableRequest, config?: AxiosRequestConfig): Promise<operations.PatchChargeStationVariableResponse>;
    /**
     * patchConnector - Update a connector's data
    **/
    patchConnector(req: operations.PatchConnectorRequest, config?: AxiosRequestConfig): Promise<operations.PatchConnectorResponse>;
    /**
     * patchDriver - Update a driver's data
    **/
    patchDriver(req: operations.PatchDriverRequest, config?: AxiosRequestConfig): Promise<operations.PatchDriverResponse>;
    /**
     * patchLocation - Update a location's data
    **/
    patchLocation(req: operations.PatchLocationRequest, config?: AxiosRequestConfig): Promise<operations.PatchLocationResponse>;
    /**
     * patchOrganization - Update an organization's data
    **/
    patchOrganization(req: operations.PatchOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.PatchOrganizationResponse>;
    /**
     * patchToken - Update a token
    **/
    patchToken(req: operations.PatchTokenRequest, config?: AxiosRequestConfig): Promise<operations.PatchTokenResponse>;
    /**
     * postCharge - Change charge
    **/
    postCharge(req: operations.PostChargeRequest, config?: AxiosRequestConfig): Promise<operations.PostChargeResponse>;
    /**
     * postChargeStations - Create a new charge station
    **/
    postChargeStations(req: operations.PostChargeStationsRequest, config?: AxiosRequestConfig): Promise<operations.PostChargeStationsResponse>;
    /**
     * postConfigurations - Create connector with parameters
    **/
    postConfigurations(req: operations.PostConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.PostConfigurationsResponse>;
    /**
     * postConnectors - Create a new connector
    **/
    postConnectors(req: operations.PostConnectorsRequest, config?: AxiosRequestConfig): Promise<operations.PostConnectorsResponse>;
    /**
     * postDrivers - Create a new driver
    **/
    postDrivers(req: operations.PostDriversRequest, config?: AxiosRequestConfig): Promise<operations.PostDriversResponse>;
    /**
     * postLocations - Create a new location
    **/
    postLocations(req: operations.PostLocationsRequest, config?: AxiosRequestConfig): Promise<operations.PostLocationsResponse>;
    /**
     * postTokens - Create a new token
    **/
    postTokens(req: operations.PostTokensRequest, config?: AxiosRequestConfig): Promise<operations.PostTokensResponse>;
    /**
     * remotestart - Use to request a remote start command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
    **/
    remotestart(req: operations.RemotestartRequest, config?: AxiosRequestConfig): Promise<operations.RemotestartResponse>;
    /**
     * remotestop - Use to request a remote stop command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
    **/
    remotestop(req: operations.RemotestopRequest, config?: AxiosRequestConfig): Promise<operations.RemotestopResponse>;
    /**
     * reserve - Use to request a reserve command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
    **/
    reserve(req: operations.ReserveRequest, config?: AxiosRequestConfig): Promise<operations.ReserveResponse>;
    /**
     * reset - Use to request a reset command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
    **/
    reset(req: operations.ResetRequest, config?: AxiosRequestConfig): Promise<operations.ResetResponse>;
    /**
     * setchargingschedule - Set one of charging power or current of a specific chargestation connector
    **/
    setchargingschedule(req: operations.SetchargingscheduleRequest, config?: AxiosRequestConfig): Promise<operations.SetchargingscheduleResponse>;
    /**
     * unlockconnector - Use to request an unlock command for a connector. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
    **/
    unlockconnector(req: operations.UnlockconnectorRequest, config?: AxiosRequestConfig): Promise<operations.UnlockconnectorResponse>;
    /**
     * updatereservation - Use to request a update an existing reservation. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
    **/
    updatereservation(req: operations.UpdatereservationRequest, config?: AxiosRequestConfig): Promise<operations.UpdatereservationResponse>;
}
export {};
