import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Leg1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination_airport_code" })
  destinationAirportCode: string;

  @SpeakeasyMetadata({ data: "json, name=origin_airport_code" })
  originAirportCode: string;

  @SpeakeasyMetadata({ data: "json, name=travel_class" })
  travelClass: string;
}
