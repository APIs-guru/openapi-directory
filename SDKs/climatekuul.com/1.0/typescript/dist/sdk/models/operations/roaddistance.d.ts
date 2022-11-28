import { SpeakeasyBase } from "../../../internal/utils";
export declare const RoadDistanceServerList: readonly ["http://api.climatekuul.com:8000/footprint"];
export declare class RoadDistanceRequestBody extends SpeakeasyBase {
    apiKeyL1: string;
    apiKeyL2: string;
    travelDistance: number;
    tripEnd: number;
    tripStart: number;
    vehicleMake?: string;
    vehicleType: string;
    vehicleYear?: number;
}
export declare class RoadDistanceRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: RoadDistanceRequestBody;
}
export declare class RoadDistanceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
