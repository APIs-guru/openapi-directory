import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVehicleDetailsByRegistrationNumberHeaders extends SpeakeasyBase {
    xCorrelationId?: string;
    xApiKey: string;
}
export declare class GetVehicleDetailsByRegistrationNumberRequest extends SpeakeasyBase {
    headers: GetVehicleDetailsByRegistrationNumberHeaders;
    request: shared.VehicleRequest;
}
export declare class GetVehicleDetailsByRegistrationNumberResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    vehicle?: shared.Vehicle;
}
