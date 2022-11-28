import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";

export const RoadDistanceServerList = [
	"http://api.climatekuul.com:8000/footprint",
] as const;


export class RoadDistanceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=apiKey_l1;" })
  apiKeyL1: string;

  @SpeakeasyMetadata({ data: "form, name=apiKey_l2;" })
  apiKeyL2: string;

  @SpeakeasyMetadata({ data: "form, name=travel_distance;" })
  travelDistance: number;

  @SpeakeasyMetadata({ data: "form, name=trip_end;" })
  tripEnd: number;

  @SpeakeasyMetadata({ data: "form, name=trip_start;" })
  tripStart: number;

  @SpeakeasyMetadata({ data: "form, name=vehicle_make;" })
  vehicleMake?: string;

  @SpeakeasyMetadata({ data: "form, name=vehicle_type;" })
  vehicleType: string;

  @SpeakeasyMetadata({ data: "form, name=vehicle_year;" })
  vehicleYear?: number;
}


export class RoadDistanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: RoadDistanceRequestBody;
}


export class RoadDistanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
