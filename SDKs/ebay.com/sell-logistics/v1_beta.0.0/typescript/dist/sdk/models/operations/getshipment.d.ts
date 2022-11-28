import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetShipmentPathParams extends SpeakeasyBase {
    shipmentId: string;
}
export declare class GetShipmentSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetShipmentRequest extends SpeakeasyBase {
    pathParams: GetShipmentPathParams;
    security: GetShipmentSecurity;
}
export declare class GetShipmentResponse extends SpeakeasyBase {
    contentType: string;
    shipment?: shared.Shipment;
    statusCode: number;
}
