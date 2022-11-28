import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetShipmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shipmentId" })
  shipmentId: string;
}


export class GetShipmentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetShipmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetShipmentPathParams;

  @SpeakeasyMetadata()
  security: GetShipmentSecurity;
}


export class GetShipmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  shipment?: shared.Shipment;

  @SpeakeasyMetadata()
  statusCode: number;
}
