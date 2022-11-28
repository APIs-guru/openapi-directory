import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Leg1 } from "./leg1";



export class AirtravelMultilegRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiKey_l1" })
  apiKeyL1: string;

  @SpeakeasyMetadata({ data: "json, name=apiKey_l2" })
  apiKeyL2: string;

  @SpeakeasyMetadata({ data: "json, name=contactEmail" })
  contactEmail: string;

  @SpeakeasyMetadata({ data: "json, name=contactFirstName" })
  contactFirstName: string;

  @SpeakeasyMetadata({ data: "json, name=contactLastName" })
  contactLastName: string;

  @SpeakeasyMetadata({ data: "json, name=leg1" })
  leg1: Leg1;

  @SpeakeasyMetadata({ data: "json, name=leg2" })
  leg2: Leg1;

  @SpeakeasyMetadata({ data: "json, name=leg3" })
  leg3: Leg1;

  @SpeakeasyMetadata({ data: "json, name=legs_count" })
  legsCount: string;

  @SpeakeasyMetadata({ data: "json, name=number_of_passengers" })
  numberOfPassengers: string;

  @SpeakeasyMetadata({ data: "json, name=travel_mode" })
  travelMode: string;
}
