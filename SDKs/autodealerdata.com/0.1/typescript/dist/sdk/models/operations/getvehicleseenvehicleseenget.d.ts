import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetVehicleSeenVehicleSeenGetQueryParams extends SpeakeasyBase {
    afterDate: Date;
    jwt: string;
    vin: string;
}
export declare class GetVehicleSeenVehicleSeenGetRequest extends SpeakeasyBase {
    queryParams: GetVehicleSeenVehicleSeenGetQueryParams;
}
export declare class GetVehicleSeenVehicleSeenGetResponse extends SpeakeasyBase {
    booleanResp?: shared.BooleanResp;
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
}
