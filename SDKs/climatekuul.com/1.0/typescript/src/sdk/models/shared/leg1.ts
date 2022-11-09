import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Leg1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination_airport_code" })
  destinationAirportCode: string;

  @Metadata({ data: "json, name=origin_airport_code" })
  originAirportCode: string;

  @Metadata({ data: "json, name=travel_class" })
  travelClass: string;
}
