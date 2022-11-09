import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export const URBANDELIVERY_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
];



export class UrbanDeliveryRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=apiKey_l1;" })
  apiKeyL1: string;

  @Metadata({ data: "form, name=apiKey_l2;" })
  apiKeyL2: string;

  @Metadata({ data: "form, name=destination_latitude;" })
  destinationLatitude: number;

  @Metadata({ data: "form, name=destination_longitude;" })
  destinationLongitude: number;

  @Metadata({ data: "form, name=item_count;" })
  itemCount: number;

  @Metadata({ data: "form, name=origin_latitude;" })
  originLatitude: number;

  @Metadata({ data: "form, name=origin_longitude;" })
  originLongitude: number;

  @Metadata({ data: "form, name=vehicle_type;" })
  vehicleType: string;
}


export class UrbanDeliveryRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UrbanDeliveryRequestBody;
}


export class UrbanDeliveryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
