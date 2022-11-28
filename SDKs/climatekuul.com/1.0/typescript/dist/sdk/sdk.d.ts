import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://api.climatekuul.com:8000/footprint"];
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
     * airtravelCoordinates - airtravelCoordinates
    **/
    airtravelCoordinates(req: operations.AirtravelCoordinatesRequest, config?: AxiosRequestConfig): Promise<operations.AirtravelCoordinatesResponse>;
    /**
     * airtravelMultileg - airtravelMultileg
    **/
    airtravelMultileg(req: operations.AirtravelMultilegRequest, config?: AxiosRequestConfig): Promise<operations.AirtravelMultilegResponse>;
    /**
     * confirmCarbonOffset - confirmCarbonOffset
    **/
    confirmCarbonOffset(req: operations.ConfirmCarbonOffsetRequest, config?: AxiosRequestConfig): Promise<operations.ConfirmCarbonOffsetResponse>;
    /**
     * confirmCarbonOffset1 - confirmCarbonOffset
    **/
    confirmCarbonOffset1(req: operations.ConfirmCarbonOffset1Request, config?: AxiosRequestConfig): Promise<operations.ConfirmCarbonOffset1Response>;
    /**
     * confirmCarbonOffset3 - confirmCarbonOffset
    **/
    confirmCarbonOffset3(req: operations.ConfirmCarbonOffset3Request, config?: AxiosRequestConfig): Promise<operations.ConfirmCarbonOffset3Response>;
    /**
     * confirmCarbonOffset4 - confirmCarbonOffset
    **/
    confirmCarbonOffset4(req: operations.ConfirmCarbonOffset4Request, config?: AxiosRequestConfig): Promise<operations.ConfirmCarbonOffset4Response>;
    /**
     * confirmCarbonOffset5 - confirmCarbonOffset
    **/
    confirmCarbonOffset5(req: operations.ConfirmCarbonOffset5Request, config?: AxiosRequestConfig): Promise<operations.ConfirmCarbonOffset5Response>;
    /**
     * confirmPayment - confirmPayment
    **/
    confirmPayment(req: operations.ConfirmPaymentRequest, config?: AxiosRequestConfig): Promise<operations.ConfirmPaymentResponse>;
    /**
     * confirmPayment1 - confirmPayment
    **/
    confirmPayment1(req: operations.ConfirmPayment1Request, config?: AxiosRequestConfig): Promise<operations.ConfirmPayment1Response>;
    /**
     * confirmPayment3 - confirmPayment
    **/
    confirmPayment3(req: operations.ConfirmPayment3Request, config?: AxiosRequestConfig): Promise<operations.ConfirmPayment3Response>;
    /**
     * confirmPayment4 - confirmPayment
    **/
    confirmPayment4(req: operations.ConfirmPayment4Request, config?: AxiosRequestConfig): Promise<operations.ConfirmPayment4Response>;
    /**
     * confirmPayment5 - confirmPayment
    **/
    confirmPayment5(req: operations.ConfirmPayment5Request, config?: AxiosRequestConfig): Promise<operations.ConfirmPayment5Response>;
    /**
     * confirmPaymentOfTransaction - confirmTransaction
    **/
    confirmPaymentOfTransaction(req: operations.ConfirmPaymentOfTransactionRequest, config?: AxiosRequestConfig): Promise<operations.ConfirmPaymentOfTransactionResponse>;
    /**
     * confirmPaymentOfTransaction1 - confirmTransaction
    **/
    confirmPaymentOfTransaction1(req: operations.ConfirmPaymentOfTransaction1Request, config?: AxiosRequestConfig): Promise<operations.ConfirmPaymentOfTransaction1Response>;
    /**
     * confirmPaymentOfTransaction3 - confirmTransaction
    **/
    confirmPaymentOfTransaction3(req: operations.ConfirmPaymentOfTransaction3Request, config?: AxiosRequestConfig): Promise<operations.ConfirmPaymentOfTransaction3Response>;
    /**
     * confirmPaymentOfTransaction4 - confirmTransaction
    **/
    confirmPaymentOfTransaction4(req: operations.ConfirmPaymentOfTransaction4Request, config?: AxiosRequestConfig): Promise<operations.ConfirmPaymentOfTransaction4Response>;
    /**
     * confirmPaymentOfTransaction5 - confirmTransaction
    **/
    confirmPaymentOfTransaction5(req: operations.ConfirmPaymentOfTransaction5Request, config?: AxiosRequestConfig): Promise<operations.ConfirmPaymentOfTransaction5Response>;
    /**
     * confirmsPlanting - confirmPlanting
    **/
    confirmsPlanting(req: operations.ConfirmsPlantingRequest, config?: AxiosRequestConfig): Promise<operations.ConfirmsPlantingResponse>;
    /**
     * confirmsPlanting2 - confirmPlanting
    **/
    confirmsPlanting2(req: operations.ConfirmsPlanting2Request, config?: AxiosRequestConfig): Promise<operations.ConfirmsPlanting2Response>;
    /**
     * confirmsPlanting3 - confirmPlanting
    **/
    confirmsPlanting3(req: operations.ConfirmsPlanting3Request, config?: AxiosRequestConfig): Promise<operations.ConfirmsPlanting3Response>;
    /**
     * confirmsPlanting4 - confirmPlanting
    **/
    confirmsPlanting4(req: operations.ConfirmsPlanting4Request, config?: AxiosRequestConfig): Promise<operations.ConfirmsPlanting4Response>;
    /**
     * confirmsPlanting5 - confirmPlanting
    **/
    confirmsPlanting5(req: operations.ConfirmsPlanting5Request, config?: AxiosRequestConfig): Promise<operations.ConfirmsPlanting5Response>;
    /**
     * ecommerceDelivery - ecommerceDelivery
    **/
    ecommerceDelivery(req: operations.EcommerceDeliveryRequest, config?: AxiosRequestConfig): Promise<operations.EcommerceDeliveryResponse>;
    /**
     * requestApiKey - requestApiKey
    **/
    requestApiKey(req: operations.RequestApiKeyRequest, config?: AxiosRequestConfig): Promise<operations.RequestApiKeyResponse>;
    /**
     * roadDistance - RoadDistance
    **/
    roadDistance(req: operations.RoadDistanceRequest, config?: AxiosRequestConfig): Promise<operations.RoadDistanceResponse>;
    /**
     * urbanDelivery - urbanDelivery
    **/
    urbanDelivery(req: operations.UrbanDeliveryRequest, config?: AxiosRequestConfig): Promise<operations.UrbanDeliveryResponse>;
}
export {};
