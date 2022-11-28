import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";

export const UrbanDeliveryServerList = [
	"http://api.climatekuul.com:8000/footprint",
] as const;


export class UrbanDeliveryRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=apiKey_l1;" })
  apiKeyL1: string;

  @SpeakeasyMetadata({ data: "form, name=apiKey_l2;" })
  apiKeyL2: string;

  @SpeakeasyMetadata({ data: "form, name=destination_latitude;" })
  destinationLatitude: number;

  @SpeakeasyMetadata({ data: "form, name=destination_longitude;" })
  destinationLongitude: number;

  @SpeakeasyMetadata({ data: "form, name=item_count;" })
  itemCount: number;

  @SpeakeasyMetadata({ data: "form, name=origin_latitude;" })
  originLatitude: number;

  @SpeakeasyMetadata({ data: "form, name=origin_longitude;" })
  originLongitude: number;

  @SpeakeasyMetadata({ data: "form, name=vehicle_type;" })
  vehicleType: string;
}


export class UrbanDeliveryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UrbanDeliveryRequestBody;
}


export class UrbanDeliveryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
