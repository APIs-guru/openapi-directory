import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CancelShipmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=shipmentId" })
  shipmentId: string;
}


export class CancelShipmentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class CancelShipmentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CancelShipmentPathParams;

  @Metadata()
  security: CancelShipmentSecurity;
}


export class CancelShipmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  shipment?: shared.Shipment;

  @Metadata()
  statusCode: number;
}
