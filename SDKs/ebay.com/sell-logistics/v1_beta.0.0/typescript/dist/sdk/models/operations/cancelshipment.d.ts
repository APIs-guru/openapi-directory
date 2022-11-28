import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CancelShipmentPathParams extends SpeakeasyBase {
    shipmentId: string;
}
export declare class CancelShipmentSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class CancelShipmentRequest extends SpeakeasyBase {
    pathParams: CancelShipmentPathParams;
    security: CancelShipmentSecurity;
}
export declare class CancelShipmentResponse extends SpeakeasyBase {
    contentType: string;
    shipment?: shared.Shipment;
    statusCode: number;
}
