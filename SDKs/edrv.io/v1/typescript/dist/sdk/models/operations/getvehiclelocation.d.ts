import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetVehicleLocationPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetVehicleLocationRequest extends SpeakeasyBase {
    pathParams: GetVehicleLocationPathParams;
}
export declare class GetVehicleLocationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
