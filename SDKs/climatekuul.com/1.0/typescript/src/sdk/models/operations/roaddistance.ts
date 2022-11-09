import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export const ROADDISTANCE_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
];



export class RoadDistanceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=apiKey_l1;" })
  apiKeyL1: string;

  @Metadata({ data: "form, name=apiKey_l2;" })
  apiKeyL2: string;

  @Metadata({ data: "form, name=travel_distance;" })
  travelDistance: number;

  @Metadata({ data: "form, name=trip_end;" })
  tripEnd: number;

  @Metadata({ data: "form, name=trip_start;" })
  tripStart: number;

  @Metadata({ data: "form, name=vehicle_make;" })
  vehicleMake?: string;

  @Metadata({ data: "form, name=vehicle_type;" })
  vehicleType: string;

  @Metadata({ data: "form, name=vehicle_year;" })
  vehicleYear?: number;
}


export class RoadDistanceRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: RoadDistanceRequestBody;
}


export class RoadDistanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
