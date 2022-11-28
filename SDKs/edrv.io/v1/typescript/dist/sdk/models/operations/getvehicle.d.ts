import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetVehiclePathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetVehicleQueryParams extends SpeakeasyBase {
    includeDriver?: boolean;
    includeOrganization?: boolean;
    includeToken?: boolean;
}
export declare class GetVehicleRequest extends SpeakeasyBase {
    pathParams: GetVehiclePathParams;
    queryParams: GetVehicleQueryParams;
}
export declare class GetVehicleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
