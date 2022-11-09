import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Leg1 } from "./leg1";
import { Leg1 } from "./leg1";
import { Leg1 } from "./leg1";


export class AirtravelMultilegRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiKey_l1" })
  apiKeyL1: string;

  @Metadata({ data: "json, name=apiKey_l2" })
  apiKeyL2: string;

  @Metadata({ data: "json, name=contactEmail" })
  contactEmail: string;

  @Metadata({ data: "json, name=contactFirstName" })
  contactFirstName: string;

  @Metadata({ data: "json, name=contactLastName" })
  contactLastName: string;

  @Metadata({ data: "json, name=leg1" })
  leg1: Leg1;

  @Metadata({ data: "json, name=leg2" })
  leg2: Leg1;

  @Metadata({ data: "json, name=leg3" })
  leg3: Leg1;

  @Metadata({ data: "json, name=legs_count" })
  legsCount: string;

  @Metadata({ data: "json, name=number_of_passengers" })
  numberOfPassengers: string;

  @Metadata({ data: "json, name=travel_mode" })
  travelMode: string;
}
