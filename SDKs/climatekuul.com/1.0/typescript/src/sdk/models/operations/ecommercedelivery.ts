import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export const ECOMMERCEDELIVERY_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
];



export class EcommerceDeliveryHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType: string;
}


export class EcommerceDeliveryRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=apiKey_l1;" })
  apiKeyL1: string;

  @Metadata({ data: "form, name=apiKey_l2;" })
  apiKeyL2: string;

  @Metadata({ data: "form, name=destination_airport_code;" })
  destinationAirportCode?: string;

  @Metadata({ data: "form, name=destination_latitude;" })
  destinationLatitude: number;

  @Metadata({ data: "form, name=destination_longitude;" })
  destinationLongitude: number;

  @Metadata({ data: "form, name=origin_airport_code;" })
  originAirportCode?: string;

  @Metadata({ data: "form, name=origin_latitude;" })
  originLatitude: number;

  @Metadata({ data: "form, name=origin_longitude;" })
  originLongitude: number;

  @Metadata({ data: "form, name=volumetric_weight;" })
  volumetricWeight: number;

  @Metadata({ data: "form, name=waybill_type;" })
  waybillType: string;
}


export class EcommerceDeliveryRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  headers: EcommerceDeliveryHeaders;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: EcommerceDeliveryRequestBody;
}


export class EcommerceDeliveryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
