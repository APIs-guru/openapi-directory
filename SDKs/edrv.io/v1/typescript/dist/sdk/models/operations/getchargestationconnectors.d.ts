import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetChargeStationConnectorsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetChargeStationConnectorsQueryParams extends SpeakeasyBase {
    includeEvse?: boolean;
    includeOrganization?: boolean;
}
export declare class GetChargeStationConnectorsRequest extends SpeakeasyBase {
    pathParams: GetChargeStationConnectorsPathParams;
    queryParams: GetChargeStationConnectorsQueryParams;
}
export declare class GetChargeStationConnectorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
