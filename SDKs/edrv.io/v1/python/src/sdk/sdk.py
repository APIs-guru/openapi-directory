

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://edrv.io//api.edrv.io",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def cancelreservation(self, request: operations.CancelreservationRequest) -> operations.CancelreservationResponse:
        r"""Use to request a delete an existing reservation. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/commands/cancelreservation"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CancelreservationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Cancelreservation201ApplicationJSON])
                res.cancelreservation_201_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def delete_charge_station(self, request: operations.DeleteChargeStationRequest) -> operations.DeleteChargeStationResponse:
        r"""Use to delete a charge station
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/chargestations/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteChargeStationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def delete_connector(self, request: operations.DeleteConnectorRequest) -> operations.DeleteConnectorResponse:
        r"""Delete a connector
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/connectors/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteConnectorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def delete_driver(self, request: operations.DeleteDriverRequest) -> operations.DeleteDriverResponse:
        r"""Delete a driver
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/drivers/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDriverResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def delete_location(self, request: operations.DeleteLocationRequest) -> operations.DeleteLocationResponse:
        r"""Delete a location
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/location/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteLocationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def delete_token(self, request: operations.DeleteTokenRequest) -> operations.DeleteTokenResponse:
        r"""Use to delete a token
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/tokens/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def deletechargingschedule(self, request: operations.DeletechargingscheduleRequest) -> operations.DeletechargingscheduleResponse:
        r"""Delete a smart charging schedule
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/commands/chargingschedule"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("DELETE", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletechargingscheduleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Deletechargingschedule201ApplicationJSON])
                res.deletechargingschedule_201_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_charge_station(self, request: operations.GetChargeStationRequest) -> operations.GetChargeStationResponse:
        r"""Get a single charge station's data
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/chargestations/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChargeStationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_charge_station_connectors(self, request: operations.GetChargeStationConnectorsRequest) -> operations.GetChargeStationConnectorsResponse:
        r"""List connectors for a chargestation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/chargestations/{id}/connectors", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChargeStationConnectorsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def get_charge_stations(self, request: operations.GetChargeStationsRequest) -> operations.GetChargeStationsResponse:
        r"""List all Chargestations
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/chargestations"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChargeStationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_commands(self, request: operations.GetCommandsRequest) -> operations.GetCommandsResponse:
        r"""Get Commands data
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/commands"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCommandsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_configuration(self, request: operations.GetConfigurationRequest) -> operations.GetConfigurationResponse:
        r"""Get one Configuration data
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/configurations/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_configurations(self, request: operations.GetConfigurationsRequest) -> operations.GetConfigurationsResponse:
        r"""Get Configurations data
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/configurations"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConfigurationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_connector(self, request: operations.GetConnectorRequest) -> operations.GetConnectorResponse:
        r"""Get a connector
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/connectors/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConnectorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_connectors(self, request: operations.GetConnectorsRequest) -> operations.GetConnectorsResponse:
        r"""List connectors
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/connectors"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConnectorsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_driver(self, request: operations.GetDriverRequest) -> operations.GetDriverResponse:
        r"""Get a driver's data
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/drivers/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDriverResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_drivers(self, request: operations.GetDriversRequest) -> operations.GetDriversResponse:
        r"""List all drivers
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/drivers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDriversResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDrivers200ApplicationJSON])
                res.get_drivers_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_location(self, request: operations.GetLocationRequest) -> operations.GetLocationResponse:
        r"""Get a location's data
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/location/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLocationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_locations(self, request: operations.GetLocationsRequest) -> operations.GetLocationsResponse:
        r"""Get Locations data
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/locations"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLocationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def get_organization(self, request: operations.GetOrganizationRequest) -> operations.GetOrganizationResponse:
        r"""Get one organization's data by id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/organizations/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_organizations(self, request: operations.GetOrganizationsRequest) -> operations.GetOrganizationsResponse:
        r"""Get an array of all Organizations
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/organizations"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_realtime(self, request: operations.GetRealtimeRequest) -> operations.GetRealtimeResponse:
        r"""Use to request a Websockets handshake
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/realtime"
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealtimeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 101:
            pass

        return res

    
    def get_reservation(self, request: operations.GetReservationRequest) -> operations.GetReservationResponse:
        r"""Get one reservation data
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/reservations/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReservationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_reservations(self, request: operations.GetReservationsRequest) -> operations.GetReservationsResponse:
        r"""Get Reservations data
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/reservations"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReservationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_token(self, request: operations.GetTokenRequest) -> operations.GetTokenResponse:
        r"""Get a single token's data
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/tokens/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_tokens(self, request: operations.GetTokensRequest) -> operations.GetTokensResponse:
        r"""List tokens
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/tokens"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTokensResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTokens200ApplicationJSON])
                res.get_tokens_200_application_json_object = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_transaction(self, request: operations.GetTransactionRequest) -> operations.GetTransactionResponse:
        r"""Get a specific transaction
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/transactions/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTransactionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_transaction_cost(self, request: operations.GetTransactionCostRequest) -> operations.GetTransactionCostResponse:
        r"""Get a specific transaction's cost
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/transactions/{id}/cost", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTransactionCostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_transactions(self, request: operations.GetTransactionsRequest) -> operations.GetTransactionsResponse:
        r"""Get a list of transactions
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/transactions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTransactionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTransactions200ApplicationJSON])
                res.get_transactions_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_variables(self, request: operations.GetVariablesRequest) -> operations.GetVariablesResponse:
        r"""Get a charge station's config variables
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/commands/{id}/variables", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVariablesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_vehicle(self, request: operations.GetVehicleRequest) -> operations.GetVehicleResponse:
        r"""Get a vehicle's data
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/vehicles/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVehicleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_vehicle_battery(self, request: operations.GetVehicleBatteryRequest) -> operations.GetVehicleBatteryResponse:
        r"""Get a vehicle's battery
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/vehicles/{id}/battery", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVehicleBatteryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_vehicle_charge(self, request: operations.GetVehicleChargeRequest) -> operations.GetVehicleChargeResponse:
        r"""Get a vehicle's charge
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/vehicles/{id}/charge", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVehicleChargeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_vehicle_location(self, request: operations.GetVehicleLocationRequest) -> operations.GetVehicleLocationResponse:
        r"""Get a vehicle's location
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/vehicles/{id}/location", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVehicleLocationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_vehicle_odometer(self, request: operations.GetVehicleOdometerRequest) -> operations.GetVehicleOdometerResponse:
        r"""Get a vehicle's odometer
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/vehicles/{id}/odometer", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVehicleOdometerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_vehicles(self, request: operations.GetVehiclesRequest) -> operations.GetVehiclesResponse:
        r"""List all vehicles
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/vehicles"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVehiclesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetVehicles200ApplicationJSON])
                res.get_vehicles_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def patch_charge_station(self, request: operations.PatchChargeStationRequest) -> operations.PatchChargeStationResponse:
        r"""Update a charge station's data
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/chargestations/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchChargeStationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchChargeStation200ApplicationJSON])
                res.patch_charge_station_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def patch_charge_station_variable(self, request: operations.PatchChargeStationVariableRequest) -> operations.PatchChargeStationVariableResponse:
        r"""Update config variables for a chargestation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/commands/{id}/variables", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchChargeStationVariableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchChargeStationVariable201ApplicationJSON])
                res.patch_charge_station_variable_201_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def patch_connector(self, request: operations.PatchConnectorRequest) -> operations.PatchConnectorResponse:
        r"""Update a connector's data
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/connectors/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchConnectorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchConnector201ApplicationJSON])
                res.patch_connector_201_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def patch_driver(self, request: operations.PatchDriverRequest) -> operations.PatchDriverResponse:
        r"""Update a driver's data
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/drivers/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchDriverResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchDriver200ApplicationJSON])
                res.patch_driver_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def patch_location(self, request: operations.PatchLocationRequest) -> operations.PatchLocationResponse:
        r"""Update a location's data
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/location/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchLocationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchLocation200ApplicationJSON])
                res.patch_location_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def patch_organization(self, request: operations.PatchOrganizationRequest) -> operations.PatchOrganizationResponse:
        r"""Update an organization's data
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/organizations/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchOrganizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def patch_token(self, request: operations.PatchTokenRequest) -> operations.PatchTokenResponse:
        r"""Update a token
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/tokens/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchToken201ApplicationJSON])
                res.patch_token_201_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def post_charge(self, request: operations.PostChargeRequest) -> operations.PostChargeResponse:
        r"""Change charge
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/vehicles/{id}/charge", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostChargeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostCharge200ApplicationJSON])
                res.post_charge_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def post_charge_stations(self, request: operations.PostChargeStationsRequest) -> operations.PostChargeStationsResponse:
        r"""Create a new charge station
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/chargestations"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostChargeStationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostChargeStations201ApplicationJSON])
                res.post_charge_stations_201_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def post_configurations(self, request: operations.PostConfigurationsRequest) -> operations.PostConfigurationsResponse:
        r"""Create connector with parameters
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/configurations"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostConfigurationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostConfigurations201ApplicationJSON])
                res.post_configurations_201_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def post_connectors(self, request: operations.PostConnectorsRequest) -> operations.PostConnectorsResponse:
        r"""Create a new connector
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/connectors"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostConnectorsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostConnectors200ApplicationJSON])
                res.post_connectors_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def post_drivers(self, request: operations.PostDriversRequest) -> operations.PostDriversResponse:
        r"""Create a new driver
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/drivers"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDriversResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostDrivers200ApplicationJSON])
                res.post_drivers_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def post_locations(self, request: operations.PostLocationsRequest) -> operations.PostLocationsResponse:
        r"""Create a new location
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/locations"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostLocationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostLocations200ApplicationJSON])
                res.post_locations_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def post_tokens(self, request: operations.PostTokensRequest) -> operations.PostTokensResponse:
        r"""Create a new token
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/tokens"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTokensResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostTokens201ApplicationJSON])
                res.post_tokens_201_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def remotestart(self, request: operations.RemotestartRequest) -> operations.RemotestartResponse:
        r"""Use to request a remote start command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/commands/remotestart"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RemotestartResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Remotestart201ApplicationJSON])
                res.remotestart_201_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def remotestop(self, request: operations.RemotestopRequest) -> operations.RemotestopResponse:
        r"""Use to request a remote stop command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/commands/remotestop"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RemotestopResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def reserve(self, request: operations.ReserveRequest) -> operations.ReserveResponse:
        r"""Use to request a reserve command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/commands/reserve"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReserveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Reserve201ApplicationJSON])
                res.reserve_201_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def reset(self, request: operations.ResetRequest) -> operations.ResetResponse:
        r"""Use to request a reset command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/commands/reset"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ResetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Reset201ApplicationJSON])
                res.reset_201_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def setchargingschedule(self, request: operations.SetchargingscheduleRequest) -> operations.SetchargingscheduleResponse:
        r"""Set one of charging power or current of a specific chargestation connector
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/commands/chargingschedule"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SetchargingscheduleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Setchargingschedule201ApplicationJSON])
                res.setchargingschedule_201_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def unlockconnector(self, request: operations.UnlockconnectorRequest) -> operations.UnlockconnectorResponse:
        r"""Use to request an unlock command for a connector. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/commands/unlockconnector"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UnlockconnectorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Unlockconnector201ApplicationJSON])
                res.unlockconnector_201_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def updatereservation(self, request: operations.UpdatereservationRequest) -> operations.UpdatereservationResponse:
        r"""Use to request a update an existing reservation. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/reservations/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdatereservationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Updatereservation201ApplicationJSON])
                res.updatereservation_201_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    