import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Barcode {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getBarcodeDecodeTypes - Get the supported barcode types for the decoding process.
    **/
    getBarcodeDecodeTypes(req: operations.GetBarcodeDecodeTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetBarcodeDecodeTypesResponse>;
    /**
     * getBarcodeEncode - Get a Bar Code image for the given barcode number
    **/
    getBarcodeEncode(req: operations.GetBarcodeEncodeRequest, config?: AxiosRequestConfig): Promise<operations.GetBarcodeEncodeResponse>;
    /**
     * getBarcodeEncodeTypes - Get the supported barcode types for encoding / image generation.
    **/
    getBarcodeEncodeTypes(req: operations.GetBarcodeEncodeTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetBarcodeEncodeTypesResponse>;
    /**
     * postBarcodeDecode - Decode a Barcode image and return the cotents if successful
    **/
    postBarcodeDecode(req: operations.PostBarcodeDecodeRequest, config?: AxiosRequestConfig): Promise<operations.PostBarcodeDecodeResponse>;
}
