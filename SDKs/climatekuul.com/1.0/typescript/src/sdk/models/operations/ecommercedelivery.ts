import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";

export const EcommerceDeliveryServerList = [
	"http://api.climatekuul.com:8000/footprint",
] as const;


export class EcommerceDeliveryHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType: string;
}


export class EcommerceDeliveryRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=apiKey_l1;" })
  apiKeyL1: string;

  @SpeakeasyMetadata({ data: "form, name=apiKey_l2;" })
  apiKeyL2: string;

  @SpeakeasyMetadata({ data: "form, name=destination_airport_code;" })
  destinationAirportCode?: string;

  @SpeakeasyMetadata({ data: "form, name=destination_latitude;" })
  destinationLatitude: number;

  @SpeakeasyMetadata({ data: "form, name=destination_longitude;" })
  destinationLongitude: number;

  @SpeakeasyMetadata({ data: "form, name=origin_airport_code;" })
  originAirportCode?: string;

  @SpeakeasyMetadata({ data: "form, name=origin_latitude;" })
  originLatitude: number;

  @SpeakeasyMetadata({ data: "form, name=origin_longitude;" })
  originLongitude: number;

  @SpeakeasyMetadata({ data: "form, name=volumetric_weight;" })
  volumetricWeight: number;

  @SpeakeasyMetadata({ data: "form, name=waybill_type;" })
  waybillType: string;
}


export class EcommerceDeliveryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  headers: EcommerceDeliveryHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: EcommerceDeliveryRequestBody;
}


export class EcommerceDeliveryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
